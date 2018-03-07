var fs = require('fs');

fs.readdir('./', 'utf-8', function(err, files) {
    fs.writeFile('./newfile.txt', files.join('\n'), function(err){
        if (err) throw err;
    });
});
