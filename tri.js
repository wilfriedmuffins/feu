//const [nd, sc, c1] = process.argv;
function tri (a) {

  let tab=[];
  let max;
  let min;
  let index;
  let longer = a.length;
  //console.log(longer);
  //conversion string argv en int
  for (x=0; x<longer; x++){
    tab[x]=parseInt(a[x]);
  }

  // for(i=0;i<longer;i++){
  //   for(j=0;j<longer-1;j++){
  //     if(tab[j] < tab[j+1]){
  //       max=tab[j+1];
  //       tab[j+1]=tab[j];
  //       tab[j]=max;
  //     }
  //   }
  // }

  for ( i=0 ; i<longer ; i++)
  {
    console.log('ds i'+i);
    max=tab[i];
    console.log(max);
    for( j=0 ; j<longer ; j++)
    {
      console.log('ds j'+j);
      index=j;
      if ( max < tab[j])
      {
        console.log('ds if  de j'+j);
        max=tab[j];
        console.log(max);
      }
    }
    console.log(index);
    console.log(max);
    min=tab[i];
    tab[i]=max;
    tab[i+1]=min
    console.log(tab);
  }
}

tri(process.argv.slice(2));
