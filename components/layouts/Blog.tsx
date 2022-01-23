import Footer from "@comp/Footer";
import Header from "@comp/Header";
import React from "react";

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Header />
      <div className="flex-grow lg:mx-auto p-6">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
