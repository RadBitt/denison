'use strict';

var express = require('express'); 
var path = require('path');
var parser = require('body-parser'); 
// var mailRouter = require('./mailer');
// var apiRouter = require('./api');
var https = require("https");

var app = express();
var port = 8080;
var publicPath = path.resolve(__dirname, '../html');

var options = {
  protocol: "https:",
  hostname: "api.harvestapp.com",
  path: "/v2/users/me",
  headers: {
    "User-Agent": "Node.js Harvest API Sample",
    "Authorization": "Bearer " + '1723187.pt.MdOwsSVBWTaHwOQ5IaD3LZcvBcrsKLQt_l5ewLG4RRP5XNO0PVBIUaoKV1wrQH574yTSyKn48SEz2Mvwfb3ziA',
    "Harvest-Account-ID": '729138'

  }
}

console.log(publicPath);

app.use(parser.json()); 

app.use(express.static(publicPath));

app.get('*', function(req, res) {
	res.sendFile('index.html', {root: publicPath});
});


//Harvest API
https.get(options, (res) => {
  const { statusCode } = res;

  if (statusCode !== 200) {
    console.error(`Request failed with status: ${statusCode}`);
    return;
  }

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});

//app.use('/mailer', mailRouter);

// app.use('/api', apiRouter);

app.listen(port, function() {
	console.log('Server is running on port ' + port);
});
