# Tabs组件

## 组件描述

##组件应用
1. 引用tabs组件库
2. 被使用的元素加上class = zou_tabs

##组件应用
1.var CptModal = require('modal');
2.var modal = CptModal.init($(dom));
$(dom)就是 Modal 中间要显示的内容

##应用举例
```html
<div id="zou-modal" class="zou-modal">
    <div id="zou-modal-content" class="zou-modal-content"></div>
</div>
```

```js
var CptModal = require('modal');
var modal = CptModal.init($)('.content');
modal.show();
modal.hide();
```

##所有API
show    显示  Modal
hide    隐藏  Modal