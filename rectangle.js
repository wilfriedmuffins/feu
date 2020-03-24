const [nd, sc, file1, file2] = process.argv;

var fs = require('fs');

var row
var colunm

var data1 = fs.readFileSync(file1, 'utf8').split("\n")
var data2 = fs.readFileSync(file2, 'utf8').split("\n")

// console.log(data1);
// console.log(data2);
//number of row and colunm
row = data2.length
colunm = data2[0].length

var tab = new Array(row-1)
//console.log(tab);
var rec_ref
var rec_test

for (i=0 ; i<row-1; i++){
  tab[i]= new Array(row)
  for (j=0 ; j<colunm ; j++){
     tab[i][j]= data2[i].slice(j, j+1)
   }
  console.log(tab);
}
