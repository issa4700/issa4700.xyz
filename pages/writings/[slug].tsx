import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import api from "../../lib/ghost";
import React from "react";
import fmtDate from "@lib/fmtDate";
import { NextSeo } from "next-seo";
import Layout from "@comp/Layout";
import { PostOrPage, PostsOrPages } from "@tryghost/content-api";

export default function Post({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { feature_image, feature_image_alt } = post;
  const pubDate: string = fmtDate(post.published_at);

  return (
    <>
      <NextSeo
        title={post.meta_title || post.title}
        description={post.meta_description || post.excerpt}
        openGraph={{
          title: post.title,
          description: post.meta_descript || post.excerpt,
          type: "article",
        }}
      />
      <Layout>
        <article className="w-full lg:max-w-screen-lg mx-auto space-y-8">
          <header className="prose prose-sm sm:prose lg:prose-lg prose-hr:border-white mx-auto">
            <time
              dateTime={new Date(post.published_at).toISOString()}
              className="text-sm text-gray-500"
            >
              {pubDate}
            </time>
            <h1 className="font-serif">
              <span className="dark:text-gray-100">{post.title}</span>
            </h1>
          </header>

          {feature_image && (
            <figure className="relative">
              <img
                className="w-full"
                src={post.feature_image}
                alt={feature_image_alt || "Featured image"}
              />
            </figure>
          )}

          <main
            className="mx-auto prose dark:prose-invert prose-zinc lg:prose-lg prose-a:text-pink-700 hover:prose-a:text-pink-900 "
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </Layout>
    </>
  );
}

// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
export const getStaticProps: GetStaticProps = async (context) => {
  const postSlug = (context?.params?.slug as string) || null;
  const post = await api.posts.read({ slug: postSlug });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Get Posts from Ghost CMS
  const posts =
    (await api.posts
      .browse({ limit: "all" })
      .catch((err: String) => console.log(err))) || [];

  // Get the paths we want to create based on posts
  const paths = posts.map((post: PostOrPage) => ({
    params: { slug: post.slug },
  }));

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false };
};
