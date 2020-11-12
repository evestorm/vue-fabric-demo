<template>
<div>
  <canvas id="canvas"></canvas>
  <img id="cat" src="http://placekitten.com/200/200" alt="cat">
</div>
</template>

<script>
export default {
  mounted() {
    var canvas = new this.$fabric.StaticCanvas('canvas', {
      width: window.innerWidth,
      height: 500
    })
    var imgEle = document.getElementById('cat')
    var imgInstance = new this.$fabric.Image(imgEle, {
      left: 100,
      top: 100,
      angle: 30,
      opacity: .5
    })

    canvas.add(imgInstance)

    // 通过url添加
    this.$fabric.Image.fromURL('http://placekitten.com/300/200', function (img) {
      img.scale(.5).set('flipX', true)
      canvas.add(img)
    })
  }
}
</script>
