// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  // Replace 'your-username' with your actual GitHub username
  // If using a custom domain, set site to 'https://yourdomain.com' and omit base
  site: 'https://Binit-Dhakal.github.io',
  
  // Set base if deploying to a repository subpath (e.g. '/repo-name')
  // If deploying to your main user site ('your-username.github.io'), remove or set base to '/'
  base: '/',
  
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});