import Footer from "@comp/Footer";
import Header from "@comp/Header";
import React from "react";

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div className="min-h-screen text-gray-800 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
