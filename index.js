var fs = require('fs');
var readdir = require('readdir');

fs.readdir('../zadanie13_7', 'utf-8', function(err, files) {
    fs.writeFile('.newfile.txt', files, function(err){
        if (err) throw err;
    })
});