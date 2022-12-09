import { useEffect, useState } from 'react';
import { ReactComponent as BuyAHouse } from '../assets/icons/buy-a-house.svg';
import { ReactComponent as MobileBuyAHouse } from '../assets/icons/mobile-buy-a-house.svg';
import { diffInMonthsFromToday, newDateNextMonth } from '../infra/date';
import { CurrencyInput } from './CurrencyInput';
import { DateInput } from './DateInput';

export function SavingGoal() {
  const [amount, setAmount] = useState(0);
  const [reachDate, setReachDate] = useState(newDateNextMonth());
  const [monthlyAmount, setMonthlyAmount] = useState(0);

  useEffect(
    () => setMonthlyAmount(amount / diffInMonthsFromToday(reachDate)),
    [reachDate, amount]
  );

  return (
    <>
      <div className="relative mx-auto max-w-lg rounded-lg text-brand-primary text-xl pb-6 sm:pt-12 pt-8">
        Let's plan our <span className="font-bold">saving goal.</span>
      </div>
      <div className="relative bg-white px-6 pt-9 pb-10 sm:px-10 sm:mx-auto sm:max-w-lg rounded-lg">
        <div className="flex">
          <div className="sm:hidden">
            <MobileBuyAHouse />
          </div>
          <div className="hidden sm:block">
            <BuyAHouse />
          </div>
          <div className="ml-4">
            <div className="text-gray-900 font-bold text-2xl">Buy a house</div>
            <div className="text-gray-400">Saving goal</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <CurrencyInput
            label="Total amount"
            value={amount}
            setValue={setAmount}
          />
          <DateInput
            label="Reach goal by"
            value={reachDate}
            setValue={setReachDate}
          />
        </div>

        <div className="mt-6 rounded-lg border border-solid border-light-gray ">
          <div className="flex justify-between py-6 px-8">
            <div className="text-xl">Monthly amount</div>
            <div
              className="text-2xl break-words font-bold text-brand-second ml-2"
              data-testid="monthly-amount"
            >
              $
              {monthlyAmount.toLocaleString('en-US', {
                notation: 'compact',
                maximumFractionDigits: 3,
              })}
            </div>
          </div>
          <div
            className="py-6 px-8 text-xs bg-blue-gray"
            data-testid="goal-description"
          >
            You're planning
            <span className="font-bold">
              {' '}
              {diffInMonthsFromToday(reachDate)} monthly deposits{' '}
            </span>
            to reach your
            <span className="font-bold">
              {' $'}
              {amount.toLocaleString('en-US')}{' '}
            </span>
            goal by
            <span className="font-bold">
              {' '}
              {reachDate.toLocaleString('en-US', {
                month: 'long',
                year: 'numeric',
              })}
              .
            </span>
          </div>
        </div>

        <div className="flex justify-center pt-8">
          <button className="bg-brand-primary rounded-full py-4 px-32 text-white font-bold">
            Confirm
          </button>
        </div>
      </div>
    </>
  );
}
