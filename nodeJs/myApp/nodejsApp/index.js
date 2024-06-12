var fs = require('fs')
// fs --->(file system) we can read ,write,rm...
// I want ot read the data from the file1.txt and 
// print thr data on the console


fs.readFile('file1.txt',function(err,data){
    console.log(data.toString())

})