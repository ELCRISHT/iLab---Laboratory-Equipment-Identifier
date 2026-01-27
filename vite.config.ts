
import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    // This ensures process.env.API_KEY is replaced with the actual key during build
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
  },
  build: {
    target: 'esnext',
  },
});
