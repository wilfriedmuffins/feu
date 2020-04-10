const [nd, sc, c1] = process.argv;

var number=parseInt(c1)

function fac(number){
  if(number >=1){
    return number*fac(number-1)
  }else{
    return 1
  }
}

var b = fac(c1)
console.log(b);

// let nbre = parseInt(process.argv.slice(2));
// let a = nbre;
// let fac=1
//
// for (i=0 ; i<nbre ; i++){
//   fac*=a;
//   a--;
// }
//console.log(fac);
///sans function
