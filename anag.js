const [nd, sc, c1, file] = process.argv;


var fs = require('fs');

var string=[]
var lettre
var lanag=[];
var word=[];
var tab=[];
var data =[]


data = fs.readFileSync(file, 'utf8').toString().split('\n')

console.log(data)

for(i=0; i<data.length; i++){
  lettre = data[i].split("").sort().join("")
   console.log(lettre);
}

  //console.log(data.sort().join());







//
// for(i=0; i<string.length; i++){
//   //string[i].sort()
//   //string[i]=data.split('\n').sort()
//   //console.log(string[i].sort())
// }

// string[i]=data.split('\n').sort()
// console.log(string[i])
//console.log(string.length);

// for(i=0; i<string.length; i++){
//   string[i].sort()
// }
//console.log(string);

// for(i=0; i<c1.length; i++){
//   word[i]=c1.slice(i, i+1);
// }




// fs.readFile(file, 'utf8', function(err, contents){
//   console.log('le contenu est\n'+contents);
//   string=contents.split('\n');
//   console.log(string);
//
//
// });
//
// for(i=0; i<fac; i++){
//   for(j=0; j<c1.length-1 ;j++){
//     lettre=word[j+1];
//     word[j+1]=word[j];
//     word[j]=lettre
//     console.log(word);
//     console.log(j);
//     // for(k=0; k<string.length; k++){
//     //   if( word.join('') == string[k]) tab.push(word.join(''));
//     //   console.log(tab);
//     // }
//   }
// }
