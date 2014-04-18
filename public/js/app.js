var initialize = function () {
  setInterval(function (){
        update();
    },1000)    
};

var update = function (){
    $.ajax({
        url : window.location + 'get',
        method : 'GET',
        success : function(data){
            displayData(data);
        },
        error : function (error){
            console.log('Error',error);
        },
    });
};

var displayData = function(data){

    console.log(data);
    data = JSON.parse(data);

    var table = $('#log table').get(0);

    var rowsLength = table.rows.length;
    
    for(var i=0; i< data.length; i++){
        var row = table.insertRow(rowsLength);
        row.className = 'data';        

        var rowData = data[i];
        
        var sl = row.insertCell(0);
        sl.className = 'sl';
        sl.innerHTML = rowsLength + 1;

        var level = row.insertCell(1);
        level.className = 'level';
        level.innerHTML = rowData.level;

        var tag = row.insertCell(2);
        tag.className = 'tag';
        tag.innerHTML = rowData.tag;

        var msg = row.insertCell(3);
        msg.className = 'msg';
        msg.innerHTML = rowData.msg;

        rowsLength++;
    }
    

};  

$(document).ready(function(){
    initialize();
});