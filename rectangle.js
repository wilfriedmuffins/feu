const [nd, sc, file1, file2] = process.argv;

var fs = require('fs');

var row
var colunm

var data1 = fs.readFileSync(file1, 'utf8').split("\n")
var data2 = fs.readFileSync(file2, 'utf8').split("\n")

// console.log(data1);
// console.log(data2);
//number of row and colunm
colunm = data2[0].length
row = data2.length-1
// console.log(colunm);
//console.log(row);

var tab = new Array(colunm)
//console.log(tab);
var rec_ref
var rec_test




rec_ref = data2.toString().split("")
//console.log(data2[0].slice(1, 2));


// tab[i].push();
// for (i=0; i<rec_ref.length ; i++){
//   tab.push("");
// }
// console.log(tab);

// if (rec_ref[i] == ','){
//   console.log(rec_ref[i]);
// }
//var r=0
for (var i=0 ; i<colunm; i++){
  console.log(i);
  tab[i]= new Array(row)
  console.log(tab)
  for (var j=0 ; j<3 ; j++){
     //tab[i][j]= data2[i].slice(j, j+1)
     console.log(data2[i].slice(j, j+1));
     // console.log(j);
   }
  //tab.push([]);
}
