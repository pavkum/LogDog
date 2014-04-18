exports.logdata = function(req , res) {
    var engine = require('./engine.js');

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");


    var data = {};
    data.type = 'log';
    data.req = req;
    data.res = res;
    
    engine.dataProcessorQueue.push(data);
};