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
            </Head>
            <main className="content-wrap">
                { children }
            </main>
        </>
    );
};

export default DefaultLayout;
