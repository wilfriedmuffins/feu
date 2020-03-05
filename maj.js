const [nd, sc, c1] = process.argv;


function maj(a){
const longer = a.length;
//let phrase = [];
/*console.log(a.slice(0, 1));
console.log(a.slice(1, 2));
console.log(a.slice(2, 3));
console.log(a.slice(3, 4));
console.log(a.slice(, 2));*/



 console.log(longer);
 for (i=0 ; i<longer ; i++){
   if (a.slice(i, i+1) == " "){
     console.log('espace');
   }else {

     console.log('caractére');
     console.log(a.slice(i, i+1).toUpperCase());
   }
 }

console.log(a);

}

maj(c1);
//process.argv.slice(2)
