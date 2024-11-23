import Navbar from "../componenets/Navbar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-ubuntu">
      <Navbar />
      {children}
    </main>
  );
}
