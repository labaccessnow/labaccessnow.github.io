// @ts-check
import { defineConfig } from 'astro/config';

// Canonical URL = the self-hosted edge; also mirrored to labaccessnow.github.io.
// Both serve at the root, so links are relative and work on either host.
export default defineConfig({
  site: 'https://github.labaccessnow.com',
});
