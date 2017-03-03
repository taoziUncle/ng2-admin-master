var express = require('express');
var app = express();

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.send('Hello World');
})

var server = app.listen(9999, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
