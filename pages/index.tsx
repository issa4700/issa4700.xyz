import React from "react";
import Head from "next/head";
import Layout from "@comp/Layout";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Issa Abdullah</title>
        <meta name="description" content="Issa's personal website." />
      </Head>
      <div className="px-5"></div>
    </Layout>
  );
}
