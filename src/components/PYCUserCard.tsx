import React, { useState } from 'react';
import getConfig from 'next/config';
import Image, { ImageLoaderProps } from 'next/image';

import PYCButton from './PYCButton';

import { SiGithub } from 'react-icons/si';
import { RiComputerLine } from 'react-icons/ri';

import { Person } from '../constants/people';

const { publicRuntimeConfig } = getConfig();

interface PYCUserAvatarProps {
    src?: string;
    fallback?: string;
    name: string;
}

const loader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${ src }?size=${ width }`;
};

const Avatar: React.FC<PYCUserAvatarProps> = ({ src, fallback, name }) => {
    const defaultAvatar = publicRuntimeConfig.assetPrefix + '/img/default.png';
    const [userAvatar, setUserAvatar] = useState(src || defaultAvatar);
    const [currentAvatar, setCurrentAvatar] = useState(1);

    let nextAvatar = () => {
        if (currentAvatar === 1 && fallback) {
            setUserAvatar(fallback);
            setCurrentAvatar(2);
            console.error('Could not find avatar for ' + name + ', trying fallback.');
        } else if (currentAvatar === 2 || (currentAvatar === 1 && !fallback)) {
            setUserAvatar(defaultAvatar);
            setCurrentAvatar(3);
            console.error('Could not find avatar or fallback for ' + name + ', using default.');
        } else if (currentAvatar === 3) {
            setCurrentAvatar(4);
            console.error('Default avatar failed for ' + name + '.');
        }
    };

    return (
        <Image
            loader={ loader }
            src={ userAvatar }
            alt={ name }
            objectFit="cover"
            objectPosition="center"
            height={ 98 }
            width={ 98 }
            layout="fixed"
            onError={ currentAvatar < 4 ? nextAvatar : () => {
            } }
        />
    );
};

const PYCUserCard: React.FC<Person> = ({ name, roles, avatar, fallbackAvatar, links, quote }) => {
    let role: string;
    switch (roles.length) {
        case 1:
            role = roles[0];
            break;
        case 2:
            role = roles.join(' and ');
            break;
        default:
            role = roles.slice(0, roles.length - 1).join(', ') + ', and ' + roles[roles.length - 1];
    }

    try {
        // @ts-ignore
        role = role.replaceAll('Developer', 'Dev');
        // @ts-ignore
        role = role.replaceAll('Server Staff', 'Staff');
    } catch (e) {
        console.error(e);
    }

    return (
        <div className="pyc-user-card">
            <div className="pyc-user-card__wrap">
                <div className="pyc-user-card__img">
                    <Avatar src={ avatar } name={ name } fallback={ fallbackAvatar } />
                </div>
                <div className="pyc-user-card__info">
                    <h3 className="pyc-user-card__name">{ name }</h3>
                    { role && <p className="pyc-user-card__role">{ role }</p> }
                    { quote && <p className="pyc-user-card__quote">{ quote }</p> }
                </div>
            </div>
            { links &&
                <div className="pyc-user-card__links">
                    <div className="pyc-user-card__links__wrap">
                        { links.github && <PYCButton link={ links.github } type="filled"
                                                     icon={ <SiGithub /> }>GitHub</PYCButton> }
                        { links.website && <PYCButton link={ links.website } type="outlined"
                                                      icon={ <RiComputerLine /> }>Website</PYCButton> }
                    </div>
                </div>
            }
        </div>
    );
};

export default PYCUserCard;
