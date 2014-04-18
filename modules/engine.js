var dataHolder = [];
var dataProcessorQueue = [];

setInterval(function (){
    var queue = dataProcessorQueue.shift();
    if(queue){
        if(queue.type === 'log'){
            recordLog(queue);
        }else if(queue.type === 'get'){
            serveLog(queue);
        }
    }
},1000);

var recordLog = function(data){
    var req = data.req;
    var res = data.res;

    var content = req.body;

    if(content && content.level && content.tag && content.msg){
        dataHolder.push(content);
        res.send('OK');
    }else{
        res.send('INVALID');
    }

};

var serveLog = function (data) {
    var res = data.res;
    try{
        var size = dataHolder.length;

        var respData = [];

        for(var i=0; i<size; i++){
            respData.push(dataHolder.shift());
        }
        res.send(JSON.stringify(respData));    
    }catch(Err){
            res.send('Err : '+Err);    
    }
};

exports.dataProcessorQueue = dataProcessorQueue;
