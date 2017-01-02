var getdeps = require("../index.js");

getdeps('grunt', function(d){
  console.log('itworked')
  for(i of d){
    console.log(i)
  }
})
