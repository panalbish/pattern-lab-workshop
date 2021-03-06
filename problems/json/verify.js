#!/usr/bin/env node

var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path');
var filename = "_data.json";

//check the directory exists
//check the file exists
//verify the contents of the file

findFile();

function findFile() {
  if (process.cwd().match("data")) {
    check(process.cwd())
  } else {
    check(path.join(process.cwd(), "/data/"))
  }

  function check(userspath) {
    fs.readdir(userspath, function(err, files) {
      if (err) {
        return console.log(err);
      }
      var allFiles = files.join();
      if (allFiles.match(filename)) {
        console.log("File in data folder!");
        checkFile();
      }
      else {
        console.log("File NOT in data folder!");
      }
    })
  }
}

function checkFile() {
  fs.readFile(path.join(process.cwd(), "/data/" + filename), 'utf8', function (err,data) {
    if (err) {
      console.log("Try running the verify command from the top-level folder of this project.");
      return console.log(err);
    }
    else {
      if (data.indexOf('btnText') > -1) {
        console.log('Key of btnText!');
      }
      if (data.indexOf('Add to cart') > -1) {
        console.log('Value of \'Add to cart!\'');
      }
    }
  });
}
