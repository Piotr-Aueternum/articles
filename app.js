const Hapi = require('hapi');
const Good = require('good');
const { GQLClient } = require('graphql-http');


const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: __dirname,
      },
    },
  },
});

const client = GQLClient('https://mobileapi.wp.pl/v1/graphql', {
  fetch: {
    credentials: true,
    headers: {
      Accept: 'application/json',
    },
  },
});

server.connection({
  port: 8000,
});
server.register(require('inert'), (err) => {
  if (err) {
    throw err;
  }
  server.route({
    method: 'GET',
    path: '/api/articles',
    handler(request, reply) {
      client.query(`
        {
          articles(t: Article) {
            title
            id
            src
            body {
              data
              t
            }
            img {
              url
              h
              w
              author
              b64
            }
          }
        }
      `).then((result) => {
        reply(result);
      });
    },
  });
  server.route({
    method: 'GET',
    path: '/bundle.js',
    handler(request, reply) {
      reply.file('./dist/bundle.js');
    },
  });
  server.route({
    method: 'GET',
    path: '/cache.manifest',
    handler(request, reply) {
      reply.file('./dist/cache.manifest');
    },
  });
  server.route({
    method: 'GET',
    path: '/{path*}',
    handler(request, reply) {
      reply.file('./dist/index.html');
    },
  });
});

server.register({
  register: Good,
  options: {
    reporters: {
      console: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{
          response: '*',
          log: '*',
        }],
      }, {
        module: 'good-console',
      }, 'stdout'],
    },
  },
}, (err) => {
  if (err) {
    throw err;
  }
  server.start((error) => {
    if (error) {
      throw error;
    }
    server.log('info', `Server running at: ${server.info.uri}`);
  });
});
