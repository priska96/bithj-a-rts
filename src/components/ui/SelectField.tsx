import { ChangeEvent } from "react";

export interface SelectFieldProps {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  name: string;
  required?: boolean;
}
export const SelectField = ({
  label,
  value,
  options,
  onChange,
  name,
  required,
}: SelectFieldProps) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-main-text"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full rounded-md bg-white/30 border border-gray-300 px-4 py-2 shadow-sm focus:border-primary/20 focus:outline-none focus:ring-primary/20"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
