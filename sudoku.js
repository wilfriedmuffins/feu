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
    // recherhcé s'il y a deux fois le meme nombre
    value=sudoku[i][j]
    same=0
    for(k=0; k<sudoku[i].length-1;k++){
      if(value == sudoku[i][k])same++
      if(same>= 2)return false
    }
  }
  return true// checké la fonciton de return si ce la fait sortir de la boucle ou pas si cond bonne
}

function solve_sudoku(sudoku){
  for(i=0;i<sudoku.length-1;i++){
    for(j=0;j<sudoku[i].length-1;j++){
      if(sudoku[i][j]=='_'){
        new_value = 1
        while (new_value <10){
          sudoku[i][j]= new_value
          console.log(sudoku[i][j]+" dans le solve_sudoku");
          funtion = check_line(sudoku, i)
          if(funtion){// && check_column(sudoku, j) && check_square(sudoku, i,j)){
            sudoku = solve_sudoku(sudoku)
            if (sudoku == false){
              console.log(sudoku);
              return false
            }
          }
          new_value++
         }
        return false
      }
    }
  }
  return false
}

function check_sudoku(sudoku){
  sudoku = solve_sudoku(sudoku)
  if (sudoku == false) console.log("erreur")
  else print_sudoku(sudoku1)
}

check_sudoku(sudoku)


function check_column(sudoku, j){
  for(i=0;i<sudoku;i++){
    // if(){}
    // else{}
  }
}

function check_square(sudoku, i,j){
  for(i=0;i<sudoku;i++){
    // if(){}
    // else{}
  }
}
