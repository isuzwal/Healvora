interface ChildProps {
  children: React.ReactNode;
}
export const Screen = ({ children }: ChildProps) => {
  return (
    <div className="max-w-7xl w-full min-h-screen  mx-auto  p-1.5">
      {children}
    </div>
  );
};
