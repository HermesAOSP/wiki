// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	server: {
    allowedHosts: ['wiki.euodos.fr'],
  	},
	redirects: {
		'/': '/en/',
	},
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
			defaultLocale: 'en',
			locales: {
				en: { label: 'English', lang: 'en' },
				fr: { label: 'Français', lang: 'fr' },
			},
			customCss: ['./src/styles/custom.css'],
			social: [
				// TODO: replace with the repository URL (Gerrit / mirror)
				{ icon: 'github', label: 'Source code', href: 'https://example.org/euodos' },
			],
			// TODO: point to the Gerrit repository once the host is known
			// editLink: { baseUrl: 'https://<gerrit>/plugins/gitiles/euodos-wiki/+/refs/heads/main/' },
			lastUpdated: true,
			sidebar: [
				{ label: 'Overview', translations: { fr: 'Présentation' }, items: [{ autogenerate: { directory: 'overview' } }] },
				{ label: 'Installation', translations: { fr: 'Installation' }, items: [{ autogenerate: { directory: 'installation' } }] },
				{ label: 'Devices', translations: { fr: 'Appareils' }, items: [{ autogenerate: { directory: 'devices' } }] },
				{ label: 'Usage', translations: { fr: 'Utilisation' }, items: [{ autogenerate: { directory: 'usage' } }] },
				{ label: 'Development', translations: { fr: 'Développement' }, items: [{ autogenerate: { directory: 'development' } }] },
				{ label: 'Reference', translations: { fr: 'Référence' }, items: [{ autogenerate: { directory: 'reference' } }] },
				{ label: 'Brand', translations: { fr: 'Marque' }, items: [{ autogenerate: { directory: 'brand' } }] },
			],
		}),
	],
});
