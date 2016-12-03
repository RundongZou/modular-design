/**
 * @description     蒙层模块js
 * @author          Rundong Zou
 * @time            2016/12/1
 * @version         1.0
 */

define(function(require, exports, module){
    //引入modal样式
    require('./modal.css');
    require('jquery');
    var tpl = require('./modal.html');
    $(document.body).append(tpl);

    function modalInit(para){
        para = para || {};
        console.log(para);
        var $elem = para;
        if($elem === undefined){
            throw 'no';
            return;
        }
        if($elem instanceof jQuery){

        }else{
            $elem = $(para.elem);
        }

        var zouModal = $('#zou-modal');
        var zouModalContent = $('#zou-modal-content');
        zouModalContent.html($elem.remove());
        zouModalContent.css({
            width: $elem.width(),
            height: $elem.height(),
            "margin-top": 0 - ($elem.height() / 2),
            "margin-left": 0 - ($elem.width() / 2)
        })

        return {
            show: function(){
                zouModal.addClass('show');
            },
            hide: function(){
                zouModal.removeClass('show');
            }
        }
    }

    //函数的调用
    exports.init = modalInit;

 });





















