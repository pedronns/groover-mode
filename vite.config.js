import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    emptyOutDir: false, 
    outDir: 'dist',
    rollupOptions: {
      input: {
        // Ponto de entrada correto para o seu novo index.html
        popup: resolve(__dirname, 'src/popup/index.html'),
        content: resolve(__dirname, 'src/content.js'),
        background: resolve(__dirname, 'background.js'),
      },
      output: {
        // Mantém os nomes dos scripts limpos na raiz do dist/ (content.js, background.js)
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        
        // Organiza os assets. Se for o CSS do popup, ele joga na mesma estrutura
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'src/popup/[name].[ext]';
          }
          return '[name].[ext]';
        }
      }
    }
  }
});