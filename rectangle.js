const [nd, sc, file1, file2] = process.argv;

var fs = require('fs');

var row1
var colunm1
var row2
var colunm2


var data1 = fs.readFileSync(file1, 'utf8').split("\n")
var data2 = fs.readFileSync(file2, 'utf8').split("\n")

 console.log(data1);
//console.log(data2);
//number of row1 and colunm1
row2 = data2.length
colunm2 = data2[0].length
row1 = data1.length
colunm1 = data1[0].length
console.log(row1);
console.log(colunm1);

var tab_ref = new Array(row2-1)

// console.log(tab_ref);
for (i=0 ; i<row2-1; i++){
  tab_ref[i]= new Array(colunm2)
  for (j=0 ; j<colunm2 ; j++){
     tab_ref[i][j]= data2[i].slice(j, j+1)
   }
   console.log(tab_ref);
}

var tab = new Array(row1-1)

for (i=0 ; i<row1-1; i++){
  tab[i]= new Array(colunm1)
  for (j=0 ; j<colunm1 ; j++){
     tab[i][j]= data1[i].slice(j, j+1)
   }
  console.log(tab);
}
