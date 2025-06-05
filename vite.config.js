import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: 'main.js',
    },
  },
});

// This configuration sets the base path for the application to the root
// and specifies the entry point for the build process as 'main.js'.
// It uses Vite's defineConfig function to create a configuration object
// that can be used to customize the build process.
// The rollupOptions.input specifies the main entry file for the application,
// which is 'main.js' in this case. This allows Vite to bundle the application
// correctly, ensuring that all dependencies and modules are included in the final build.
// This configuration is useful for single-page applications (SPAs) or   