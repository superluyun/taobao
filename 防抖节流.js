function debounce(fn, wait) { // 防抖
    var timeout = null;
    return function() {
        if(timeout !== null) 
                clearTimeout(timeout);
        timeout = setTimeout(fn, wait);
    }
}
// 处理函数
function handle() {
    console.log(Math.random()); 
}
// 滚动事件
window.addEventListener('scroll', debounce(handle, 1000));


var throttle = function(func, delay) { //节流（时间戳）
    var prev = Date.now()
    return function() {
        var context = this;
        var args = arguments;
        var now = Date.now()
        if (prev-now>delay) {
            func.apply(context,args)
            prev = Date.now()
        }
    }
}
function handle() {
    console.log(Math.random());
}
window.addEventListener('scroll', throttle(handle, 1000));

var throttle = function(func, delay) {// 节流（定时器）
    var timer = null;
    return function() {
        var context = this;
        var args = arguments;
        if (!timer) {
            timer = setTimeout(function() {
                func.apply(context, args);
                timer = null;
            }, delay);
        }
    }
}
function handle() {
    console.log(Math.random());
}
window.addEventListener('scroll', throttle(handle, 1000));