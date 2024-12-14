async function routes(fastify, options) {
    fastify.get('/', async (request, reply) => {
      return { message: 'Welcome to Fastify API' };
    });
  }
  
  module.exports = routes;