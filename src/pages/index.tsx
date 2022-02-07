import React from 'react';
import Layout from '@theme/Layout';
import PYCHero from '@site/src/components/PYCHero';
import PYCButton from '@site/src/components/PYCButton';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Home"
      description="Description will go into a meta tag in <head />">
      <PYCHero title="Pycord Guide" subtitle="Learn the library in a practical way of doing you are mother." hasLogo={ false } />
      <main className="content-wrap--home-page">
        Imagine a place.. where you can learn how to make a Discord bot, how Pycord works and the techniques it uses to make your bot fast and reliable, how to add more advanced features to your Pycord bot without feeling so advanced, and a whole lot more.
      </main>
    </Layout>
  );
}