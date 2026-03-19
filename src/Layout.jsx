import Navbar from "./Components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <main className="pt-[110px] md:pt-[130px]">
        {children}
      </main>
    </>
  );
};

export default Layout;