// ------------------------------------------
//  ハンバーガーメニュー
// ------------------------------------------
document.querySelector('.drawer-icon').addEventListener('click', function () {
    const body = document.querySelector('body');
    const siteMenu = document.querySelector('.drawer-content');
    const drawerIcon = document.querySelector('.drawer-icon');

    if (!body.classList.contains('is-active')) {
        scrollsPos = window.scrollY;
    }
    body.style.top = `-${window.scrollY}px`;

    // クリックした時に is-active クラスを付与/削除
    drawerIcon.classList.toggle('is-active');
    siteMenu.classList.toggle('is-active');
    body.classList.toggle('is-active');

    window.scrollTo({ top: scrollsPos, behavior: "instant" });
});

document.querySelectorAll('.drawer-menu a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector('.drawer-icon').classList.remove('is-active');
        document.querySelector('.drawer-content')?.classList.remove('is-active'); // `.drawer-content` が存在する場合のみ処理
        document.querySelector('.drawer-menu').classList.remove('is-active');
        document.querySelector('body').classList.toggle('is-active');
    });
});



// ------------------------------------------
//  スライドショー top
// ------------------------------------------
window.addEventListener('load', function(){
    fadeWrap =document.getElementById('fadeWrap');
    let fadeCount = 1;
    const duration = 2000; // フェード時間 1sec = 1000,
    let interval = 1000;
    let removeClass;
    if (window.matchMedia('(max-width: 767px)').matches) {removeClass = 'pc';    }
    else{removeClass = 'sp';}
    if(fadeWrap !== null){
        for (var i = fadeWrap.children.length - 1; i >= 0; i--) {/* オブジェクトを逆順処理 */
            if(fadeWrap.children[i].classList.contains(removeClass)){
                fadeWrap.children[i].remove();
            }
        }
        fadeWrap.firstElementChild.classList.add('act-transition');
        fadeWrap.firstElementChild.style.opacity = '1';
        
        // 初回実行,完全表示時間分の遅延 
        // window.setTimeout(function(){
        //     switchFade();
        //     // リピート実行の登録 
        //     let count3 = window.setInterval(switchFade, interval + duration);
        // }, interval);
        window.setTimeout(function(){
          switchFade();
      }, interval);


        function switchFade(num){
            let prev;
            if(fadeCount == 0){prev = fadeWrap.childElementCount - 1;}
            else              {prev = fadeCount - 1;}
            // numがある場合はfadeCountをnumへ設定
            if(num != null){
                clearInterval(count3);
                count3 = window.setInterval(switchFade, interval);
                fadeCount = num;
            }
            // zIndex リセット
            for(let i = 0; i < fadeWrap.childElementCount; i++) {
                fadeWrap.children[i].style.zIndex = '0';
            }
            fadeWrap.children[fadeCount].style.zIndex = '20';
            fadeWrap.children[prev].style.zIndex = '10';
            
            // Get the element you want to animate
            const element = fadeWrap.children[fadeCount];
            // Set initial opacity& zIndex
            // element.style.zIndex = 10;            
            element.style.opacity = 0;
            const start = performance.now();
            function fadeIn(timestamp) {
                // Calculate how much time has passed
                const elapsed = timestamp - start;
                
                // Calculate the current opacity (progress is from 0 to 1)
                const progress = Math.min(elapsed / duration, 1);
                
                // Set the opacity of the element
                element.style.opacity = progress;
                // If the animation is not complete, request the next frame
                if (progress < 1) {
                    requestAnimationFrame(fadeIn);
                }else{/* ※1 */
                  for(let i = 0; i < fadeWrap.childElementCount; i++) {fadeWrap.children[i].style.removeProperty('opacity');}
                }
            }
            // Start the animation
            requestAnimationFrame(fadeIn);
            fadeWrap.children[fadeCount].classList.add('act-transition');
            removeTransition(prev);
                         ra(fadeWrap.children[prev],'opacity',duration,false);
            fadeCount++;
            if(fadeCount >= fadeWrap.childElementCount){
                fadeCount = 0;
            }
        } 
        // ./switchFade

        // 完全に表示されたら prev .act-transition 削除
        function removeTransition(prev){
            window.setTimeout(function(){
                fadeWrap.children[prev].classList.remove('act-transition');
            }, duration);
        }
    }
});

