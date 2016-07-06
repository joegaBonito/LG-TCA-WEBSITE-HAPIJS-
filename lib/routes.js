var Routes = [{
  method: 'GET',
  path: '/',
  handler: function(request,reply) {
    reply.view('views/layouts/index');
  }
}, {
    method: 'GET',
    path: '/Innovation',
    handler: function(request,reply) {
      reply.view('views/layouts/Innovation');
    }
  }, {
    method: 'GET',
    path: '/Newsroom',
    handler: function(request,reply) {
      reply.view('views/layouts/Newsroom');
    }
  }, {
    method: 'GET',
    path: '/ContactUs',
    handler: function(request,reply) {
      reply.view('views/layouts/ContactUs');
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
