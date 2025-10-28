import { ReactNode } from "react";

const DashboardLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <h1 className="text-white">Dashboard nav</h1>
      <main className="min-h-[calc(100svh-128px)]">{children}</main>
    </>
  );
};

export default DashboardLayout;
