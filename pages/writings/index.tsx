import { GetStaticProps, InferGetStaticPropsType } from "next";
import api from "@lib/ghost";
import Layout from "@comp/Layout";
import Card from "@comp/blog/Card";
import { NextSeo } from "next-seo";
import { PostOrPage } from "@tryghost/content-api";

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
        <section className="py-14 lg:px-20">
          {/* Hero */}
          <div className="container mx-auto flex flex-col gap-y-5 px-5">
            <h1 className="text-4xl font-bold text-gray-900">Writings</h1>
            <p className="text-lg leading-relaxed text-gray-600">
              A collection of my random musings.
            </p>
          </div>
        </section>
        <section className="bg-white py-20 lg:px-20">
          <main className="container mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-14 gap-y-20 px-5">
            {/* Display blog post excerpt */}
            {posts.map((post: PostOrPage) => {
              return <Card key={post.id} post={post} />;
            })}
          </main>
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await api.posts
    .browse({ limit: "all" })
    .catch((err: String) => console.log(err));

  return {
    props: {
      posts,
    },
  };
};
