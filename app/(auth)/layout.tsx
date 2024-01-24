import { Logo } from "@/app/(auth)/_components/logo";

interface IAuthLayoutProps {
  children: React.ReactNode;
}
const AuthLayout = ({ children }: IAuthLayoutProps) => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-6">
      <Logo />
      {children}
    </div>
  );
};

export default AuthLayout;
