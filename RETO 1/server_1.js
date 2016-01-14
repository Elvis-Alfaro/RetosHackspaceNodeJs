var express = require('express');
var app = express();
var faker = require('faker');
var lodash = require('lodash');

var generarAfiliado = function(){
  var nombre = faker.name.findName();
  var direccion = faker.address.streetAddress();
  var fechaInscripcion = faker.date.past();
  var telefono = faker.phone.phoneNumberFormat();
  var descripcion = faker.lorem.paragraph();
  var nombreUsuario = faker.internet.userName();
  var contraseña = faker.internet.password();
  return {
    Nombre: nombre,
    Direccion: direccion,
    FechaIncripcion: fechaInscripcion,
    Telefono: telefono,
    Descripcion: descripcion,
    Usuario: nombreUsuario,
    Contraseña: contraseña
  }
}

var generarGatito  = function(){
  var codigo = faker.random.number();
  var foto = faker.image.cats();
  var descripcion = faker.lorem.sentences();
  var nombrePropietario = faker.name.findName();
  var direccionPropietario = faker.address.streetAddress();

  return {
    Codigo : codigo,
    Foto : foto,
    Descripcion: descripcion,
    Propietario: nombrePropietario,
    Direccion: direccionPropietario
  }
}

app.get('/', function (req, res) {
  res.send('Primer Reto en node.js');
})

app.get('/afiliados', function (req, res) {
  var cantidad = lodash.random(5,10)
  var usuarios = lodash.times(cantidad, generarAfiliado)
  res.json(usuarios);
})

app.get('/gatos', function(req, res){
  var cantidad = lodash.random(3, 5)
  var aleatorios = lodash.times(cantidad, generarGatito)
  res.json(aleatorios);
})

app.listen(1234);