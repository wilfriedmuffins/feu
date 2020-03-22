var fs = require('fs');
let c1=[];
let c2=[];
var a="t";

fs.readFile('c1.txt', 'utf8', function(err, contents){
  console.log(contents.colunm());

  for (var i=0 ; i<contents.length ; i++){
    c1[i]=[];
  }

  // for (var i=0 ; i<c.length ; i++){
  //   for (var j=0 ; j<contents.length ; j++){
  //     c1[i][j]=contents.split('');
  //   }
  // }
  console.log(c1);
  console.log('c1:\n'+contents);

  fs.readFile('c2.txt', 'utf8', function(err, contents){
    console.log(contents.length);
    console.log('c2:\n'+contents);
  });
});

console.log('after calling readFile');
