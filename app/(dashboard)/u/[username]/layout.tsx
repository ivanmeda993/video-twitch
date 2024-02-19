import { redirect } from "next/navigation";

import { getSelfByUsername } from "@/lib/auth-service";

import { Container } from "./_components/container";
import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

interface ICreatorLayoutProps {
  params: {
    username: string;
  };
  children: React.ReactNode;
}
const CreatorLayout = async ({
  children,
  params: { username },
}: ICreatorLayoutProps) => {
  const self = await getSelfByUsername(username);

  if (!self) redirect("/");

  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default CreatorLayout;
