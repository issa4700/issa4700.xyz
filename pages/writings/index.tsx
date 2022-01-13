import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import api from "@lib/ghost";
import Layout from "@comp/layouts/Blog";
import Card from "@comp/blog/Card";
import { NextSeo } from "next-seo";

type Post = {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  published_at: Date;
};

export default function Posts({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo
        title="Issa's Writings"
        description="A collection of my random musings."
      />
      <Layout>
        <div className="max-w-screen-lg mx-auto text-gray-600">
          <main className="flex flex-col">
            <section className="space-y-2 mb-12">
              <h1 className="text-4xl font-bold text-gray-900">Writings</h1>
              <p className="text-lg leading-relaxed text-gray-600">
                A collection of my random musings.
              </p>
            </section>
            {/* Display blog post excerpt */}
            {posts.map((post: Post) => {
              return <Card post={post} />;
            })}
          </main>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts: Post[] = await api.posts
    .browse({ limit: "all" })
    .catch((err: String) => console.log(err));

  return {
    props: {
      posts,
    },
  };
};
