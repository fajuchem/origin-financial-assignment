import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DateInput } from './index';

describe('<DateInput />', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2020-12-08T22:27:44.000Z'));
  });

  it('add a month when clicked on next button', () => {
    const state = new Date();
    const setState = jest.fn();
    render(<DateInput label="date" value={state} onChange={setState} />);

    userEvent.click(screen.getByTestId('date-input-next'));

    expect(setState).toBeCalledWith(new Date('2021-01-08T22:27:44.000Z'));
  });

  it('sub a month when clicked on previous button', () => {
    const state = new Date('2021-02-08T22:27:44.000Z');
    const setState = jest.fn();
    render(<DateInput label="date" value={state} onChange={setState} />);

    userEvent.click(screen.getByTestId('date-input-previous'));

    expect(setState).toBeCalledWith(new Date('2021-01-08T22:27:44.000Z'));
  });

  it('can only select future months', () => {
    const state = new Date();
    const setState = jest.fn();
    render(<DateInput label="date" value={state} onChange={setState} />);

    const button = screen.getByTestId('date-input-previous');
    userEvent.click(button);

    expect(button).toBeDisabled();
    expect(setState).not.toBeCalled();
  });

  it('update month and year name', () => {
    const state = new Date();
    const setState = jest.fn();
    render(<DateInput label="date" value={state} onChange={setState} />);

    userEvent.click(screen.getByTestId('date-input-next'));

    expect(screen.getByTestId('date-input-description')).toHaveTextContent(
      'December2020'
    );
  });

  it('arrow keys change month when input is focused', () => {
    const state = new Date('2021-01-08T22:27:44.000Z');
    const setState = jest.fn();
    render(<DateInput label="date" value={state} onChange={setState} />);

    const div = screen.getByTestId('date-input-div');

    div.focus();

    expect(div).toHaveFocus();

    userEvent.keyboard('[ArrowRight]');
    expect(setState).toBeCalledWith(new Date('2021-02-08T22:27:44.000Z'));
    userEvent.keyboard('[ArrowLeft]');
    expect(setState).toBeCalledWith(new Date('2020-12-08T22:27:44.000Z'));
  });

  it('arrow keys can only select future months', () => {
    const state = new Date('2021-01-08T22:27:44.000Z');
    const setState = jest.fn();
    render(<DateInput label="date" value={state} onChange={setState} />);

    const div = screen.getByTestId('date-input-div');

    div.focus();

    expect(div).toHaveFocus();

    userEvent.keyboard('[ArrowLeft]');
    expect(setState).not.toBeCalled();
  });
});
