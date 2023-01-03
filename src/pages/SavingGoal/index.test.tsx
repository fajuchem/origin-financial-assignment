import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SavingGoal } from './index';

describe('<SavingGoal />', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(
      new Date('Thu Dec 08 2020 19:27:44 GMT-0300 (Brasilia Standard Time)')
    );
  });

  it('update description after calculating monthly amount', () => {
    render(<SavingGoal />);

    userEvent.click(screen.getByTestId('currency-input'));
    userEvent.keyboard('10000');

    expect(screen.getByTestId('monthly-amount')).toHaveTextContent('$10K');
    expect(screen.getByTestId('goal-description')).toHaveTextContent(
      "You're planning 1 monthly deposits to reach your $10,000 goal by January 2021."
    );

    userEvent.click(screen.getByTestId('date-input-next'));
    expect(screen.getByTestId('monthly-amount')).toHaveTextContent('$5K');
    expect(screen.getByTestId('goal-description')).toHaveTextContent(
      "You're planning 2 monthly deposits to reach your $10,000 goal by February 2021."
    );
  });

  it('update description when moving foward and backward', () => {
    render(<SavingGoal />);

    userEvent.click(screen.getByTestId('currency-input'));
    userEvent.keyboard('10000');
    userEvent.click(screen.getByTestId('date-input-next'));

    expect(screen.getByTestId('goal-description')).toHaveTextContent(
      "You're planning 2 monthly deposits to reach your $10,000 goal by February 2021."
    );

    userEvent.click(screen.getByTestId('date-input-previous'));

    expect(screen.getByTestId('goal-description')).toHaveTextContent(
      "You're planning 1 monthly deposits to reach your $10,000 goal by January 2021."
    );
  });

  it('doesnt do anything when try select current month', () => {
    render(<SavingGoal />);

    userEvent.click(screen.getByTestId('currency-input'));
    userEvent.keyboard('10000');
    userEvent.click(screen.getByTestId('date-input-previous'));

    expect(screen.getByTestId('goal-description')).toHaveTextContent(
      "You're planning 1 monthly deposits to reach your $10,000 goal by January 2021."
    );
  });
});
