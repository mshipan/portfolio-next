import Navbar from "@/components/shared/navbar/Navbar";
import { ReactNode } from "react";

const PublicLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <Navbar />
      <main className="min-h-dvh">{children}</main>
      <h1 className="text-white">Test footer</h1>
    </>
  );
};

export default PublicLayout;
