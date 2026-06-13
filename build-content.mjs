import esbuild from 'esbuild'

await esbuild.build({
	entryPoints: ['src/content.js'],
	bundle: true,
	format: 'iife',
	outfile: 'dist/content.js',
	external: [],
})

console.log('✓ Content script built as self-contained bundle')
