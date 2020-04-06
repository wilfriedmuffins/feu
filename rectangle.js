const [nd, sc, file1, file2] = process.argv;

var fs = require('fs');


var data1 = fs.readFileSync(file1, 'utf8').split("\n")
var data2 = fs.readFileSync(file2, 'utf8').split("\n")

console.log(data1);
console.log(data2);

var tab = new Array(data1.length-1)

for (i=0 ; i<data1.length-1; i++){
  tab[i]= new Array(data1[0].length)
  for (j=0 ; j<data1[0].length ; j++){
     tab[i][j]= parseInt((data1[i].slice(j, j+1)))
   }
}

var tab_ref = new Array(data2.length-1)

for (i=0 ; i<data2.length-1; i++){
  tab_ref[i]= new Array(data2.length)
  for (j=0 ; j<data2.length ; j++){
     tab_ref[i][j]= parseInt((data2[i].slice(j, j+1)))
   }
}

console.log(tab);
console.log(tab_ref);

var line=0
var colonne=0
var line2=0
var colonne2=0

function is_it_a_match(tab, tab_ref, line, colonne){
  line2=0
  while(line2 < tab.length) {
    colonne2=0
    while(colonne2 < tab[line2].length /*rajoter ccondition de */){
      if(tab[line2][colonne2] != tab_ref[line+line2][colonne+colonne2]){
      return(false);
      }
      colonne2++
    }
    line2++
  }
  return(true)
}

function rectangle(tab, tab_ref){
  while(line < tab_ref.length ){
    colonne=0
    while( colonne < tab_ref[line].length){
      if(tab_ref[line][colonne] == tab[0][0]){
        console.log("found");
        if (is_it_a_match(tab, tab_ref, line, colonne)) {
          console.log(colonne+","+line);
          return(true)
        }
      }
      colonne++
    }
    line++
    console.log("\n");
  }
  return(false)
}

rectangle(tab, tab_ref)
