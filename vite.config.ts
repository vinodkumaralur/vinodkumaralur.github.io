import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Relative paths, so the built site works from any folder or host.
  base: './',
  plugins: [react(), tailwindcss()],
});
