const express = require('express')
const app = require('./api/index.js');
const path = require('path')

app.use(express.static(path.join(__dirname, 'src', 'public')));

