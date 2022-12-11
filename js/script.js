function changeTo(st) {
    var a = document.getElementsByClassName('cardType2');
    Array.prototype.forEach.call(a, function (el) {
        el.style.filter = 'blur(5px)';
        el.style.transition = '0.7s';
        el.style.transform = 'scale(0.95)';
    });
    var o = document.getElementById(st);
    o.style.filter = 'none';
    o.style.transform = 'scale(1.05)';
}
function changeFrom() {
    var a = document.getElementsByClassName('cardType2');
    Array.prototype.forEach.call(a, function (el) {
        el.style.filter = 'none';
        el.style.transition = '0.7s';
        el.style.transform = 'none';
    });
}
function changeTo3(st) {
    var a = document.getElementsByClassName('cardType3');
    Array.prototype.forEach.call(a, function (el) {
        el.style.filter = 'brightness(0.4)';
        el.style.transition = '0.7s';
    });
    var o = document.getElementById(st);
    o.style.filter = 'brightness(1.1)';
    o.style.transition = '0.7s';
}
function changeFrom3() {
    var a = document.getElementsByClassName('cardType3');
    Array.prototype.forEach.call(a, function (el) {
        el.style.filter = 'none';
        el.style.transition = '0.7s';
    });
}

document.getElementById('video').play();