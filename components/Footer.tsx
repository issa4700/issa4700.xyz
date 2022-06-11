import React from "react";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

import Link from "next/link";

const Footer = () => {
  const year: number = new Date(Date.now()).getFullYear();
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Link href="/">
            <a>
              <img
                src="/logo.png"
                className="h-9 w-9 grayscale hover:grayscale-0 transition ease-in-out duration-300"
              />
            </a>
          </Link>

          {/* <span className="ml-3 text-xl">issa4700.xyz</span> */}
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2022 Issa Abdullah —
          <a
            href="https://github.com/issa4700"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @issa4700
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-x-2">
          <a className="text-gray-500" href="">
            <AiOutlineGithub className="h-6 w-6" />
          </a>
          <a className="text-gray-500" href="">
            <AiOutlineInstagram className="h-6 w-6" />
          </a>
          <a className="text-gray-500" href="">
            <AiFillLinkedin className="h-6 w-6" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
