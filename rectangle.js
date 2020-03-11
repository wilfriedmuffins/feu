var fs = require('fs');

fs.readFile('c1.txt', 'utf8', function(err, contents){
  console.log('c1:\n'+contents);
});


fs.readFile('c2.txt', 'utf8', function(err, contents){
  console.log('c2:\n'+contents);
});


console.log('after calling readFile');
