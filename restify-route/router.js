"use strict";

function route(req, res) {
  console.log("About to route a request for " + req.url);
  var params = req.params;
  var name = params.name;
  switch (name) {
    case 'login':
      res.send('login succeed');
      break;
    case 'register':
      res.send('register succeed');
      break;
    default:
      res.send(404, 'not exist');
      break;
  }
}

exports.route = route;
