interface TypographyProps {
  children?: React.ReactNode;
  className?: string;
}

export const Title = ({ children, className }: TypographyProps) => {
  return (
    <h2 className={`font-black text-2xl sm:text-3xl font-sans ${className}`}>
      {children}
    </h2>
  );
};

export const Subtitle = ({ children, className }: TypographyProps) => {
  return (
    <h3 className={`font-medium text-lg sm:text-xl font-sans ${className}`}>
      {children}
    </h3>
  );
};

export const Paragraph = ({ children, className }: TypographyProps) => {
  return <p className={`font-normal font-serif ${className}`}>{children}</p>;
};
