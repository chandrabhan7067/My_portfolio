const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 80;

// sendFile will go here
app.get('/', function(req, res) {
  console.log(__dirname)
  res.sendFile(path.resolve(__dirname, './index.html'));
});
  
app.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname, './about.html'));
});

app.get('/skill', function(req, res) {
  res.sendFile(path.join(__dirname, './skill.html'));
});

app.get('/myProjects', function(req, res) {
  res.sendFile(path.join(__dirname, './myprojects.html'));
});

app.get('/connect', function(req, res) {
  res.sendFile(path.join(__dirname, './connect.html'));
});

app.get('/resume', function(req, res) {
  // var data = fs.readFileSync('./My_Resume.pdf');
  // res.contentType("application/pdf");
  // res.send(data);

  res.send(fs.readFileSync('./My_Resume.pdf'))
});

app.listen(port);
console.log('Server started at http://localhost:' + port);