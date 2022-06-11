import React from "react";
import Link from "next/link";

const Nav = [
  { label: "about", href: "/" },
  { label: "works", href: "/works" },
  { label: "writings", href: "/writings" },
];

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap px-5 py-6 flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-0">
          <img src="/logo.png" className="h-12 w-12" />
        </a>
        <nav className="ml-auto flex flex-wrap items-center text-base justify-center gap-x-5">
          {Nav.map((navitem) => (
            <Link key={`nav_${navitem.label}`} href={navitem.href}>
              <a className="hover:text-gray-900">{navitem.label}</a>
            </Link>
          ))}
        </nav>
        {/* Insert contact button here */}
      </div>
    </header>
  );
};

export default Header;
