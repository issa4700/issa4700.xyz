import Footer from "@comp/Footer";
import React from "react";

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div>
      <div className="container mx-auto p-6">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
