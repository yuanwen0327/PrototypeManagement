var exec = require('child_process').exec;

var cmd = {
  exec : function(cmdStr){
    console.log('命令：'+cmdStr);
    exec(cmdStr, function(err,stdout,stderr){
        if(err) {
            console.log('错误:'+stderr);
        } else {
            console.log('成功')
        }
    });
  }
}

module.exports = cmd;
