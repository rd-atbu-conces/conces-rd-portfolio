import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://rd-atbu-conces.github.io',
  base: 'conces-rd-portfolio',
  output: 'static',
});
