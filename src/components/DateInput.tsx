import { ReactComponent as ChevronLeft } from '../assets/icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../assets/icons/chevron-right.svg';
import {
  addOneMonthFromDate,
  diffInMonthsFromToday,
  subOneMonthFromDate,
} from '../infra/date';

interface Props {
  label: string;
  value: Date;
  onChange: (value: Date) => void;
}

export function DateInput({ label, value, onChange }: Props) {
  return (
    <div className="w-auto sm:w-80">
      <label htmlFor="reachDate" className="text-sm text-blue-gray-900">
        {label}
      </label>

      <div
        data-testid="date-input-div"
        className="flex flex-row justify-between mt-1 px-3 rounded-lg border border-solid border-light-gray focus:outline focus:outline-2 focus:outline-brand-second"
        tabIndex={0}
        onKeyUp={(e) => {
          if (e.key === 'ArrowRight') {
            onChange(addOneMonthFromDate(value));
          }
          if (e.key === 'ArrowLeft') {
            onChange(subOneMonthFromDate(value));
          }
        }}
      >
        <button
          disabled={diffInMonthsFromToday(value) <= 1}
          onClick={() => onChange(subOneMonthFromDate(value))}
          data-testid="date-input-previous"
          tabIndex={-1}
        >
          <ChevronLeft />
        </button>
        <div
          className="flex flex-col items-center text-base text-blue-gray-900 py-1"
          data-testid="date-input-description"
        >
          <div className="font-bold">
            {value.toLocaleString('en-US', { month: 'long' })}
          </div>
          <div className="">
            {value.toLocaleString('en-US', { year: 'numeric' })}
          </div>
        </div>
        <button
          tabIndex={-1}
          onClick={() => onChange(addOneMonthFromDate(value))}
          data-testid="date-input-next"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
