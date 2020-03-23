const [nd, sc, c1, file] = process.argv;
var fs = require('fs');
var tab=[]
var anag
var word = []
var data =[]

//ouverture du ficher
data = fs.readFileSync(file, 'utf8').split('\n')

//ordre alphabatique du mot
word=c1.split("").sort().join("")

//comparaision des mot
for(i=0; i<data.length; i++){
  anag = data[i].split("").sort().join("")
  if(anag == word)
  {
    tab.push(data[i])
  }
}
console.log(tab);
