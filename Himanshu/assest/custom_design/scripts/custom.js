var el = document.querySelectorAll('#navigation button')
for (var n = 0; n < el.length; n++) {
    el[n].onclick = function () {
        document.querySelector('.nav-howto-home').classList.remove('is-active');
    }
}

var a = document.querySelector('.nav-howto');
a.onclick = function () {
    document.querySelector('#navigation .icon-panel ul li button.is-active').classList.remove('is-active');
    document.querySelector('.primary-nav-category.is-active').classList.remove('is-active');
    document.querySelector('.nav-howto-home').classList.add('is-active');
}