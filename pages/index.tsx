import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/LinkBtn.module.css";

type LinkBtn = {
  name: string;
  label: string;
};

const links = [
  { name: "Blog", link: "/writings" },
  { name: "Github", link: "https://github.com/issa4700" },
  { name: "Linkedin", link: "https://www.linkedin.com/in/issa-abdullah" },
  { name: "Instagram", link: "https://www.instagram.com/issa4700/" },
];

function LinkButton({ name, label }: LinkBtn) {
  return (
    <Link href={label}>
      <a className={styles.LinkBtn}>{name}</a>
    </Link>
  );
}

export default function Index() {
  return (
    <div className="h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Head>
        <title>Issa Abdullah</title>
        <meta name="description" content="Issa's personal website." />
      </Head>
      <main className="flex flex-col max-w-screen-sm mx-auto p-6 space-y-12 h-full">
        <header className="space-y-6 mt-8 text-center">
          <img src="/avatar.svg" className="h-36 w-36 mx-auto rounded-full" />
          <h1 className="text-4xl font-semibold">Issa Abdullah</h1>
          <p className="max-w-md mx-auto">
            I am a student at the University of Leeds currently working towards
            a degree in{" "}
            <span className="text-orange-700 dark:text-orange-300">
              Aerospace Engineering
            </span>
            .
          </p>
        </header>
        <nav className="flex-grow flex flex-col space-y-4">
          {links.map((social) => (
            <LinkButton
              key={social.name}
              name={social.name}
              label={social.link}
            />
          ))}
        </nav>
        <footer className="text-center text-sm text-gray-700 dark:text-gray-200">
          &copy; Issa Abdullah 2022
        </footer>
      </main>
    </div>
  );
}
