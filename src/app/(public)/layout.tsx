import { ReactNode } from "react";

const PublicLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <h1 className="text-white">Test navebar</h1>
      <main className="min-h-dvh">{children}</main>
      <h1 className="text-white">Test footer</h1>
    </>
  );
};

export default PublicLayout;
