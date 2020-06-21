const [nd, sc, file] = process.argv;

var fs = require('fs');
var sudoku = []
var position=0
var data1 = fs.readFileSync(file, 'utf8').split("\n")

data1.forEach((item, i) => {
  sudoku[position]=item.split('')
  position++
});


function print_sudoku(sudoku){
  for(i=0;i<sudoku.length-1;i++){
    for(j=0;j<sudoku[i].length-1;j++){
      //console.log(sudoku[i][j]);
    }
  }
}

function check_line(sudoku, i, new_value){
    // recherche s'il y a deux fois le meme nombre
    valuel=new_value
    //console.log(valuel);
    samel=0
    for(k=0; k<sudoku[i].length-1; k++){
      if ((sudoku[i][k] != "|") && (sudoku[i][k] != "_") && (sudoku[i][k]!='-' && sudoku[i][k]!="+")){// conditon avec type csting
        if(valuel == sudoku[i][k]) samel++
        //console.log("sudoku :"+sudoku[i][k]+ " value :"+valuel+" samel "+samel);
        if(samel>1)return false
      }
    }
    samel=0
  return true
}

function check_column(sudoku, j, new_value){
  valuec=new_value
  //console.log(valuec);
  samec=0
  for(l=0; l<sudoku[j].length-1; l++){
    if (sudoku[l][j]!='|' && sudoku[l][j]!='+' && sudoku[l][j]!='-' && sudoku[l][j]!='_'){
      if (valuec == sudoku[l][j])samec++
      //console.log("sudoku :"+sudoku[l][j]+" value :"+valuec+" samec "+samec);
      if (samec>1) return false
    }
  }
  samec=0
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
        //console.log("sudoku :"+sudoku[k][l]+" value :"+values+" sames "+sames);
        if(sames>1)return false
      }
    }
  }
 return true
}

function solve_sudoku(sudoku){
  for(i=0;i<sudoku.length-1;i++){//
    for(j=0;j<sudoku[i].length-1;j++){
      if(sudoku[i][j]=='_'){
        //console.log("i "+i+" j "+j);
        new_value = 1
        while (new_value <10){
          sudoku[i][j]= new_value
          //console.log("i "+i+" j "+j);
          //console.log(sudoku[i][j]);
          //console.log(new_value);
          //console.log(sudoku[i]);
         if(check_line(sudoku, i, new_value) && check_column(sudoku, j, new_value) && check_square(sudoku, i,j)){
            sudoku = solve_sudoku(sudoku)
            if (sudoku != false) return sudoku
          }
          //console.log(sudoku[i]);
          new_value++
         }
        return false
      }
    }
  }
  return sudoku
}

function check_sudoku(sudoku){
  sudoku = solve_sudoku(sudoku)
  if (sudoku == false) console.log("erreur")
  else console.log(sudoku);// use print_sudoku
}

//////////////////////////////////////////////////
 check_sudoku(sudoku)
