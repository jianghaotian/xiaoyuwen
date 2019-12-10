var http = require('http');
var spawn = require('child_process').spawn;
var createHandler = require('github-webhook-handler');

var handler = createHandler({
    path: '/xyw',
    secret: 'xiaoyuwen'
});

http.createServer(function (req, res) {
    handler(req, res, function (err) {
        res.statusCode = 404;
        res.end('no such location');
    })
}).listen(8081);
// console.log('github-webhook-handler run');

handler.on('error', function (err) {
    // console.error('Error:', err.message)
});

handler.on('push', function (event) {
    if (event.payload.head_commit.message === "jht run") {
        runCommand('bash', ['./deployed.sh'], function( txt ){
            // console.log(txt);
        });
    }
});

function rumCommand(cmd, args, callback) {
    var child = spawn(cmd, args);
    var response = '';
    child.stdout.on('data', function (buffer) {
        response += buffer.toString();
    })
    child.stdout.on('end', function () {
        callback(response);
    })
}
