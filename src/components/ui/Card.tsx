export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      {/* next elem makes the box litte bit darker */}
      <div className="absolute -inset-1 bg-primary rounded-3xl blur-xl opacity-25"></div>
      <div className="relative bg-white/30 rounded-2xl p-8 shadow-xl border border-primary/10">
        {children}
      </div>
    </div>
  );
};
