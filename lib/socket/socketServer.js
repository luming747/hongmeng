/**
 * Created by iqianjin-luming on 16/8/1.
 */
var net = require('net');
var handle = require('./socketHandle');

var socketServer = function(port){
    this.socketServer=null;
    this.init(port);
};
socketServer.prototype={
    init:port=>{
        this.socketServer = net.createServer(handle);
        this.socketServer.listen(port)
    }
}
module.exports=socketServer;
