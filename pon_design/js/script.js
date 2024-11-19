document.addEventListener("DOMContentLoaded", function() {
  // ハンバーガーメニューのクリックイベント
  const hamburger = document.getElementById("hamburger");
  const headerMenu = document.getElementById("header_menu");
  const menuLinks = headerMenu.querySelectorAll("nav ul li a");

  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("active");
    headerMenu.classList.toggle("active");
  });

  // メニューのリンクをクリックしたときにメニューを閉じる
  menuLinks.forEach(link => {
    link.addEventListener("click", function() {
      headerMenu.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });

  // 画像をプリロード
  const images = [
    './img/citylab.jpg', 
    './img/lamina.jpg', 
    './img/tabilog.jpg', 
    './img/smoothiesta.jpg'
  ];

  images.forEach(function(item) {
    preloadImage(item);
  });

  let current = 0; // 現在の画像インデックス

  function changeImage(num) {
    if (current + num >= 0 && current + num < images.length) {
      current += num;
      document.getElementById('main_image').src = images[current];
      updatePageNumber();
    }
  }

  function updatePageNumber() {
    document.getElementById('page').textContent = `${current + 1}/${images.length}`;
  }

  function preloadImage(path) {
    let imgTag = document.createElement('img');
    imgTag.src = path;
  }

  // 最初のページ番号を表示
  updatePageNumber();

  document.getElementById('prev').onclick = function() {
    changeImage(-1);
  };

  document.getElementById('next').onclick = function() {
    changeImage(1);
  };
});

jQuery(function() {
  jQuery(".inview1").on("inview", function (event, isInView) {
    if (isInView) {
      jQuery(this).stop().addClass("show");
    }
  });
});

// ↓　inview.js部分（通常は別ファイルで読み込みます）
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function i(){var b,c,d={height:f.innerHeight,width:f.innerWidth};return d.height||(b=e.compatMode,(b||!a.support.boxModel)&&(c="CSS1Compat"===b?g:e.body,d={height:c.clientHeight,width:c.clientWidth})),d}function j(){return{top:f.pageYOffset||g.scrollTop||e.body.scrollTop,left:f.pageXOffset||g.scrollLeft||e.body.scrollLeft}}function k(){if(b.length){var e=0,f=a.map(b,function(a){var b=a.data.selector,c=a.$element;return b?c.find(b):c});for(c=c||i(),d=d||j();e<b.length;e++)if(a.contains(g,f[e][0])){var h=a(f[e]),k={height:h[0].offsetHeight,width:h[0].offsetWidth},l=h.offset(),m=h.data("inview");if(!d||!c)return;l.top+k.height>d.top&&l.top<d.top+c.height&&l.left+k.width>d.left&&l.left<d.left+c.width?m||h.data("inview",!0).trigger("inview",[!0]):m&&h.data("inview",!1).trigger("inview",[!1])}}}var c,d,h,b=[],e=document,f=window,g=e.documentElement;a.event.special.inview={add:function(c){b.push({data:c,$element:a(this),element:this}),!h&&b.length&&(h=setInterval(k,250))},remove:function(a){for(var c=0;c<b.length;c++){var d=b[c];if(d.element===this&&d.data.guid===a.guid){b.splice(c,1);break}}b.length||(clearInterval(h),h=null)}},a(f).on("scroll resize scrollstop",function(){c=d=null}),!g.addEventListener&&g.attachEvent&&g.attachEvent("onfocusin",function(){d=null})});
