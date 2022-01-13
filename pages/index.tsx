import React from "react";
import Head from "next/head";
import Link from "next/link";

const socials = [
  { name: "Linkedin", link: "https://www.linkedin.com/in/issa-abdullah" },
  { name: "Github", link: "https://github.com/issa4700" },
  { name: "Instagram", link: "https://www.instagram.com/issa4700/" },
];

export default function Index() {
  return (
    <div className="grid place-items-center h-screen">
      <Head>
        <title>Issa Abdullah</title>
        <meta name="description" content="Issa's personal website." />
      </Head>

      <div className="flex flex-col space-y-4 sm:flex-row-reverse items-center ">
        <figure className="w-full md:w-1/2 relative flex justify-center sm:justify-end ">
          <img
            src="/avatar.svg"
            alt="Profile picture"
            className="object-cover w-64 sm:h-80 h-64 sm:w-80 rounded-full bg-gray-200"
          />
        </figure>

        <div className="w-full md:w-1/2 text-center space-y-4 px-6 sm:text-left">
          <h1 className="text-5xl font-semibold text-gray-900">
            Issa Abdullah
          </h1>
          <p className="font-thin max-w-prose text-gray-500">
            I am a student at the University of Leeds currently working towards
            a degree in Aerospace Engineering.
          </p>

          <hr className="sm:hidden" />

          <nav className="text-base flex flex-col sm:mt-6">
            <Link href="/writings">
              <a className="text-gray-600 hover:text-gray-900 py-2 sm:py-0 px-2 lg:px-0 hover:underline">
                Blog
              </a>
            </Link>

            {/* Social channels */}
            {socials.map((social) => (
              <a
                className="text-gray-600 hover:text-gray-900 py-2 sm:py-0 px-2 lg:px-0 hover:underline"
                key={social.name}
                href={social.link}
              >
                {social.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
