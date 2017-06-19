"use strict";

var db = require('../mongoose');

function route(req, res) {
  console.log("About to route a request for " + req.url);
  var params = req.params;
  var _name = params._name;
  switch (_name) {
    case 'login':
      res.send('login succeed');
      break;
    case 'register':
      res.send('register succeed');
      break;
    case 'create':
      var json = { name: params.name, age: params.age, sex: params.sex };
      db.savePerson(json, function (err, person) {
        if (err) return res.send('create failed');
        res.send('create succeed');
      });
      // res.send('create succeed');
      break;
    case 'update':
      res.send('update succeed');
      break;
    case 'find':
      db.findPersonByName('kaoji', function (err, person) {
        if (err) return res.send('not found');
        console.log('%s %s is a %s.', person.name, person.age, person.sex);
        return res.send('find succeed:' + person.name + person.age + person.sex);
      });
      break;
    case 'delete':
      res.send('delete succeed');
      break;
    default:
      res.send(404, 'not exist');
      break;
  }
}


exports.route = route;
