import React from 'react';
import Head from '@docusaurus/Head';

import { site } from '@site/src/constants/site';
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
                <meta property="og:description" content="The official guide for making bots and other Discord applications using the Pycord library." />
                <meta property="og:title" content="The Pycord Guide" />
                <meta property="og:image" content="https://guide.pycord.dev/img/logo.png" />
                <meta name="theme-color" content="#5865F2" />
            </Head>
            <main className="content-wrap">
                { children }
            </main>
        </>
    );
};

export default DefaultLayout;
