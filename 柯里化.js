

function funA(fn) {
    let  args = [];
    let timer = null;
    return function testTemp() {
        var self = this;
        args = args.concat(Array.prototype.slice.call(arguments));
        // if(!arguments.length) {
        //     fn.apply(null,args);
        // } else {
        //     return arguments.callee;
        // }
        if(timer) clearTimeout(timer);
        timer = setTimeout(function(){
            fn.apply(self,args);
        }, 0);
        return arguments.callee;
    }
}

function testA() {
    let sum = 0;
    for (const arg of arguments) {
        sum = sum+arg;
    }
    console.log(sum)
}
testA(1,2,3)
funA(testA)(1)(2)(3)
