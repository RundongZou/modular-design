/*
* @Author: Rundong Zou
* @Date:   2016-12-01 12:29:52
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-01 12:36:55
*/

define(function(require, exports, module){
    require('button');
    require('jquery');
    require('handlebars');
    require('tabs');
    var componentModal = require('modal');
    var componentTabs = require('tabs');

    /*var tabs_tpl = require('./../../components/Tabs/tabs.html');
    var tabs_tpl_compiler = Handlebars.compile(tabs_tpl);*/
    //console.log(tabs_tpl_compiler({}))

    var contents = [
        '体坛快讯——体育',
        '电影人生——电影',
        '味觉享受——美食',
        '说走就走——旅行'
    ];
    var contentList = [];
    var tabs_title = ['体育','电影','美食','旅行'];
    /*for(var i = 0; i < contents.length; i++){
        tabs_tpl_compiler({content: contents[i]});
    }*/
    var init={
        container: '#news',
        contents: contents,
        tabs_title: tabs_title
    };
    console.log(init);
      componentTabs.init(init);

    $( function () {
        var modal = componentModal.init( {
            elem : $('#con')
        } );
        $('.zou-button-warn').click(function () {
            modal.show();
        });
        $('#close-btn').click( function () {
            modal.hide();
        } );
    } );
});