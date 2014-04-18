exports.get = function(req , res) {
    
    var engine = require('./engine.js');

    var data = {};
    data.type = 'get';
    data.req = req;
    data.res = res;
    
    engine.dataProcessorQueue.push(data);
};
