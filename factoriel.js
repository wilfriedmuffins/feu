const [nd, sc, c1] = process.argv;
//function fac(a){
let nbre = parseInt(process.argv.slice(2));
let a = nbre;
let fac=1

for (i=0 ; i<nbre ; i++){
  fac*=a;
  a--;
}
console.log(fac);
///sans function
