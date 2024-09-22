const flexible_rem = 16; //1rem像素大小
const flexible_designer = 750; //设计稿宽度
const flexible_html = document.documentElement;

function onFlexible() {
  let font_size;
  //获取当前浏览器窗口的宽度
  const width = flexible_html.clientWidth;

  if (width > flexible_designer) {
    //若视口宽度大于最大设备宽度，根据超出的px按比例增加字体大小
    // font_size = flexible_rem + (width - flexible_designer) / 10 / 12;
    font_size = flexible_rem
  } else {
    //如果宽度在最小和最大设备宽度之间，按比例计算字体大小
    font_size = flexible_rem - flexible_rem * (1 - width / flexible_designer);
  }

  //设置页面根元素的字体大小
  flexible_html.style.fontSize = font_size + "px";
}

onFlexible();
window.onresize = onFlexible;