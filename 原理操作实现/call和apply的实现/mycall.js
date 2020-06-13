var obj = {
  name: 'qmj'
}
function foo(height,age) {
  console.log(this.name+"年龄"+age+"身高"+height)
}

foo.call(obj)
// 实现思路：
// 1.调用mycall时，将foo函数添加到obj对象中，再调用，调用完之后再删除即可
Function.prototype.mycall = function(object) {
  object.fn = this
  // console.log(this) this 指向foo这个函数
  var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push(`arguments[${i}]`);
    }
    eval(`object.fn(${args})`);
    console.log(args)
  object.fn()
  delete object.fn
}
foo.mycall(obj,188,18) // qmj 但是第一版不能传入参数

// Function.prototype.call2 = function(context) {
//   context.fn = this;
//   var args = [];
//   for(var i = 1, len = arguments.length; i < len; i++) {
//       args.push('arguments[' + i + ']');
//   }
//   eval('context.fn(' + args +')');
//   delete context.fn;
// }

// // 测试一下
// var foo = {
//   value: 1
// };

// function bar(name, age) {
//   console.log(name)
//   console.log(age)
//   console.log(this.value);
// }

// bar.call2(foo, 'kevin', 18); 
