var restify = require('restify');
var assert = require('assert');

client = restify.createClient({
  url: 'http://localhost:8080'
});

client.get('/echo/hello', function (err, req) {
  assert.ifError(err); // connection error

  req.on('result', function (err, res) {
    assert.ifError(err); // HTTP status code >= 400

    res.body = '';
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      res.body += chunk;
    });

    res.on('end', function () {
      console.log(res.body);
    });
  });
});
