import { sveltekit } from '@sveltejs/kit/vite';
import ssr from 'vite-plugin-ssr/plugin';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	plugins: [sveltekit(), ssr({ target: 'node' })],
	optimizeDeps: {
		exclude: ['aws-sdk']
	},
};

export default config;
