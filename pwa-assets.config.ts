import { defineConfig } from '@vite-pwa/assets-generator/config';

export default defineConfig({
	headLinkOptions: {
		preset: '2023',
	},
	preset: {
		transparent: {
			sizes: [64, 72, 96, 144, 192, 256, 384, 512],
			favicons: [[48, 'favicon.ico']],
		},
		maskable: { sizes: [512] },
		apple: { sizes: [180] },
	},
	images: ['public/logo.png'],
});
