const { defineConfig } = require('vite');

export default defineConfig(async () => {
  const { viteStaticCopy } = await import('vite-plugin-static-copy');
  
  return {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: 'images/*',
            dest: 'images/'
          }
        ]
      })
    ]
  };
});