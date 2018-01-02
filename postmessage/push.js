

var timer = setTimeout(function () {
	console.log(new Date, 1)
}, 1000)
var fn = function () {
	console.log(new Date, 2)
}
var timer2 = setInterval(fn, 100)
timer2.unref()
