# Article list project
Simple Article list

# Start
  Preferred environment `node.js@7.x` and `npm@4.x`
  ```
  npm install
  ```
  Inside `.env` file please set up yours `PROD_URL` as your URL with http/https protocol or localhost.

# Development
  If you want to run this on LAN host, please set up data in config(.env) `LAN` to your workstation IPv4(`xxx.xxx.xxx.xxx`).
  ```
  npm run build:dev
  ```

# Production
## Build
  ```
  npm run build:dist
  ```
## Server
  ```
  npm run build:server
  ```