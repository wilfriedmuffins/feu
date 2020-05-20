const [nd, sc, file] = process.argv;

var fs = require('fs');
var sudoku = []
var position=0
var data1 = fs.readFileSync(file, 'utf8').split("\n")



// console.log(data1[0]);
// for (var i = 0; i < data1.length; i++) {
//   console.log(data1[i]);
// }
//
console.log(data1);
//
// data1.forEach((item) => {
//   console.log(data1);
//    sudoku[position]=item.split("")
//    position +=1
// });
data1.forEach((item, i) => {
  sudoku[position]=item.split("")
  position++
});

console.log(sudoku);

for(i=0;i<sudoku.length;i++){
  for(j=0;j<sudoku[i].length;j++){
    console.log(sudoku[i][j]);
  }
}

// var tab = new Array(data1.length-1)
//
// for (i=0 ; i<data1.length-1; i++){
//   tab[i]= new Array(data1[0].length)
//   for (j=0 ; j<data1[0].length ; j++){
//      tab[i][j]= parseInt((data1[i].slice(j, j+1)))
//    }
// }
