const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');
const Hoek = require('hoek');
var engine = require('hapijs-react-views')();

const server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, '/public')
            }
        }
    }
});
server.connection({ port: 3001 });

server.register(Inert, () => {});

server.register(require('vision'), (err) => {

Hoek.assert(!err,err);

server.views({
    defaultExtension: 'html',
    engines: {
        jsx: engine, // support for .jsx files
        js: engine, // support for .js
        html: require('handlebars'),
    },
    relativeTo: __dirname,
    path:'public'
});

server.route(require('./lib/routes'));

});

server.start((err) => {

    if (err) {
        throw err;
    }

    console.log('Server running at:', server.info.uri);
});
