// 各idにクラスを追加
function ham() {
    document.getElementById('top-span').classList.toggle('active1');
    document.getElementById('center-span').classList.toggle('active2');
    document.getElementById('bottom-span').classList.toggle('active3');
    document.getElementById('ham-menu').classList.toggle('in');
    document.getElementById('ham').classList.toggle('ham-fixed');
    document.getElementById('html').classList.toggle('scroll-prevent')
}

// ハンバーガーメニュークリック時にクラス追加
document.getElementById('ham').addEventListener('click', function () {
    ham();
});


// 各idからクラスを削除
function removeClass() {
    document.getElementById('top-span').classList.remove('active1')
    document.getElementById('center-span').classList.remove('active2')
    document.getElementById('bottom-span').classList.remove('active3')
    document.getElementById('ham-menu').classList.remove('in')
    document.getElementById('ham').classList.remove('ham-fixed')
    document.getElementById('html').classList.remove('scroll-prevent')
}

// 画面クリックで追加されたクラス削除
document.getElementById('ham-menu').addEventListener('click', () => {
    removeClass();
});


// first-vの画像スライド
var setImage = [
    "./img/fv-bgi_01@2x.jpg",
    "./img/fv-bgi_02@2x.jpg",
    "./img/fv-bgi_03@2x.jpg"];

//カウンターの初期値設定
var counter = 0;

//設定した画像パスをid="slideshow"のbackground-imageに設定する、繰り返す
function slideimage() {
    //カウンターが設定画像数より大きいか確認
    if (counter > (setImage.length - 1)) {
        //カウンターを初期値に戻す
        counter = 0;
    }
    //背景画像を設定
    document.getElementById("fv-slider").style.backgroundImage = "url(" + setImage[counter] + ")";
    //カウントアップ
    counter++;
}

//3秒ごとに背景画像を切り替える
setInterval("slideimage()", 3000);


//fv過ぎたらheaderの背景色変更
$(function () {
    $(window).on("scroll", function () {
        const sliderHeight = $(".first-v").height();
        if (sliderHeight - 30 < $(this).scrollTop()) {
            $(".js-hd").addClass("headerScroll");
        } else {
            $(".js-hd").removeClass("headerScroll");
        }
    });
});
