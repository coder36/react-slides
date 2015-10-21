var path = require('path');
var express = require('express');
var request = require('request');


var app = express();

app.use(express.static('public'));
app.use('/static', express.static('dist'));

app.get('/proxy.json', function(req,res) {
    var url = req.headers['url'];
    request({
        url: url,
        strictSSL: false
    }, function (error, response, body) {
        res.send(body);
    });
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function(err) {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Express listening at http://%s:%s', host, port);
});
