//var root_url = 'http://192.144.184.227:8080/shijianrili-0.0.1-SNAPSHOT';
var root_url = 'http://192.168.1.107:8080';
var index_url = root_url;

var picture_url = 'http://47.102.113.146/sringmvcphoto-1.0-SNAPSHOT/updateitem.action';
function closewin() {
    api.closeWin();
}

//提示
function msg(msg){
    api.toast({
        msg: msg,
        duration: 2000,
        location: 'bottom'
    });
}
