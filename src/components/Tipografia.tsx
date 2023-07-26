interface TipografiaProps {
  children?: React.ReactNode;
  className?: string;
}

export const Title = ({ children, className }: TipografiaProps) => {
  return (
    <h2 className={`text-2xl sm:text-3xl font-serif ${className}`}>
      {children}
    </h2>
  );
};

export const Subtitle = ({ children, className }: TipografiaProps) => {
  return (
    <h3 className={`font-medium text-lg sm:text-xl font-serif ${className}`}>
      {children}
    </h3>
  );
};
