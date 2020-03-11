const [nd, sc, c1, file] = process.argv;

var fs = require('fs');
var string=[]


console.log(c1);
fs.readFile(file, 'utf8', function(err, contents){
  console.log(' le contenu est\n'+contents);
  string=contents.split();
  console.log(string);
});
