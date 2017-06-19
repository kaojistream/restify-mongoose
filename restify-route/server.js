"use strict";

var restify = require('restify');
const server = restify.createServer({
  name: 'myroute',
  version: '1.0.0'
});
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

function start(route) {

  function onRequest(req, res, next) {
    var params = req.params;
    console.log("Request for " + params._name + " received.");
    route(req, res);
    // res.send(params);
    // res.send({'a':Number('1')});
    return next();
  }

  server.get('/web/:_name', onRequest);
  server.post('/web/:_name', onRequest);

  server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
  });

}

exports.start = start;
