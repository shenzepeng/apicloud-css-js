# apicloud-css-js
啦啦
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0"/>
    <meta name="format-detection" content="telephone=no,email=no,date=no,address=no">
    <title>Hello APP</title>
    <link rel="stylesheet" type="text/css" href="../css/api.css" />
    <link rel="stylesheet" type="text/css" href="../css/aui.css" />
    <style>
      .normal {display: none;}
      .active {display: block;}
    </style>
</head>

<body>
  <div id="app" >
    <header class="aui-bar aui-bar-nav normal"
    v-for="(vo,index) in list"
    v-bind:class="{'active': active_index == index}">
    <div >
      {{ vo.title }}
    </div>
    <div class="normal" v-bind:class="{'active': active_index == 1}">
      <div   class="aui-pull-right aui-btn aui-btn-outlined ">
      <span  class="aui-iconfont aui-icon-search "></span>
    </div>

    </div>
    </header>

    <footer id="footer" class="aui-bar aui-bar-tab">
        <div class="aui-bar-tab-item  " v-for="(vo,index) in list"
        v-bind:class="{'aui-active':active_index==index}" tapmode @click="changeMenu(index)">
          <i class="aui-iconfont aui-icon-home" v-if="index==0"></i>
          <i class="aui-iconfont aui-icon-menu" v-if="index==1"></i>
          <i class="aui-iconfont aui-icon-my" v-if="index==2"></i>
          <div class="aui-bar-tab-label">{{vo.title}}</div>
        </div>
    </footer>
  </div>
</body>
<script type="text/javascript" src="../script/api.js"></script>
<script type="text/javascript" src="../script/vue.js"></script>
<script type="text/javascript">
    var vm=new Vue({
      el:"#app",
      data:{
        active_index:0,
        list:[
          {title:'首页'},
          {title:'任务'},
          {title:'我的'}
        ]
      },
      methods:{

        init:function(){
          var headerH=$api.dom('header').offsetHeight;
          var footerH=$api.dom('footer').offsetHeight;
          var footer = $api.byId('footer');
          var frameH = api.winHeight - headerH - footerH;

          api.openFrameGroup ({
              name: 'indexGroup',
              background: '#fff',
              scrollEnabled: false,
              rect: {
                   x: 0,
                   y: headerH,
                   w: 'auto',
                   h: frameH
              },
              index: vm.active_index,
              frames: [{
                  name: 'index',
                  url: './calendar/calendarIndex.html',
                  bgColor: '#fff',

              },{
                  name: 'taskIndex',
                  url: './task/taskIndex.html',
                  bgColor: '#fff',

              },
              {
                  name: 'mineIndex',
                  url: './mine/mineIndex.html',
                  bgColor: '#fff',

              }]
          }, function(ret, err){
              if( ret ){

              }else{

              }
          });
        },
        changeMenu:function(index){
          vm.active_index=index;
          api.setFrameGroupIndex({
              name: 'indexGroup',
              index: index,
              scroll: true
          });
        },
        exitApp:function(){
          api.addEventListener({
               name: 'keyback'
               }, function(ret, err) {
               api.toast({
                       msg: '再按一次返回键退出',
                       duration: 2000,
                       location: 'bottom'
               });

               api.addEventListener({
                       name: 'keyback'
               }, function(ret, err) {
                       api.closeWidget({
                               silent: true
                       });
               });

               setTimeout(function() {
                       exitApp();
               }, 2000)
           });
        }
      }
    });
    apiready = function(){
      var headerList=$api.domAll('header');
      for(var i=0;i<headerList.length;i++){
        $api.fixStatusBar(headerList[i]);
      }
      $api.fixTabBar($api.byId('footer'));
      vm.init();
      vm.exitApp();
      findTask();
    };

    function findTask(){
    //  var timestamp = Date.parse(new Date());
    //  var username=$api.getStorage('username');
    //  window.setInterval("startShock()", 5000);
    }
    function startShock(){
      api.notification({
          vibrate:[300, 500],//震动时间节奏
          sound: 'default',//系统默认提示音
          light: false,//是否亮灯，需设备支持
          notify: {//状态栏通知
          title: 'message',//通知标题
          content: 'hello',//通知内容
          extra:{goto:'winAa'}//额外的键值对，通知被点击后将通过noticeclicked交给网页
      }
    }, function(ret, err){
        if(ret){
            // api.alert(ret.id);//id为通知ID，可用于取消通知
               }
        });
    }

</script>
</html>
