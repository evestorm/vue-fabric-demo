<template>
<div>
  <canvas id="canvas"></canvas>
</div>
</template>

<script>
export default {
  mounted() {
    var canvas = new this.$fabric.StaticCanvas("canvas", {
      width: window.innerWidth,
      height: 400,
      backgroundColor: 'yellow'
    })
    var text = new this.$fabric.Text("Hello Lance\nHello World!!!!!", {
      left: 100,
      top: 100,
      fontFamily: 'Comic Sans',
      fontSize: 50,
      scaleX: 1.5, // 横向放大
      scaleY: 1.5, // 纵向放大
      fontWeight: 'bold', // normal 200 300
      underline: true, // 下划线
      linethrough: true, // 贯穿线
      overline: true, // 上划线
      shadow: 'rgba(0,0,0,0.3) 5px 5px 5px', // 阴影
      // shadow: 'green -5px -5px -3px',
      fontStyle: 'italic', // 斜体 normal
      stroke: '#ff1318', // 描边
      strokeWidth: 2, // 描边宽度
      textAlign: 'right', // 对齐方式
      lineHeight: 2, // 行高
      textBackgroundColor: "rgb(0, 200, 200)"
    });
    canvas.add(text);
  }
}
</script>
