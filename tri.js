const [nd, sc, c1] = process.argv;
function tri (a) {

  let tab=[];
  let max;
  let valeur;
  let index;
  let longer = a.length;
  let pass = true;
  //console.log(longer);
  //conversion string argv en int
  for (x=0; x<longer; x++){
    tab[x]=parseInt(a[x]);
  }
  console.log(tab);
  // //tri bulle

  while (pass) {
    pass=false;
    for(i=0;i<longer-1;i++){
        if(tab[i] < tab[i+1]){
          max=tab[i+1];
          tab[i+1]=tab[i];
          tab[i]=max;
          pass=true;
        }
    }
    console.log(tab);
  }


// tri par séletion
  /*for ( i=0 ; i<longer ; i++){
    valeur=max=tab[i];
    pass=false
    for( j=i ; j<longer-1; j++){
      if ( max <= tab[j+1]){
        max=tab[j+1];
        index=j+1;
        pass=true
      }
    }
    if (pass) {
      tab[index]=valeur;
      tab[i]=max
      console.log(tab);
    }
  }*/
}

tri(process.argv.slice(2));
