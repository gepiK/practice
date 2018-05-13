

   Array.prototype.unique1 = function(){
    var obj = {},
     ary = [],
     i= 0,
     len = this.length;
    for(; i<len; i++){
     if(!obj[this[i]]){
      obj[this[i]] = 1;
      ary.push(this[i]);
     }
    }
    return ary.sort(function(a,b){return a - b});
   }
   Array.prototype.unique2 = function(){
    var ary = [],
     i= 0,
     len = this.length;
    for(; i<len; i++){
     if(ary.indexOf(this[i]) == -1) ary.push(this[i]);
    }
    return ary.sort(function(a,b){return a - b});
   }
   Array.prototype.unique3 = function(){
    var ary = [],
     i= 0,
     len = this.length;
    for(; i<len; i++){
     if(this.indexOf(this[i]) == i) ary.push(this[i]);
    }
    return ary.sort(function(a,b){return a - b});
   }
   Array.prototype.unique4 = function(){
    this.sort(function(a,b){return a - b});
    var ary = [],
     i= 0,
     len = this.length;
    for(; i<len; i++){
     if(this[i] !== this[i-1]) ary.push(this[i]);
    }
    return ary;
   }
   Array.prototype.unique5 = function(){
    return [...new Set(this)];
   }
   function randomAry (n) {
    var ary = [],i=0;
    for(; i<n; i++){
     ary.push(Math.ceil(Math.random()*10000));
    }
     console.log(ary)
    return ary;
   }
   function useTime (fn) {
    var start = new Date();
    fn();
    var end = new Date();
    console.log(fn.name+'函數運行花了：' + (end - start) + '毫秒');
   }
   function result(fn) {
    let result = fn();
       console.log(`${fn.name}结果是${result}`);

   }
   var ary = randomAry(10000),
//    var ary = [1,2,3,1,null,undefined],
    fn1 = function(){
    return ary.unique1()
    },
    fn2 = function(){
        return ary.unique2()
    },
    fn3 = function(){
        return ary.unique3()
    },
    fn4 = function(){
        return ary.unique4()
    };
    fn5 = function(){
        return ary.unique5()
        };
        useTime(fn1);
        useTime(fn2);
        useTime(fn3);
        useTime(fn4);
        useTime(fn5);
        // result(fn1);
        // result(fn2);
        // result(fn3);
        // result(fn4);
        // result(fn5);
