// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Euodos',
			description: 'Documentation for Euodos, a custom ROM based on LineageOS.',
			logo: {
				light: './src/assets/logo-light.png',
				dark: './src/assets/logo-dark.png',
				alt: 'Euodos logo',
			},
			favicon: '/favicon.png',
			customCss: ['./src/styles/custom.css'],
			social: [
				// TODO: replace with the repository URL (Gerrit / mirror)
				{ icon: 'github', label: 'Source code', href: 'https://example.org/euodos' },
			],
			// TODO: point to the Gerrit repository once the host is known
			// editLink: { baseUrl: 'https://<gerrit>/plugins/gitiles/euodos-wiki/+/refs/heads/main/' },
			lastUpdated: true,
			sidebar: [
				{ label: 'Overview', items: [{ autogenerate: { directory: 'overview' } }] },
				{ label: 'Installation', items: [{ autogenerate: { directory: 'installation' } }] },
				{ label: 'Devices', items: [{ autogenerate: { directory: 'devices' } }] },
				{ label: 'Usage', items: [{ autogenerate: { directory: 'usage' } }] },
				{ label: 'Development', items: [{ autogenerate: { directory: 'development' } }] },
				{ label: 'Reference', items: [{ autogenerate: { directory: 'reference' } }] },
				{ label: 'Brand', items: [{ autogenerate: { directory: 'brand' } }] },
			],
		}),
	],
});
