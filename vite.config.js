import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
	build: {
		emptyOutDir: false,
		outDir: 'dist',
		lib: {
			entry: {
				popup: resolve(__dirname, 'src/popup/index.html'),
				background: resolve(__dirname, 'background.js'),
			},
			formats: ['es'],
		},
		rollupOptions: {
			output: {
				entryFileNames: '[name].js',
				chunkFileNames: '[name].js',
				assetFileNames: (assetInfo) => {
					if (assetInfo.name && assetInfo.name.endsWith('.css')) {
						return 'src/popup/[name].[ext]'
					}
					return '[name].[ext]'
				},
			},
		},
	},
})
