/*
* @Author: Marte
* @Date:   2016-12-01 12:29:52
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-01 12:36:55
*/

define(function(require, exports, module){
    require('button');
    require('jquery');
    var comModal = require('modal');

    $( function () {
        var modal = comModal.init( {
            elem : $('#con')
        } );
        $('.zou-button-warn').click(function () {
            modal.show();
            //$("#con").show();
        });
        $('#close-btn').click( function () {
            modal.hide();
        } );
    } );
});