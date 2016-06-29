var Routes = [{
  method: 'GET',
  path: '/',
  handler: function(request,reply) {
    reply.view('index');
  }
}, {
    method: 'GET',
    path: '/Innovation',
    handler: function(request,reply) {
      reply.view('Innovation');
    }
  }, {
    method: 'GET',
    path: '/Newsroom',
    handler: function(request,reply) {
      reply.view('Newsroom');
    }
  }, {
    method: 'GET',
    path: '/ContactUs',
    handler: function(request,reply) {
      reply.view('ContactUs');
    }
  }, {
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
              path: '.',
              redirectToSlash: true,
              index: true
          }
      }
}];


module.exports = Routes;
