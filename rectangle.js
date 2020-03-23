const [nd, sc, file1, file2] = process.argv;

var fs = require('fs');
var tab =[[]]

var data1 = fs.readFileSync(file1, 'utf8').split("\n")
var data2 = fs.readFileSync(file2, 'utf8')

console.log(data1);
console.log(data2);
console.log(data2.length);

var rec_ref
var rec_test


for (var i=0 ; i<data1.length ; i++){
  for (var j=0 ; j<length ; j++){
    c1[i]=[]
  }
}

  //     c1[i][j]=contents.split('');
  //   }
  // }
  // console.log('c1:\n'+contents);
  //
  //
  // console.log(contents.length);
  // console.log('c2:\n'+contents);
