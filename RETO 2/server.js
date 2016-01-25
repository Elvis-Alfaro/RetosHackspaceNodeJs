// este servidor muestar un mensaje de saludo concatenado con la palabra que le coloquemos como ruta despues de localhost:8080/

var Hapi = require('hapi');
var faker = require('faker');
var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 1234)
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Su ID es: ' + faker.random.number());
        //reply('Su ID es: ' + request.params.name);
    }
});

server.start(function () {
	console.log('Servidor corriendo :', server.info.uri);
});