/*
 * home-carousels.js — R2 / R3 / R5 カルーセルの vanilla 実装。
 * 旧 app/bytech/components/carousels.tsx (React) の useInfiniteCarousel を忠実に移植。
 * 静的HTML化に伴い React ハイドレーションを排除するためのもの。
 *
 * 挙動: 無限ループ・5秒自動送り・前後ボタン・ドット。SP(<=767px)は1枚表示、PCは3枚表示。
 * スライド幅は CSS (flex: 0 0 33.333% / 100%) 駆動。JSは translateX(pos) のみ制御。
 * SSR時は spv=3 で描画されるため、両端の clone を3枚ずつ剥がして「実スライド」を得る。
 */
(function () {
  var SSR_SPV = 3;

  function initCarousel(root, cls) {
    var track = root.querySelector('.' + cls.track);
    if (!track) return;
    var allSlides = Array.prototype.slice.call(track.children);
    if (allSlides.length <= SSR_SPV * 2) return;
    var realHTML = allSlides
      .slice(SSR_SPV, allSlides.length - SSR_SPV)
      .map(function (el) { return el.outerHTML; });
    var N = realHTML.length;
    if (N < 1) return;

    var dots = Array.prototype.slice.call(root.querySelectorAll('.' + cls.dot));
    var prevBtn = root.querySelector('.' + cls.prev);
    var nextBtn = root.querySelector('.' + cls.next);

    var spv, pos, busy = false, timer = null, snapT = null, reT = null;

    function spvFor() { return window.innerWidth <= 767 ? 1 : SSR_SPV; }

    function render(animate) {
      var w = 100 / spv;
      track.style.transition = animate ? 'transform 0.4s ease' : 'none';
      track.style.transform = 'translateX(calc(-' + pos + ' * ' + w.toFixed(4) + '%))';
      var dotIdx = (((pos - spv) % N) + N) % N;
      for (var i = 0; i < dots.length; i++) {
        if (i === dotIdx) dots[i].classList.add(cls.dotActive);
        else dots[i].classList.remove(cls.dotActive);
      }
    }

    function buildTrack() {
      spv = spvFor();
      var head = realHTML.slice(realHTML.length - spv);
      var tail = realHTML.slice(0, spv);
      track.innerHTML = head.join('') + realHTML.join('') + tail.join('');
      pos = spv;
      render(false);
    }

    function go(delta) {
      if (busy) return;
      busy = true;
      pos += delta;
      render(true);
      clearTimeout(snapT);
      snapT = setTimeout(function () {
        if (pos >= N + spv) {
          pos -= N; render(false);
          clearTimeout(reT); reT = setTimeout(function () { busy = false; }, 20);
        } else if (pos < spv) {
          pos += N; render(false);
          clearTimeout(reT); reT = setTimeout(function () { busy = false; }, 20);
        } else {
          busy = false;
        }
      }, 420);
    }

    function goTo(i) {
      if (busy) return;
      busy = true;
      pos = spv + i;
      render(true);
      clearTimeout(snapT);
      snapT = setTimeout(function () { busy = false; }, 420);
    }

    function startTimer() {
      if (timer) clearInterval(timer);
      timer = setInterval(function () { go(1); }, 5000);
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { go(-1); startTimer(); });
    if (nextBtn) nextBtn.addEventListener('click', function () { go(1); startTimer(); });
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { goTo(i); startTimer(); });
    });

    var lastSpv = spvFor();
    var rzT = null;
    window.addEventListener('resize', function () {
      clearTimeout(rzT);
      rzT = setTimeout(function () {
        var ns = spvFor();
        if (ns !== lastSpv) {
          lastSpv = ns;
          buildTrack();
          startTimer();
        }
      }, 150);
    });

    buildTrack();
    startTimer();
  }

  function initAll() {
    var r2 = document.querySelector('.r2-sub__carousel');
    if (r2) initCarousel(r2, { track: 'r2-sub__slides', dot: 'r2-sub__dot', dotActive: 'r2-sub__dot--active', prev: 'r2-sub__btn--prev', next: 'r2-sub__btn--next' });
    var r3 = document.querySelector('.r3-sub__carousel');
    if (r3) initCarousel(r3, { track: 'r3-sub__slides', dot: 'r3-sub__dot', dotActive: 'r3-sub__dot--active', prev: 'r3-sub__btn--prev', next: 'r3-sub__btn--next' });
    var r5 = document.querySelector('.r5-carousel');
    if (r5) initCarousel(r5, { track: 'r5-carousel__track', dot: 'r5-carousel__dot', dotActive: 'r5-carousel__dot--active', prev: 'r5-carousel__btn--prev', next: 'r5-carousel__btn--next' });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
