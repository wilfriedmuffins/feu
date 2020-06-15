const [nd, sc, file] = process.argv;

var fs = require('fs');
var sudoku = []
var position=0
var data1 = fs.readFileSync(file, 'utf8').split("\n")


//console.log(data1);

data1.forEach((item, i) => {
  sudoku[position]=item.split('')
  position++
});


// function print_sudoku(sudoku){
//   for(i=0;i<sudoku.length-1;i++){
//     //for(j=0;j<sudoku[i].length-1;j++){
//       console.log(sudoku[i][j]);
//     //}
//   }
// }

function check_line(sudoku,i){
  // chech si c'est bon
  for(j=0;j<sudoku[i].length-1;j++){
    // recherche s'il y a deux fois le meme nombre
    valuel=sudoku[i][j]
    samel=0
    for(k=0; k<sudoku[i].length-1; k++){
      if ((sudoku[i][k] != "|") && (sudoku[i][k] != "_") && (sudoku[i][k]!='-' && sudoku[i][k]!="+")){
        if(valuel == sudoku[i][k]) samel++
        console.log("suduko :"+sudoku[i][k]+ " value :"+valuel);
        console.log(samel);
        if(samel>1)return false
      }
    }
    samel=0
  }
  return true
}

function check_column(sudoku, j){
  for(i=0; i<sudoku[i].length-1; i++){
  valuec=sudoku[i][j]
  samec=0
  for(l=0; l<sudoku[j].length-1; l++){
    if (sudoku[l][j]!='|' && sudoku[l][j]!='+' && sudoku[l][j]!='-' && sudoku[l][j]!='_'){
      if (valuec == sudoku[l][j])samec++
      console.log("suduko :"+sudoku[l][j]+" value :"+valuec);
      console.log(samec);
      if (samec>1) return false
    }
  }
  samec=0
}
return true
}

function check_square(sudoku, i, j){
  values = sudoku[i][j]
  sames=0
  square_begin_i = (Math.trunc(i/4)*4)
  square_begin_j=(Math.trunc(j/4)*4)

  for(k=square_begin_i; k<square_begin_i+3; k++){
    for(l=square_begin_j; l<square_begin_j+3; l++){
      if (sudoku[k][l]!='_'){
        if(values == sudoku[k][l]) sames++
        console.log("suduko :"+sudoku[k][l]+" value :"+values);
        console.log(sames);
        if(sames>1)return false
      }
    }
  }
 return true
}

resultatl = check_line(sudoku, 0)
console.log(resultatl)
resultatc = check_column(sudoku, 1)
console.log(resultatc)
resultats = check_square(sudoku, 0, 9)
console.log(resultats)

// function solve_sudoku(sudoku){
//   for(i=0;i<sudoku.length-1;i++){
//     for(j=0;j<sudoku[i].length-1;j++){
//       if(sudoku[i][j]=='_'){
//         new_value = 1
//         while (new_value <10){
//           sudoku[i][j]= new_value
//           console.log(sudoku[i][j]+" dans le solve_sudoku");
//
//          if(check_line(sudoku, i) && check_column(sudoku, j) && check_square(sudoku, i,j)){
//             sudoku = solve_sudoku(sudoku)
//             if (sudoku == false){
//               console.log(sudoku);
//               return false
//             }
//           }
//           new_value++
//          }
//         return false
//       }
//     }
//   }
//   return false
// }
//
// function check_sudoku(sudoku){
//   sudoku = solve_sudoku(sudoku)
//   if (sudoku == false) console.log("erreur")
//   else print_sudoku(sudoku1)
// }
//
// check_sudoku(sudoku)
