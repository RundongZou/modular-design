/**
 * @description     Tabs模块js
 * @author          Rundong Zou
 * @time            2016/12/2
 * @version         1.0
 */

define(function(require, exports, module){
    //引入modal样式
    require('./tabs.css');
    require('jquery');
    require('handlebars');
    var tpl = require('./tabs.html');
    var comptpl = Handlebars.compile(tpl);

    function tabsInit(param){
        var $container = $(param.container);
        var arrCon=[];
        var arrTitle=[];
        for(var i=0;i<param.contents.length;i++
        ){
            arrCon.push({"value":param.contents[i]});
            arrTitle.push({"value":param.tabs_title[i]});
        }
        var html_tab_tpl = comptpl({
            contents: arrCon,
            tabs_title: arrTitle
        });
        console.log(html_tab_tpl);
        $container.html(html_tab_tpl);
        var $tab_titles = $container.find('.tab_title');
        var $tab_contents = $container.find('.tab_content').hide()
        $tab_contents.eq(0).show();
        //点击Tab
        $tab_titles.click(function(){
            //$(this).addClass('hover');
            $tab_contents.hide().eq($(this).index()).show();
        });
    }

    exports.init = tabsInit;

 });





















