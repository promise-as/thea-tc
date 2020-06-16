$(function(){
  // 打开页面后8S后弹出
  var sId = null; // 定时器
  function showMask(mask, t){
    sId = setInterval(function(){
      $(mask).show();
      clearInterval(sId);
    }, t);
  }
  // 关闭浮窗
  function closeFixed(closeBtn, wrap){
    $(closeBtn).click(function(){
      $(wrap).hide();
    });
  }

  // 弹窗
  showMask('.tc-mask', 8000);
  closeFixed('.tc-mask .tc-close', '.tc-mask');

  //  左侧或者右侧固定
  closeFixed('.kc-fixed .kc-close', '.kc-fixed');
});