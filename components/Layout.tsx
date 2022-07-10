import Footer from "@comp/Footer";
import Header from "@comp/Header";

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div className="h-screen text-gray-800 flex flex-col bg-slate-100 overflow-y-scroll scroll-smooth">
      <Header />
      <main className="flex flex-col flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
