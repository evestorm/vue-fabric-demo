<template>
<div class="home">
  <canvas id="canvas"></canvas>
</div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  mounted() {
    const canvas = new this.$fabric.Canvas("canvas", {
      width: window.innerWidth,
      height: 500,
      backgroundColor: 'lightblue',
    });
    const rect = new this.$fabric.Rect({
      top: 20,
      left: 20,
      width: 50,
      height: 50,
      fill: "red",
      angle: 45,
    });

    // 添加到画布
    canvas.add(rect);

    // 移动rect
    rect.set({
      left: 50,
      top: 50,
      width: 100,
      height: 100
    })

    // 修改react属性
    rect.set('fill', 'yellow');
    rect.set({
      strokeWidth: 5,
      stroke: 'rgba(100, 200, 200, .5)'
    })
    rect.set('angle', 5).set('flipY', true);

    // 缩放画布里面的内容
    // canvas.setZoom(0.5);
    // 直接针对整个画布缩放
    // const c = document.getElementsByClassName("canvas-container")[0];
    // c.style.transform = 'scale(0.5)';

    // 圆形、三角形

    const circle = new this.$fabric.Circle({
      radius: 20,
      fill: "green",
      left: 300,
      top: 50
    });
    const triangle = new this.$fabric.Triangle({
      width: 20,
      height: 20,
      fill: 'blue',
      left: 100,
      top: 50
    });
    canvas.add(circle, triangle);

    // 继承
    // 获取角弧度
    this.$fabric.Object.prototype.getAngleInRadians = function () {
      return this.get('angle') / 180 * Math.PI;
    };
    console.log(rect.getAngleInRadians());

    console.log(circle instanceof this.$fabric.Circle);
    console.log(circle instanceof this.$fabric.Object);
  }
};
</script>
