import React from "react";
import Layout from "@theme/Layout";
import PYCHero from "@site/src/components/PYCHero";
import PYCButton from "@site/src/components/PYCButton";

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Home"
      description="Description will go into a meta tag in <head />"
    >
      <PYCHero
        title="Pycord Guide"
        subtitle="Learn how to create Discord bots with Pycord"
        hasLogo={true}
      />
      <main className="content-wrap--home-page">
        Imagine a place where you can learn how to create an awesome Discord
        bot, equip it with Pycord, and have it running in less than a minute.
        Imagine a place where you can learn everything about Pycord. Imagine a
        guide. A Pycord Guide!
        <br /> <br />
        Whether you are a newbie or an experienced developer, you will find
        everything you need to know about Pycord here. This guide will teach
        you:
        <ul>
          <li>How to get a brand new bot running from scratch;</li>
          <li>How to create Interactions, Context Menus and Commands;</li>
          <li>In-depth concepts such as Embeds, Reactions, Help Commands, Paginators, etc;</li>
          <li>Popular Topics such as working with Databases, Sharding, etc;</li>
          <li>Ways to handle and manage common errors and best practices for bots;</li>
          <li>And Much More!</li>
        </ul>
      </main>
    </Layout>
  );
}
