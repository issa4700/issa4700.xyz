import React from "react";
import Link from "next/link";
import fmtDate from "@lib/fmtDate";

interface Props {
  post: {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    published_at: Date;
  };
}

const Card = ({ post }: Props) => {
  const { id, slug, title, excerpt, published_at: date } = post;
  return (
    <Link key={id} href={"/writings/" + slug}>
      <a className="border-t dark:border-t-gray-700 py-8 lg:py-12 hover:opacity-75 transition duration-75 ease-in-out">
        <article className="flex flex-wrap md:flex-nowrap">
          <aside className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className="mt-1 text-gray-500">{fmtDate(date)}</span>
          </aside>
          <section className="md:flex-grow space-y-4 ">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 title-font mb-2">
              {title}
            </h2>
            <p className="leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3">
              {excerpt}
            </p>
            <span className="text-pink-700 inline-flex items-center mt-4">
              Read More &rarr;
            </span>
          </section>
        </article>
      </a>
    </Link>
  );
};

export default Card;
