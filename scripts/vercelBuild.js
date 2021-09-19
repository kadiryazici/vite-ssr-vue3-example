const fse = require('fs-extra');
const path = require('path');

// needs at least node v14.14.0

const root = process.cwd();
const serverlessFolder = path.join(root, 'serverless');
const _appFolder = path.join(root, '_app');

const serverlessPublic = path.join(serverlessFolder, 'public');
const serverlessApiRenderer = path.join(serverlessFolder, 'api', 'renderer');
const serverlessPublicSSRManifestJSON = path.join(serverlessPublic, 'ssr-manifest.json');

const distClient = path.join(_appFolder, 'dist', 'client');
const distServer = path.join(_appFolder, 'dist', 'server');
const distServerMainJS = path.join(distServer, 'main.js');

const serverlessApiRendererManifestJSON = path.join(serverlessApiRenderer, 'ssr-manifest.json');
const serverlessApiRendererMainJS = path.join(serverlessApiRenderer, 'main.js');

async function run() {
   await deleteAndCreateFolder(serverlessPublic);
   await deleteAndCreateFolder(serverlessApiRenderer);

   await fse.copy(distClient, serverlessPublic, { recursive: true, overwrite: true });
   await fse.move(serverlessPublicSSRManifestJSON, serverlessApiRendererManifestJSON, {
      overwrite: true
   });
   await fse.copy(distServerMainJS, serverlessApiRendererMainJS, { overwrite: true });
}

run();

/**@param {string} path */
async function deleteAndCreateFolder(path) {
   if (await fse.pathExists(serverlessPublic)) {
      await fse.rm(serverlessPublic, { recursive: true });
   }
   await fse.mkdir(serverlessPublic);
}
