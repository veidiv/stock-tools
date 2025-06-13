import { createSSRApp } from 'vue'; // UniApp uses createSSRApp for better SSR support
import App from './App.vue';

// Optional: Pinia setup (if and when we integrate it)
// import { createPinia } from 'pinia';
// const pinia = createPinia();

export function createApp() {
  const app = createSSRApp(App);

  // Optional: Use Pinia
  // app.use(pinia);

  return {
    app,
  };
}

// Note: In UniApp, main.js typically exports a createApp function.
// The actual mounting is handled by the UniApp framework itself based on this export.
// No explicit app.mount('#app') here as in standard Vue SPA.
