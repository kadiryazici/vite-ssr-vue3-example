set -euo pipefail

rm -r serverless/public
mkdir serverless/public

rm -r serverless/api/renderer
mkdir serverless/api/renderer

cp -a _app/dist/client/. serverless/public
mv serverless/public/ssr-manifest.json serverless/api/renderer/
cp _app/dist/server/main.js serverless/api/renderer/