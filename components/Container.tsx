export const Container: React.FC<{ className?: string }> = ({
  className,
  children,
}) => {
  return (
    <div className={`${className} py-20 md:py-24 lg:px-20`}>
      <div className="container mx-auto px-5 flex flex-col lg:flex-row gap-8">
        {children}
      </div>
    </div>
  );
};
