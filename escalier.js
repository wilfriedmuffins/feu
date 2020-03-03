
function escalier(n) {
  var n = parseInt(process.argv.slice(2)); // convert String to int
  var count = n;
  for(var i=1 ; i<n+1; i++){
    console.log(" ".repeat(count) + "#".repeat(i));
    count--;
  }
};

escalier(process.argv.slice(2));
