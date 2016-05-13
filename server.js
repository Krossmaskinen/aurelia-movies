var express = require('express'),
    app = express(),
    server;

app.use(express.static('./'));

server = app.listen(2112, function() {
    var host = server.address().host,
        port = server.address().port;

    console.log( 'Movies app listening at http://%s:%s', host, port );
});