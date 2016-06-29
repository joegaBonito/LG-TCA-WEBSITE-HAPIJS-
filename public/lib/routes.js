var Routes = {};

server.route({
  method: 'GET',
  path: '/',
  handler: function(request,reply) {
    reply.view('index');
  }
});
server.route({
  method: 'GET',
  path: '/Innovation',
  handler: function(request,reply) {
    reply.view('Innovation');
  }
});
server.route({
  method: 'GET',
  path: '/Newsroom',
  handler: function(request,reply) {
    reply.view('Newsroom');
  }
});
server.route({
  method: 'GET',
  path: '/ContactUs',
  handler: function(request,reply) {
    reply.view('ContactUs');
  }
});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
            path: '.',
            redirectToSlash: true,
            index: true
        }
    }
});

module.exports = Routes;
