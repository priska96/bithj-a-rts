export const Chip = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-2 inline-block rounded-full bg-primary/40 px-4 py-1 text-sm font-medium text-primary/200">
      {children}
    </div>
  );
};
