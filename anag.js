const [nd, sc, c1, file] = process.argv;

var fs = require('fs');
var string=[]
var lettre;
var lanag;
var word=[];
var tab=[];



for(i=0; i<c1.length; i++){
  word[i]=c1.slice(i, i+1);
}

fs.readFile(file, 'utf8', function(err, contents){
  console.log('le contenu est\n'+contents);
  string=contents.split('\n');

  for(i=0; i<word.length; i++){
    for(j=0; j<word.length-1 ;j++){
      lettre=word[j+1];
      word[j+1]=word[j];
      word[j]=lettre
      console.log(word);
      for(k=0; k<string.length; k++){
        if( word.join('') == string[k]) tab.push(word.join(''));
      }
    }
  }
console.log(tab);
});
