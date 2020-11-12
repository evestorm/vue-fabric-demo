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
    })

    var circle = new this.$fabric.Circle({
      radius: 100,
      fill: '#eef',
      scaleY: 0.5,
      originX: 'center',
      originY: 'center'
    });

    var text = new this.$fabric.Text('hello world', {
      fontSize: 30,
      originX: 'center',
      originY: 'center'
    });

    var group = new this.$fabric.Group([circle, text], {
      left: 100,
      top: 100,
      angle: -10
    });

    canvas.add(group);

    // 首先，我们创建了一个“hello world”文本对象。
    // 将originX和originY设置为“center”会使得将以组合为中心，
    // 默认情况下，组合成员相对于组合的左上角定位。
    // 然后，圆圈以100px半径填充“#eef”颜色并垂直缩放0.5倍（scaleY = 0.5）。
    // 然后，我们创建了一个fabric.Group实例，
    // 通过一个包含这两个Fabric对象的数组传递给这个组合，
    // 并给它的位置为150/100和-10角度。
    // 最后，将这个组合添加到画布（使用canvas.add（））。

    // 修改组合
    group.item(0).set({
      fill: 'red'
    });
    group.item(1).set({
      text: 'trololo',
      fill: 'white'
    });

    var circle1 = new this.$fabric.Circle({
      radius: 50,
      fill: 'red',
      left: 0
    });
    var circle2 = new this.$fabric.Circle({
      radius: 50,
      fill: 'green',
      left: 100
    });
    var circle3 = new this.$fabric.Circle({
      radius: 50,
      fill: 'blue',
      left: 200
    });

    var group1 = new this.$fabric.Group([circle1, circle2, circle3], {
      left: 300,
      top: 100
    });

    canvas.add(group1);

    // 在使用组合时可以使用哪些其他方法?使用getObjects（）方法，
    // 可以返回一个包含组合中所有对象的数组，
    // 使用size（）可以知道组合中所有对象的数量。
    // 使用contains（）可以检查某个对象是否在组合中。
    // 我们之前看到的item（）可以检索组中的特定对象。
    // 使用forEachObject可以遍历每个组合中的对象。
    // 还有add（）和remove（）方法来相应地从组中添加和删除对象。

    // 您可以通过2种方式添加/删除组中的对象：更新组合的尺寸/位置，
    // 我们建议使用更新尺寸，除非您正在执行批量处理操作，
    // 并且在进程中组合的宽度/高度都没有问题。

    // 组合中心添加一个长方形
    group1.add(new this.$fabric.Rect({
      width: 10,
      height: 10,
      originX: 'center',
      originY: 'center',
    }));

    // 在组合的中心附近10px添加矩形
    group1.add(new this.$fabric.Rect({
      fill: 'red',
      width: 20,
      height: 20,
      originX: 'center',
      originY: 'center',
      left: 10,
      top: 10,
    }));

    // 在组合中心添加矩形并且更新组合的尺寸
    group1.addWithUpdate(new this.$fabric.Rect({
      width: 50,
      height: 40,
      left: group1.get('left'),
      top: group1.get('top'),
      originX: 'center',
      originY: 'center'
    }));
  }
}
</script>
