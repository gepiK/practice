function promise(fn) {
    var value = null;
    var callbacks=[];
    this.then = function (onFulfilled) {
        callbacks.push(onFulfilled);
        return this;
    }
    function resolve(value) {
        setTimeout(() => {
            callbacks.forEach(callback => {
                callback(value);
            });
        }, 0);

    }
    fn(resolve);
}
