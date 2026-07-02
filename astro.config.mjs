// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	vite: {
		preview: {
			allowedHosts: [
				'cd06-73-103-148-186.ngrok-free.app',
				'17cc-73-103-148-186.ngrok-free.app',
			],
		},
	},
});
