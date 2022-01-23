import React from "react";
import { DiGithubBadge } from "react-icons/di";
import Link from "next/link";

const Footer = () => {
  const year: number = new Date(Date.now()).getFullYear();
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-500 text-sm py-4 mt-12 capitalize">
      <div className="mx-auto max-w-screen-xl flex flex-col items-center space-y-2">
        <nav>
          <ul>
            <li>
              <a
                href="https://github.com/issa4700"
                className="hover:text-pink-600 dark:text-gray-200"
              >
                <DiGithubBadge className="h-6 w-6" />
              </a>
            </li>
          </ul>
        </nav>
        <div className="dark:text-gray-500">
          {year}{" "}
          <Link href="/">
            <a>Issa Abdullah</a>
          </Link>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
