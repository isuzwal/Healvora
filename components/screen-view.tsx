interface ChildrenProps {
  children: React.ReactNode;
}
export const Screen = ({ children }: ChildrenProps) => {
  return (
    <div className="max-w-7xl    min-h-screen w-full mx-auto p-2  ">
      {children}
    </div>
  );
};
