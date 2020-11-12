<template>
<div>
  <canvas id="canvas"></canvas>
</div>
</template>

<script>
export default {
  mounted() {
    var canvas = new this.$fabric.StaticCanvas('canvas', {
      width: window.innerWidth,
      height: 400,
      backgroundColor: 'yellow',
    });
    var rect = new this.$fabric.Rect({
      left: 10,
      top: 10,
      width: 200,
      height: 200,
      fill: "blue"
    });

    //     那么我们可以通过哪些其他选项来动画？

    // from 允许指定动画属性的起始值（如果我们不希望使用当前值）。
    // duration 默认为500ms。可以用来改变动画的持续时间。
    // onComplete 动画结束之后的回调。
    // easing 动效函数。
    setTimeout(() => {
      // 动画
      // rect.animate('angle', 45, {
      //   onChange: canvas.renderAll.bind(canvas)
      // })
      // rect.animate('left', '+=100', {
      //   onChange: canvas.renderAll.bind(canvas)
      // })
      rect.animate('left', 500, {
        onChange: canvas.renderAll.bind(canvas),
        duration: 1000,
        easing: this.$fabric.util.ease.easeOutBounce
      });
      // 注意使用了fabric.util.ease.easeOutBounce作为easing的值，
      // 其他值得注意的还包括
      // easeInCubic，easeOutCubic，
      // easeInElastic，easeOutElastic，
      // easeInBounce和easeOutExpo。
    }, 1000)
    canvas.add(rect)
  }
}
</script>
