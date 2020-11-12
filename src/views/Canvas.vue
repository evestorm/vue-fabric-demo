<template>
<div class="canvas">
  <canvas id="c"></canvas>
</div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {

    // =========================  canvas配置 =========================
    var canvas = new this.$fabric.StaticCanvas('c', {
      backgroundColor: 'rgb(100,100,200)',
      width: window.innerWidth,
      height: 200
    }); // 使用 StaticCanvas 就没有互动性了
    var rect = new this.$fabric.Rect({
      width: 100,
      height: 100,
      fill: 'red'
    });
    // canvas.selection = false; // 禁止所有选中（然而不起作用）
    // rect.set('selectable', false); // 禁止矩形选中
    // 设置canvas背景图片
    // canvas.set('backgroundColor', 'lightgray');

    canvas.add(rect); // 添加对象
    console.log(canvas.item(0)); // 源于刚刚添加的第一个矩形对象
    console.log(canvas.getObjects()); // 获取所有对象（只有一个矩形）
    // canvas.remove(rect); // 移除这个矩形
    console.log(canvas);

    // 或者

    // var canvas = new this.$fabric.Canvas('c');
    // canvas.setBackgroundImage('http://...');
    // canvas.onFpsUpdate = function () {
    //   /* ... */ };

    // =========================  互动 =========================

  }
}
</script>
