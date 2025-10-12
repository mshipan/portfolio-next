import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import { ReactNode } from "react";

const PublicLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-128px)]">{children}</main>
      <Footer />
    </>
  );
};

export default PublicLayout;
