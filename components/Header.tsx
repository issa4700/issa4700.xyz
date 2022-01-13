import React from "react";
import Link from "next/link";

const Nav = [
  { label: "Home", href: "/" },
  { label: "Writings", href: "/writings" },
];

const Header = () => {
  return (
    <header className="w-full container mx-auto flex flex-row p-6 justify-between text-gray-700 items-center">
      <div className="">
        <Link href="/">
          <a className="text-2xl text-gray-800 font-extrabold hover:opacity-75 transition duration-75 ease-in-out">
            Issa.Abdullah
          </a>
        </Link>
      </div>
      <div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {Nav.map((navitem) => (
            <Link key={navitem.href} href={navitem.href}>
              <a className="text-gray-700 hover:text-pink-700 px-3 py-2 transition duration-75 ease-in-out">
                {navitem.label}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
