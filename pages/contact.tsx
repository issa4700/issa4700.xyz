import Layout from "@comp/Layout";
import { NextSeo } from "next-seo";

export default function Contact() {
  return (
    <>
      <NextSeo
        title="Contact Me - Issa Abdullah"
        description="A collection of my random musings."
      />
      <Layout>
        <section className="py-12 lg:px-20">
          <div className="container mx-auto flex flex-col gap-y-5 px-5">
            <h1 className="text-4xl font-bold text-gray-900">Contact</h1>
            <p className="text-lg leading-relaxed text-gray-600">
              Let's get in touch!
            </p>
          </div>
        </section>
        <section className="flex-grow bg-white py-20 lg:px-20"></section>
      </Layout>
    </>
  );
}
