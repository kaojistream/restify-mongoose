"use strict";

// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  // we're connected!
  console.log('success open');
});

//create column
// var kittySchema = mongoose.Schema({
//   name: String
// });

// //create method
// // NOTE: methods must be added to the schema before compiling it with mongoose.model()
// kittySchema.methods.speak = function () {
//   var greeting = this.name
//     ? "Meow name is " + this.name
//     : "I don't have a name";
//   console.log(greeting);
// }

// //create table
// var Kitten = mongoose.model('Kitten', kittySchema);

// //create row
// var silence = new Kitten({ name: 'Silence' });
// var fluffy = new Kitten({ name: 'fluffy' });
// // fluffy.speak(); // "Meow name is fluffy"

// //add a row to table
// fluffy.save(function (err, fluffy) {
//   if (err) return console.error(err);
//   // fluffy.speak();
//   findall();
// });

// silence.save(function (err, silence) {
//   if (err) return console.error(err);
//   // fluffy.speak();
// });

// //find all of table
// function findall() {
//   Kitten.find(function (err, kittens) {
//     if (err) return console.error(err);
//     console.log('findalll', kittens);
//   });
// }
var personSchema = mongoose.Schema({
  name: String,
  age: Number,
  sex: String
});

var Person = mongoose.model('Person', personSchema);

function savePerson(json, callback) {
  var person = new Person({ name: json.name, age: json.age, sex: json.sex });
  // person.save(function (err, person) {
  //   if (err) return console.error(err);

  // });
  person.save(callback);
}

function findPersonByName(name,callback) {
  // Person.findOne({ 'name': name }, 'name age sex', function (err, person) {
  //   if (err) return 'not found';
  //   console.log('%s %s is a %s.', person.name, person.age, person.sex);
  //   return person.age;
  // })
  Person.findOne({ 'name': name }, 'name age sex',callback);
    
}

function updatePersonByName(name, json) {

}

function deletePersonByName(name) {

}

exports.savePerson = savePerson;
exports.findPersonByName = findPersonByName;
exports.updatePersonByName = updatePersonByName;
exports.deletePersonByName = deletePersonByName;

