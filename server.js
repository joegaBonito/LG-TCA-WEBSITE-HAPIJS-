const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');
const Hoek = require('hoek');
const Vision = require('vision');
var engine = require('hapijs-react-views')();


//Adding Static Content Files + Server Configuration
const server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, '/public')
            }
        }
    }
});
server.connection({ port: 3002 });

server.register(Inert, () => {});

//Rendering Views
server.register(Vision, (err) => {

Hoek.assert(!err,err);

server.views({
    defaultExtension: 'html',
    engines: {
        jsx: engine, // support for .jsx files
        js: engine, // support for .js
        html: require('handlebars'),
    },
    relativeTo: __dirname,
    path:'public',
    layoutPath:'./public/views/layouts',
    partialsPath: './public/views/partials'
});

//Adding Routes
server.route(require('./lib/routes'));

});

//Starting the server
server.start((err) => {

    if (err) {
        throw err;
    }

    console.log('Server running at:', server.info.uri);
});
