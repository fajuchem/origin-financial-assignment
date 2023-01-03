import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CurrencyInput } from './index';

describe('<CurrencyInput />', () => {
  it('display formatted value', () => {
    const state = 0;
    const setState = jest.fn();
    render(<CurrencyInput label="amount" value={state} onChange={setState} />);

    const input = screen.getByLabelText('amount');
    userEvent.click(input);
    userEvent.keyboard('10000');

    expect(setState).toBeCalledWith(10000);
    expect(input).toHaveDisplayValue('010,000');
  });

  it('only allow numbers', () => {
    const state = 0;
    const setState = jest.fn();
    render(<CurrencyInput label="amount" value={state} onChange={setState} />);

    const input = screen.getByLabelText('amount');
    userEvent.click(input);
    userEvent.keyboard('-asdf1');

    expect(setState).toBeCalledWith(1);
    expect(input).toHaveDisplayValue('01');
  });

  it('doesnt allow really big number', () => {
    const state = 0;
    const setState = jest.fn();
    render(<CurrencyInput label="amount" value={state} onChange={setState} />);

    const input = screen.getByLabelText('amount');
    userEvent.click(input);
    userEvent.keyboard('1000000000000000');

    expect(input).toHaveDisplayValue('0100,000,000,000,000');
    userEvent.keyboard('00000');
    expect(input).toHaveDisplayValue('0100,000,000,000,000');
  });
});
