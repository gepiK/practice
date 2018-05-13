// async function say(greeting){
//     return new Promise(function(resolve,then){
//         setTimeout(function(){
//             resolve(greeting);
//         },1500);
//     });
// }

// (async function(){
//     var v1=await say('Hello');
//     console.log(v1);

//     var v2=await say('World');
//     console.log(v2);
// }());




yieldPromise(function *() {
    var v1 = yield function(k){
        setTimeout(() => {
            k('hello');
        }, 1000);
    };
    console.log(v1);

    var v2 = yield function(k) {
        setTimeout(() => {
            k('world');
        }, 1000);
    };
    console.log(v2);
})

function typeToString(a) {
    return Object.prototype.toString.call(a).match(/\[object (.*)\]/)[1];
}

function yieldPromise(gen) {
    if(typeToString(gen) !== 'GeneratorFunction') {
        throw new Error('param is not a generator function!')
    }
    var iterator = gen();
    recursiveCore.call(iterator);
    function recursiveCore(feedback) {
        var iterator = this;
        var result = iterator.next(feedback);
        if(result.done) return;
        var yieldFunc = result.value;
        yieldFunc(function(v) {
            recursiveCore.call(iterator, v);
        })

    }
}
