export interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  required?: boolean;
}
export const InputField = ({
  label,
  value,
  onChange,
  name,
  required,
}: InputFieldProps) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full rounded-md bg-white/30 border border-gray-300 px-4 py-2 shadow-sm focus:border-primary/20 focus:outline-none focus:ring-primary/20"
      />
    </div>
  );
};
