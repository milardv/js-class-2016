/* */ 
var bla = require('./lib/client');
bla.get('http://localhost:8080/').then(function() {
  return 1;
}).then(console.log.bind(console));
