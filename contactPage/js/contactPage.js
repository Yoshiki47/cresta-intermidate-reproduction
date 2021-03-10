// 各idにクラスを追加
function ham() {
    document.getElementById('top-span').classList.toggle('active1');
    document.getElementById('center-span').classList.toggle('active2');
    document.getElementById('bottom-span').classList.toggle('active3');
    document.getElementById('cp-ham-menu').classList.toggle('in');
    document.getElementById('cp-ham').classList.toggle('ham-fixed');
    document.getElementById('html').classList.toggle('scroll-prevent')
}

// ハンバーガーメニュークリック時にクラス追加
document.getElementById('cp-ham').addEventListener('click', () => {
    ham();
});


// 各idからクラスを削除
function removeClass() {
    document.getElementById('top-span').classList.remove('active1')
    document.getElementById('center-span').classList.remove('active2')
    document.getElementById('bottom-span').classList.remove('active3')
    document.getElementById('cp-ham-menu').classList.remove('in')
    document.getElementById('cp-ham').classList.remove('ham-fixed')
    document.getElementById('html').classList.remove('scroll-prevent')
}

// 画面クリックで追加されたクラス削除
document.getElementById('cp-ham-menu').addEventListener('click', () => {
    removeClass();
});


//alert
document.getElementById('submit').addEventListener('click', () => {
    alert('※実際に送信はされません');
});


//fv過ぎたらheaderの背景色変更
$(function () {
    $(window).on("scroll", function () {
        const sliderHeight = $(".cp-fv").height();
        if (sliderHeight - 30 < $(this).scrollTop()) {
            $(".js-hd").addClass("headerScroll");
        } else {
            $(".js-hd").removeClass("headerScroll");
        }
    });
});