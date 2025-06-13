import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import path from 'path'; // Import path module for alias resolution

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(), // UniApp plugin
  ],
  resolve: {
    alias: {
      // Setup '@' alias to point to the 'src' directory
      // This is often a default in Vue CLI projects and useful for cleaner import paths.
      // UniApp for Vue 3 + Vite might handle this by default, but explicit is fine.
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // server: { // Optional: Vite development server specific configurations
  //   port: 3000, // Example port
  //   proxy: { // Example proxy for H5 development, similar to manifest.json h5.devServer.proxy
  //     '/api-dev': {
  //       target: 'http://your-dev-backend-api.com',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api-dev/, ''),
  //     },
  //   },
  // },
  build: {
    // Options for production build if needed
    // sourcemap: true, // Generate source maps for production (can be 'hidden' or true)
  },
  // UniApp specific configurations (if any, often handled by manifest.json or uni plugin itself)
  // For example, inputDir for pages, etc., are usually managed by UniApp conventions.
});
