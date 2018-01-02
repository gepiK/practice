

function fun1(age,name) {
   this.age = age;
   this.name = name;
}

// function extend(subFun,superFun) {
//     var prototype = Object.create(superFun.prototype);
//     prototype.constructor=subFun;
//     subFun.prototype = prototype;
// }

// function fun2() {
//     fun1.apply(this,[].slice.apply(arguments))
// }

// extend(fun2,fun1);
// var insB = new fun2(2,3);
// console.log(insB.age);
// console.log(insB.name);

Function.prototype.Xbind = function(superFn) {
    function subFn() {
        superFn.apply(this,[].slice.apply(arguments))
    }
    var prototype = Object.create(superFn.prototype);
    prototype.constructor= v;
    subFn.prototype = prototype;
    return subFn;
}

function fun2() {

}

fun2 = fun2.Xbind(fun1);
var insB = new fun2(2,3);
console.log(insB.age)
console.log(insB.name)
