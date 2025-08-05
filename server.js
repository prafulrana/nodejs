var express = require('express');
var os = require('os');
var path = require('path');

var app = express();

var distPath = path.join(__dirname, 'frontend', 'dist');
app.use(express.static(distPath));

app.get('/', function(req, res){
    res.sendFile(path.join(distPath, 'index.html'));
    console.log("Requested route: /");
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    var host = 'localhost';
    var interfaces = os.networkInterfaces();
    for (var name in interfaces) {
        var ifaceList = interfaces[name];
        for (var i = 0; i < ifaceList.length; i++) {
            var iface = ifaceList[i];
            if (iface.family === 'IPv4' && !iface.internal) {
                host = iface.address;
                break;
            }
        }
        if (host !== 'localhost') {
            break;
        }
    }
    console.log('Server is listening at http://' + host + ':' + port);
});
