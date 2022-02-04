import React from 'react';

import PYCButton from './PYCButton';

interface PYCHeroProps {
    title?: string;
    subtitle?: string;
}

const PYCHero: React.FC<PYCHeroProps> = ({ title, subtitle }) => {

    function copyCode(): void {
        const codeBlock: any = document.querySelector('#install-pycord');
        const code: string = codeBlock.innerHTML;

        navigator.clipboard.writeText(code).then(() => alert('Successfully copied the code!'));
    }

    return (
        <section className="pyc-hero">
            <div className="pyc-hero__wrap">
                <img
                    src={ '/img/logo.png' }
                    alt="Pycord Logo"
                />
                <h1>{ title }</h1>
                <span className="pyc-hero__subtitle">{ subtitle }</span>
                <div className="pyc-hero__actions">
                    <div className="pyc-code-block">
                        <code id="install-pycord">pip install py-cord</code>
                        <PYCButton label="Copy code" onClick={ () => copyCode() } />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PYCHero;