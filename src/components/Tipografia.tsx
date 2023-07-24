interface TipografiaProps {
  children?: React.ReactNode;
}

export const Title = ({ children }: TipografiaProps) => {
  return (
    <h1 className="font-black text-2xl sm:text-3xl font-serif">{children}</h1>
  );
};

export const Subtitle = ({ children }: TipografiaProps) => {
  return (
    <h1 className="font-medium text-lg sm:text-xl font-serif">{children}</h1>
  );
};
