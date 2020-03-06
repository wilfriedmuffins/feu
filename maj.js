const [nd, sc, c1] = process.argv;
function maj(a){
  const longer = a.length;
  let letter = [];
  let maj = 0;
  let min = 1;
  let nletter;
  for (i=0 ; i<longer ; i++)
   {
     if (a.slice(i, i+1) == " ")
     {
       letter.push(" ");
     }
     else
     {
        if(maj == '1' && min == 0)
        {
          letter.push(a.slice(i, i+1).toUpperCase());
          maj = 0;
          min = 1
        }
       else if (min == '1'&& maj == 0)
       {
          letter.push(a.slice(i, i+1).toLowerCase());
          maj = 1;
          min = 0;
      }
     }
   }
    console.log(letter.join(''));
}

maj(c1);
