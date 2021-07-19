const nodeFetch = require('node-fetch');
const path = require('path');
const express = require('express');

//@ts-ignore
global.fetch = nodeFetch;

const dist = `../dist`;

// This contains a list of static routes (assets)
/** @type {import('../dist/server/package.json')} */
const {
   ssr: { assets }
} = require(`${dist}/server/package.json`);

/** @type {import('../dist/client/ssr-manifest.json')} */
const manifest = require(`${dist}/client/ssr-manifest.json`);

// This is the server renderer we just built
/** @type { import('../dist/server/main')} */
const { default: renderPage } =
   /*@ts-ignore*/
   require(`${dist}/server`);

const server = express();

for (const asset of assets || []) {
   server.use(
      '/' + asset,
      express.static(path.join(__dirname, `${dist}/client/` + asset), {
         maxAge: '24h'
      })
   );
}

server.get('*', async (request, response) => {
   const url =
      request.protocol + '://' + request.get('host') + request.originalUrl;

   const { html } = await renderPage(url, {
      manifest,
      preload: true,
      request,
      response
   });

   response.end(html);
});

const port = process.env.PORT || 8080;
console.log(`Server started: http://localhost:${port}`);
server.listen(port);
