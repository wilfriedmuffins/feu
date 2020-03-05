const [nd, sc, c1] = process.argv;
function maj(a){
  const longer = a.length;
  let letter;
  let rletter;
  const index = /e/i; ;
  let esp = [];
  //console.log(a.replace(/e/y, 'y'));
  /*for(i=0 ; i<2 ; i++){
    console.log(a.replace(index, 'L'));
    //console.log(a);
    console.log(a.replace(index, 'M'));
    //console.log(a);
  }*/


   //console.log(longer);
   for (i=0 ; i<longer ; i++){
     if (a.slice(i, i+1) == " "){
       console.log('espace');
       esp.push(i);
     }else {
       //prendre un lettre
      //console.log(a.slice(i, i+1));
       letter = a.slice(i, i+1);
       console.log(letter);
       //mettre en maj
       rletter = letter.toUpperCase();
       //remplacer + affiché
    //   index= /rletter/y;
       console.log(a.replace(index, rletter));
     }
   }
   console.log(esp);
}


maj(c1);
