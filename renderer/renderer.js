const fs = require('fs');
/*
 readFolder function to obtain the path
 */
function readFolder(path) {
    fs.readdir(path, (err, files) => {
        'use strict';
        if (err) throw  err;
        //the files parameter is an array of the files and folders in the path we passed. So we loop through the array, printing each file and folder
        for (let file of files) {
            //the += after innerHTML means we are appending to the existing content
            document.getElementById('display-files').innerHTML += `<li>${file}</li>`;
        }
    });
}
