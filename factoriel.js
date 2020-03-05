const [nd, sc, c1] = process.argv;
function fac(a){
  let nbre = parseInt(a);
  let fac=1

  for (i=0 ; i<nbre ; i++){
    fac*=a;
    a--;
  }
  console.log(fac);
}
fac(c1);
