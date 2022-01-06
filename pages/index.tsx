import React from "react";
import Head from "next/head";

const socials = [
  { name: "Linkedin", link: "https://www.linkedin.com/in/issa-abdullah/" },
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
          <p className="text-lg font-thin max-w-prose text-gray-500">
            I am a student at the University of Leeds currently working towards
            a degree in Aerospace Engineering.
          </p>

          <ul className="text-base flex flex-col sm:mt-6">
            {socials.map((social) => (
              <li
                className="text-gray-600 hover:text-gray-900"
                key={social.name}
              >
                <a href={social.link}>{social.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
