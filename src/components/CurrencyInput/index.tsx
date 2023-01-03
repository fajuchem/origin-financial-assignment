import { NumericFormat } from 'react-number-format';
import { Icon } from '../Icon';

interface Props {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

const MAX_NUMBER = 1000000000000000;

export function CurrencyInput({ label, value, onChange }: Props) {
  return (
    <div>
      <label htmlFor="amount" className="text-sm text-blue-gray-900">
        {label}
      </label>

      <div className="relative mt-1">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Icon name="dollar-sign" />
        </div>
        <NumericFormat
          name="amount"
          id="amount"
          decimalScale={2}
          data-testid="currency-input"
          allowNegative={false}
          isAllowed={(values) => {
            const { floatValue } = values;
            return Number(floatValue) < MAX_NUMBER;
          }}
          value={value}
          className="text-2xl font-bold text-blue-gray-600 block w-full pl-10 px-3 py-3 rounded-md border border-solid border-light-gray focus:outline focus:outline-2 focus:outline-brand-second"
          onValueChange={(values) => {
            const { floatValue } = values;
            onChange(floatValue || 0);
          }}
          allowLeadingZeros
          thousandSeparator=","
        />
      </div>
    </div>
  );
}