function ra(target,property,duration = 2000,dir = true){
    let startTime;
    function animate(timestamp) {
        if (!startTime) {startTime = timestamp;}
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        if(dir){target.style[property] = `${1*progress}`;}
        else{target.style[property] = `${1 - 1*progress}`;}
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    requestAnimationFrame(animate);
}

// ------------------------------------------
//  header float
// ------------------------------------------

window.addEventListener('scroll', function () {scrollPos();});
window.addEventListener('load', function(){scrollPos();});
let scrollPos_tar = document.querySelector('header');
let scrollPos_tar2 = document.querySelector('.header__content.fixed');/* class付与対象 */
function scrollPos(){
    if (0 > scrollPos_tar.getBoundingClientRect().top) {
        scrollPos_tar2.classList.add('act'); 
    }else{
        scrollPos_tar2.classList.remove('act');
    }
}

// ------------------------------------------
//  もっと見る
// ------------------------------------------
document.querySelectorAll(`.c-more`).forEach(tar => {
    tar.addEventListener('click', function(){
      document.querySelector(`[data-more-text="${this.dataset.morebtn}"]`).classList.add('act');
      this.remove();
    }) 
});
// ------------------------------------------
//  コピーボタン
// ------------------------------------------
document.querySelectorAll(`.c-copy-btn`).forEach(tar => {
    let timerID;
    tar.addEventListener("click", function() {      
      let text = this.dataset.copytext;
      navigator.clipboard.writeText(text)
      .then(() => {
        clearTimeout(timerID);
        tar.classList.add('act');
        timerID = window.setTimeout(function(){
            tar.classList.remove('act');
        }, 1000);
      });
    });
});

// ------------------------------------------
//  アコーディオン
// ------------------------------------------
jQuery(function($) {
  $('.faq__q').on('click', function() {
    const $item = $(this).closest('.faq__item'); // 親item
    const $icon = $item.find('.faq__icon');      // アイコン

    // 答えを開閉
    $item.find('.faq__a').slideToggle();

    // 親itemにクラス付与
    $item.toggleClass('is-open');

    // アイコンにクラス付与
    $icon.toggleClass('is-open');
  });
});


// ------------------------------------------
//  事例スライダ― top
// ------------------------------------------
const caseSwiper = new Swiper('.caseSwiper', {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    slidesPerView: 1.2, // コンテナ内に表示させるスライド数
    spaceBetween: 16, // スライド間の余白（px）

    breakpoints: { // ブレークポイント
        768: { // 画面幅768px以上で適用
            slidesPerView: 3.5,
            centeredSlides: true, 
            centeredSlidesBounds: true,
            spaceBetween: 24, //スライド感の余白
        },
    },
  pagination: {
    el: '.js-page3',
		clickable: true,
  },
 
  navigation: {
    nextEl: '.js-next3',
    prevEl: '.js-prev3',
  },

});
// ------------------------------------------
//  事例スライダ― 共通
// ------------------------------------------
const voiceSwiper = new Swiper('.voiceSwiper', {
    loop: true,
    slidesPerView: 1, // コンテナ内に表示させるスライド数
    spaceBetween: 16, // スライド間の余白（px）
    breakpoints: { // ブレークポイント
        768: { // 画面幅768px以上で適用
            slidesPerView: 3,
            centeredSlides: true, //スライダーの最初と最後に余白を追加せずスライドが真ん中に配置される
            centeredSlidesBounds: true, //アクティブなスライドを中央に配置
            spaceBetween: 24, //スライド感の余白
        },
    },
  pagination: {
    el: '.voice-pagination',
		clickable: true,
  },
 
  navigation: {
    nextEl: '.voice-button-next',
    prevEl: '.voice-button-prev',
  },
});

// ------------------------------------------
//  Valuesスライダ―
// ------------------------------------------
const valuesSwiper = new Swiper('.valuesSwiper', {
    loop: true,
    slidesPerView: 1.15, // コンテナ内に表示させるスライド数
    spaceBetween: 20, // スライド間の余白（px）
    breakpoints: { // ブレークポイント
        768: { // 画面幅768px以上で適用
            slidesPerView: 2.25,
            spaceBetween: 48 , //スライド感の余白
        },
    },
 
  pagination: {
    el: '.values-pagination',
		clickable: true,
  },
 
  navigation: {
    nextEl: '.values-button-next',
    prevEl: '.values-button-prev',
  },
});

// ------------------------------------------
//  Problemスライダ―
// ------------------------------------------
const problemSwiper = new Swiper('.problemSwiper', {
  loop: true,
	slidesPerView: 1.05, // コンテナ内に表示させるスライド数
  spaceBetween: 4, // スライド間の余白（px）
  breakpoints: { // ブレークポイント
      768: { // 画面幅768px以上で適用
        slidesPerView: 2.3,
        spaceBetween: 8, // スライド間の余白（px）
      },
  },
  pagination: {
    el: '.problem-pagination',
		clickable: true,
  },
  navigation: {
    nextEl: '.problem-button-next',
    prevEl: '.problem-button-prev',
  },
});

// ------------------------------------------
//  creatorsスライダ―  counseling
// ------------------------------------------
const creatorsSwiper = new Swiper('.creatorsSwiper1', {
  loop: true,
	slidesPerView: 1, // コンテナ内に表示させるスライド数
  spaceBetween: 16, // スライド間の余白（px）
  breakpoints: { // ブレークポイント
      768: { // 画面幅768px以上で適用
        slidesPerView: 3.2,
        spaceBetween: 20, // スライド間の余白（px）
      },
  },
  pagination: {
    el: '.js-page1',
		clickable: true,
  },
 
  navigation: {
    nextEl: '.js-next1',
    prevEl: '.js-prev1',
  },
});

// ------------------------------------------
//  creatorsスライダ―2  class
// ------------------------------------------
const creatorsSwiper2 = new Swiper('.creatorsSwiper2', {
  loop: true,
	slidesPerView: 1.2, // コンテナ内に表示させるスライド数
  spaceBetween: 16, // スライド間の余白（px）
  breakpoints: { // ブレークポイント
      768: { // 画面幅768px以上で適用
        slidesPerView: 3.3,
        spaceBetween: 20, // スライド間の余白（px）
      },
  },
  pagination: {
    el: '.js-page2',
		clickable: true,
  },
 
  navigation: {
    nextEl: '.js-next2',
    prevEl: '.js-prev2',
  },
});



// ------------------------------------------
//  scrollbar 
// ------------------------------------------
document.querySelectorAll(`.c-scroll-custom`).forEach(tar => {
  scrollbar_custom(tar);
});


function scrollbar_custom(target){
  // const target = document.getElementById('target');
  const track =  target.nextElementSibling;
  const thumb =  track.querySelector('.custom-thumb');

  const metrics = { /* オブジェクト作成 */
      viewWidth: 0,   // ビューポートの幅
      scrollWidth: 0, // スクロール可能なコンテンツを含めた幅
      scrollLeft: 0,  // 現在のスクロール位置（左からの距離）
      thumbWidth: 0,  // サムの幅
      maxThumbLeft: 0, // サムが移動可能な最大左位置
      maxScrollLeft: 0, // スクロール可能な領域の最大左位置
  };

  // スムーズな更新とDOM変更のバッチ処理のために requestAnimationFrame を使用
  let animationFrameId = null;

  function refreshMetrics() {
      metrics.viewWidth = target.clientWidth;
      metrics.scrollWidth = target.scrollWidth;
      metrics.scrollLeft = target.scrollLeft;

      metrics.maxScrollLeft = metrics.scrollWidth - metrics.viewWidth;
      metrics.maxThumbLeft = parseFloat(getComputedStyle(track).getPropertyValue('width')) - parseFloat(getComputedStyle(thumb).getPropertyValue('width'));
  }

  function updateThumbPosition() {
      if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(() => {
          metrics.scrollLeft = target.scrollLeft;
          const thumbLeft = metrics.maxScrollLeft > 0 ?
              (metrics.scrollLeft / metrics.maxScrollLeft) * metrics.maxThumbLeft :
              0;
          // 位置の変更には transform: translateX() を使用
          thumb.style.transform = `translateX(${thumbLeft}px)`;
          animationFrameId = null;
      });
  }

  // スクロール・リサイズに対応
  // 'scroll' イベントは縦横両方のスクロールで発火します
  target.addEventListener('scroll', updateThumbPosition);

  // resize イベントをデバウンスして、過度な呼び出しを防ぐ
  let resizeTimer;
  window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
          refreshMetrics();
          updateThumbPosition();
      }, 100); // 必要に応じてデバウンス時間を調整
  });



  // ドラッグ・タッチ対応
  let isDragging = false;
  let startX = 0; // Y座標ではなくX座標を使用
  let startScrollLeft = 0; // scrollTopではなくscrollLeftを使用

  const startDrag = (x) => {
      isDragging = true;
      startX = x;
      startScrollLeft = target.scrollLeft;
      document.body.style.userSelect = 'none';
  };

  const dragMove = (x) => {
      if (!isDragging) return;

      // ドラッグ中の更新にも requestAnimationFrame を使用
      if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
          const deltaX = x - startX; // Y方向の差ではなくX方向の差
          const scrollDelta = (deltaX / metrics.maxThumbLeft) * metrics.maxScrollLeft;
          // スクロールがコンテンツの境界を超えないようにクランプ
          target.scrollLeft = Math.max(0, Math.min(startScrollLeft + scrollDelta, metrics.maxScrollLeft));
          animationFrameId = null;
      });
  };

  const endDrag = () => {
      isDragging = false;
      document.body.style.userSelect = '';
      document.body.style.cursor = ''; // オプション：カーソルをリセット
      if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
      }
  };

  // マウスイベント
  thumb.addEventListener('mousedown', (e) => {
      e.preventDefault(); // ドラッグ開始時のテキスト選択を防止
      startDrag(e.clientX); // clientYではなくclientXを使用
  });
  window.addEventListener('mousemove', (e) => dragMove(e.clientX)); // clientYではなくclientXを使用
  window.addEventListener('mouseup', endDrag);

  // タッチイベント
  thumb.addEventListener('touchstart', (e) => {
      e.preventDefault(); // ネイティブスクロールと潜在的なコンテキストメニューを防止
      startDrag(e.touches[0].clientX); // clientYではなくclientXを使用
  }, {
      passive: false
  }); // デフォルトスクロールを防止するために passive: false が必要
  window.addEventListener('touchmove', (e) => {
      if (isDragging) {
          dragMove(e.touches[0].clientX); // clientYではなくclientXを使用
          e.preventDefault(); // スクロールを止める 画面遷移を防止
      }
  }, {
      passive: false
  });
  window.addEventListener('touchend', endDrag);

  // 初期化
  refreshMetrics();
  updateThumbPosition();
}


// ------------------------------------------
//  tab
// ------------------------------------------

document.querySelectorAll(`.c-tabs__button`).forEach(tar => {
    tar.addEventListener('click', function(e){
      e.preventDefault();

      document.querySelector('.c-tabs__button.current').classList.remove('current');
      tar.classList.add('current');
      document.querySelector('.c-tabs__content.current').classList.remove('current');
      document.querySelector(`.c-tabs__content[data-tab="${this.dataset.tabbtn}"]`).classList.add('current');
    }) 
});

// ------------------------------------------
//  archive more
// ------------------------------------------

document.querySelectorAll(`.filter-open`).forEach(tar => {
    if(document.querySelectorAll(`.search__list dt`).length <= 3){tar.style.display = 'none';}

    tar.addEventListener('click', function(e){      
      document.querySelectorAll(`.search__list dt,.search__list dd`).forEach(tar => {tar.style.display = 'flex';});
      this.remove();
    }) 
});



