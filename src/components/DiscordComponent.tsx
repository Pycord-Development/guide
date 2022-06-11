import React, { createContext } from 'react';
import {
	DiscordDefaultOptions,
	DiscordOptionsContext,
	DiscordMessageOptions,
	DiscordMessages,
} from 'discord-message-components/packages/react'
import Twemoji from 'react-twemoji';

export const defaultOptions: DiscordMessageOptions = {
	...DiscordDefaultOptions,
	profiles: {
		bob: {
			author: 'BobDotCom',
			avatar: '/img/bob.png',
			roleColor: '#2cd6f7',
		},
        robocord: {
            author: 'Robocord',
            avatar: '/img/robocord.png',
            roleColor: '#9b59b6',
            bot: true,
        },
		dorukyum: {
			author: 'Dorukyum',
			avatar: '/img/dorukyum.png',
			roleColor: '#2cd6f7',
		}
	},
};

interface DiscordComponentProps {
	options?: DiscordMessageOptions
}

const DiscordComponent: React.FC<DiscordComponentProps> = ({options = defaultOptions, children }) => {
	return (
		<DiscordOptionsContext.Provider value={options}>
			<DiscordMessages>
				{children}
			</DiscordMessages>
		</DiscordOptionsContext.Provider>
	);
};

export default DiscordComponent;
