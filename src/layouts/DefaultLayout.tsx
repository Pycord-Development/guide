import React from 'react';
import Head from '@docusaurus/Head';
import Layout from "@theme/Layout";

import { site } from '@constants/site';
// import '../scss/main.scss';

interface DefaultLayoutProps {
    title?: string,
    description?: string
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ title, description, children }) => {
    return (
        <>
            <Head>
                <title>{ title } - { site.tagline }</title>
                <meta name="description" content={ description } />

                <meta property="og:type" content="website" />
                <meta property="og:description" content="The official guide for making bots and other Discord applications using the Pycord library." />
                <meta property="og:title" content="The Pycord Guide" />
                <meta property="og:image" content="https://guide.pycord.dev/img/logo.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:alt" content="Pycord Logo" />
                <meta property="og:site_name" content={ title } />
                <meta property="og:locale" content="en_US" />
                <meta property="article:author" content="Pycord Development" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@PycordDev" />
                <meta name="twitter:creator" content="@PycordDev" />
                <meta name="twitter:title" content={ title } />
                <meta name="twitter:description" content="The official guide for making bots and other Discord applications using the Pycord library." />
                <meta name="twitter:image" content={"https://guide.pycord.dev/img/logo.png" } />
                <meta name="twitter:image:alt" content="Pycord Logo" />
                <meta name="theme-color" content="#5865F2" />
            </Head>
            <Layout>
                { children }
            </Layout>
        </>
    );
};

export default DefaultLayout;
