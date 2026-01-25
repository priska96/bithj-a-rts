import { ChangeEvent } from "react";

export interface TextAreaProps {
  label: string;
  value: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  name: string;
  required?: boolean;
  rows?: number;
  placeholder?: string;
}
export const TextArea = ({
  label,
  value,
  onChange,
  name,
  required,
  rows = 4,
  placeholder,
}: TextAreaProps) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-main-text"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className="mt-1 block w-full rounded-md bg-white/30 border border-gray-300 px-4 py-2 shadow-sm focus:border-primary/20 focus:outline-none focus:ring-primary/20"
      />
    </div>
  );
};
