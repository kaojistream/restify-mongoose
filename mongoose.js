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
var kittySchema = mongoose.Schema({
  name: String
});

//create method
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

//create table
var Kitten = mongoose.model('Kitten', kittySchema);

//create row
var silence = new Kitten({ name: 'Silence' });
var fluffy = new Kitten({ name: 'fluffy' });
// fluffy.speak(); // "Meow name is fluffy"

//add a row to table
fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  // fluffy.speak();
  findall();
});

silence.save(function (err, silence) {
  if (err) return console.error(err);
  // fluffy.speak();
});

//find all of table
function findall() {
  Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log('findalll', kittens);
  });
}

