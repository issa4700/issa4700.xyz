import Head from "next/head";
import Link from "next/link";
import Layout from "@comp/Layout";
import ImageCard from "@comp/ImageCard";
import api from "@lib/ghost";
import fmtDate from "@lib/fmtDate";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Container } from "@comp/Container";
import { PostOrPage } from "@tryghost/content-api";

const skills = [
  {
    category: "Programming Languages",
    items: ["JavaScript/TypeScript", "Python", "MATLAB"],
  },
  {
    category: "Frontend Frameworks",
    items: ["React", "NextJS"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "Redis"],
  },
  {
    category: "Other",
    items: ["Git", "Docker", "AWS"],
  },
];

const projects = [
  {
    name: "AQ Energy",
    description: "Corporate website.",
    image: "bg1.jpg",
    link: "https://www.aq.energy",
  },
  {
    name: "Engineering Project",
    description: "Viscoelastic contact model developed in MATLAB.",
    image: "bg2.jpg",
    link: "#",
  },
  {
    name: "Aker",
    description: "Minecraft player management system.",
    image: "bg3.jpg",
    link: "#",
  },
];

export default function Index({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Head>
        <title>Issa Abdullah</title>
        <meta name="description" content="Issa's personal website." />
      </Head>
      <div className="pt-24 mb-20 lg:px-20">
        {/* Hero */}
        <div className="container mx-auto flex flex-col gap-y-5 px-5">
          <div className="flex flex-row items-center gap-4">
            <figure className="bg-blue-100 h-16 w-16 rounded-full">
              <img src="avatar.webp" className="h-full rounded-full" />
            </figure>
            <div className="bg-slate-300 text-sky-900 py-1 px-2 text-sm rounded-md font-semibold">
              👋🏼 Hi, I'm Issa!
            </div>
          </div>
          <h1 className="font-bold text-3xl md:text-5xl text-black max-w-5xl">
            Coffee enthusiast with a passion for code.
          </h1>
          <div className="mt-4 max-w-prose text-lg md:text-xl">
            I'm an Aerospace Engineering graduate from the University of Leeds.
            I like to find creative ways to solve problems and create stuff that
            I find useful.
          </div>
        </div>
      </div>

      {/* New Section */}
      <div className="bg-white pt-20 pb-16 lg:px-20">
        <div className="container mx-auto flex flex-col gap-y-4 px-5">
          <h1 className="text-2xl font-semibold">Featured Work</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-y-5 md:gap-x-5">
            {projects.map((project, idx) => (
              <ImageCard
                key={`project_${idx}`}
                title={project?.name}
                desc={project?.description}
                href={project?.link}
                src={project?.image}
              />
            ))}
          </div>
          <div className="grid place-items-center">
            <Link href="/works">
              <a className="border-2 my-8 border-gray-500 px-5 py-3 hover:scale-105 transition ease-in-out duration-150 uppercase">
                View All Work &rarr;
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Skills section */}
      <Container className="bg-slate-800 text-white">
        <div className="w-full lg:w-1/2 flex flex-col gap-y-2">
          <h1 className="text-3xl font-semibold ">Tech stack</h1>
          <p className="text-lg max-w-prose text-gray-300">
            Technologies that I use regularly in my projects.
          </p>
        </div>
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-y-5 gap-x-4">
          {skills.map((skill) => (
            <div key={"skill__" + skill.category}>
              <h2 className="font-semibold sm:text-lg tracking-wide">
                {skill?.category}
              </h2>
              <ul className="text-gray-300 text-sm gap-y-4 list-item">
                {skill?.items.map((itm) => (
                  <li key={"skill__" + itm}>{itm}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      {/* Posts */}
      <Container className="bg-white">
        <div className="w-full lg:w-1/2 flex flex-col gap-y-2 lg:pr-16 pr-2">
          <h1 className="text-3xl font-semibold ">Latest Posts</h1>
          <p className="text-lg max-w-prose text-gray-600">
            I occasionally post notes and articles on things I've learned or
            projects I've been working on.
          </p>
          <Link href="/writings">
            <a className="font-semibold text-blue-900 hover:text-blue-700 transition ease-in-out duration-150">
              See all posts &rarr;
            </a>
          </Link>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-y-8">
          {posts.map((post: PostOrPage) => (
            <Link key={post.id} href={"/writings/" + post.slug}>
              <a>
                <article className="flex gap-x-4 lg:gap-x-6 items-center hover:opacity-80 hover:translate-x-1 transition ease-in-out duration-150">
                  <figure className="aspect-[3/2] lg:aspect-[16/9] h-24">
                    <img
                      className="object-cover w-full h-full"
                      src={post?.feature_image || ""}
                    />
                  </figure>
                  <div className="flex flex-col justify-between">
                    <h1 className="font-bold sm;text-lg lg:text-xl text-sky-900">
                      {post?.title}
                    </h1>
                    <span className="text-sm text-gray-500">
                      Filed {fmtDate(post.published_at)}
                    </span>
                  </div>
                </article>
              </a>
            </Link>
          ))}
        </div>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await api.posts
    .browse({ limit: 5 })
    .catch((err: String) => console.log(err));

  return {
    props: {
      posts,
    },
  };
};
