//注意： typeof 能判断原始类型 对象型Array ,Object 则为object, function为function; 而instance可以判断对象的具体类型比如Array,他是沿着原型链开始找的

function myInstanceof(target, constructor) {
  if (typeof target != 'object') return;
  if (typeof constructor != 'function') return;
  let proto = target.__proto__;
  while (proto) {
    if (!proto.__proto__) return false;
    else if (proto == constructor.prototype) return true;
    proto = proto.__proto__;
  }
}

function Person() {}
function Children() {}

// 继承 Person的实例作为作为Children的原型
Children.prototype = new Person();

let children = new Children();
console.log(myInstanceof(children, Person)); // true
