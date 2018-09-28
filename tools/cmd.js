var exec = require('child_process').exec;

var cmd = {
  exec : function(cmdStr){
    console.log('解压命令：'+cmdStr);
    exec(cmdStr, function(err,stdout,stderr){
        if(err) {
            console.log('解压错误:'+stderr);
        } else {
            console.log('解压成功')
        }
    });
  }
}

module.exports = cmd;
