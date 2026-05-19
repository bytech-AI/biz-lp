/* eslint-disable */
// Extracted from app/bytech/page.tsx inline <Script> blocks.
// Keep this file dependency-free; it runs after Next hydration starts.

var fadeinEls = document.querySelectorAll('.fadein');
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(el) {
    if (el.isIntersecting) {
      el.target.classList.add('is-visible');
      observer.unobserve(el.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
fadeinEls.forEach(function(el) { observer.observe(el); });

document.querySelectorAll('.curriculum__tab').forEach(function(tab) {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.curriculum__tab').forEach(function(t) { t.classList.remove('is-active'); });
    tab.classList.add('is-active');
    document.querySelectorAll('.curriculum__panel').forEach(function(p) { p.classList.remove('is-active'); });
    document.getElementById('panel-' + tab.dataset.panel).classList.add('is-active');
  });
});

document.querySelectorAll('.faq__item').forEach(function(item) {
  item.querySelector('.faq__item__q').addEventListener('click', function() {
    var isOpen = item.classList.contains('is-open');
    document.querySelectorAll('.faq__item').forEach(function(i) { i.classList.remove('is-open'); });
    if (!isOpen) item.classList.add('is-open');
  });
});

(function() {
  var cta = document.getElementById('fixedFooterCta');
  if (!cta) return;
  var showAfter = 800;
  var footer = document.querySelector('.footer');
  var updateByScroll = function() {
    if (cta.dataset.footerHidden === '1') { cta.classList.remove('is-visible'); return; }
    if (window.scrollY > showAfter) cta.classList.add('is-visible');
    else cta.classList.remove('is-visible');
  };
  updateByScroll();
  window.addEventListener('scroll', updateByScroll, { passive: true });
  if (footer && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) { cta.classList.remove('is-visible'); cta.dataset.footerHidden = '1'; }
        else { cta.dataset.footerHidden = '0'; updateByScroll(); }
      });
    }, { threshold: 0.01 });
    observer.observe(footer);
  }
})();

document.querySelectorAll('a[href^="#"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
    var href = a.getAttribute('href');
    if (href === '#') return;
    var target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
  });
});

(function() {
  const GAS_URL    = 'https://script.google.com/macros/s/AKfycbzFK2HDxL3BwTfK2DBR8flrCIll2lr5ZyOB1W9Vy5s6V5EcAIhNc_plwDu-lFMCU__1fg/exec';
  const THANKS_URL = 'https://generative-ai.bytech.jp/thanks-1/';
  const SOURCE     = 'GEN【オーガニック/指名広告】CP2万円';
  const LP_TYPE    = 'gen';
  const ENTRY      = 'fv';
  const ROUTE_ID   = 'gen_organic_cp2';

  let csStep = 1, csSelectedStart = '', csSelectedLabel = '', csCurrentDay = 'today', csAllSlots = [];
  window.dataLayer = window.dataLayer || [];
  const DAY_NAMES = ['日','月','火','水','木','金','土'];

  function csInit() {
    const now = new Date(), tom = new Date(now); tom.setDate(now.getDate() + 1);
    const todayEl = document.getElementById('csTodayLabel');
    const tomorrowEl = document.getElementById('csTomorrowLabel');
    if (todayEl) todayEl.textContent = (now.getMonth()+1)+'/'+now.getDate()+'('+DAY_NAMES[now.getDay()]+')';
    if (tomorrowEl) tomorrowEl.textContent = (tom.getMonth()+1)+'/'+tom.getDate()+'('+DAY_NAMES[tom.getDay()]+')';
    csFetchSlots();
  }

  async function csFetchSlots() {
    try {
      const res = await fetch(GAS_URL + '?action=slots', { cache: 'no-store' });
      const text = await res.text();
      let result; try { result = JSON.parse(text); } catch(e) { csShowNoSlots('枠の取得に失敗しました'); return; }
      if (!result.success || !result.slots || result.slots.length === 0) { csShowNoSlots('現在、予約可能な枠がありません'); return; }
      csAllSlots = result.slots;
      csRenderDay();
    } catch(e) { csShowNoSlots('枠の取得に失敗しました'); }
  }

  window.csSelectDay = function(day) {
    csCurrentDay = day;
    const todayBtn = document.getElementById('csBtnToday');
    const tomorrowBtn = document.getElementById('csBtnTomorrow');
    if (todayBtn) todayBtn.classList.toggle('active', day === 'today');
    if (tomorrowBtn) tomorrowBtn.classList.toggle('active', day === 'tomorrow');
    csSelectedStart = ''; csSelectedLabel = '';
    const stepBtn = document.getElementById('csBtnStep1');
    if (stepBtn) stepBtn.disabled = true;
    csRenderDay();
  };

  function csRenderDay() {
    const container = document.getElementById('csSlots');
    if (!container) return;
    const now = new Date(), target = new Date(now);
    if (csCurrentDay === 'tomorrow') target.setDate(now.getDate() + 1);
    const tds = target.toLocaleDateString('ja-JP', { timeZone: 'Asia/Tokyo', year: 'numeric', month: '2-digit', day: '2-digit' });
    const daySlots = csAllSlots.filter(function(s) { const sd = new Date(s.startedAt); return sd.toLocaleDateString('ja-JP', { timeZone: 'Asia/Tokyo', year: 'numeric', month: '2-digit', day: '2-digit' }) === tds; });
    const futureSlots = daySlots.filter(function(s) { return new Date(s.startedAt) > new Date(now.getTime() - 30 * 60 * 1000); });
    if (futureSlots.length === 0) { csShowNoSlots(); return; }
    container.innerHTML = '';
    const stepBtn = document.getElementById('csBtnStep1');
    if (stepBtn) stepBtn.style.display = '';
    futureSlots.forEach(function(slot) {
      const d = new Date(slot.startedAt), timeStr = d.toLocaleTimeString('ja-JP', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit' });
      const cap = slot.remainingCapacity || 1;
      let badge = '';
      if (cap <= 1) badge = '<div class="cs-cap cs-cap-last">△ あと'+cap+'席</div>';
      else if (cap <= 2) badge = '<div class="cs-cap cs-cap-few">△ あと'+cap+'席</div>';
      else badge = '<div class="cs-cap cs-cap-ok">◎ 空きあり</div>';
      const div = document.createElement('div'); div.className = 'cs-slot'; div.dataset.start = slot.startedAt;
      div.innerHTML = '<div class="cs-slot-time">'+timeStr+'</div>'+badge;
      div.onclick = function() {
        document.querySelectorAll('.cs-slot').forEach(function(s) { s.classList.remove('selected'); });
        this.classList.add('selected'); csSelectedStart = slot.startedAt;
        const dayLabel = csCurrentDay === 'today' ? '今日' : '明日';
        csSelectedLabel = dayLabel+' '+(target.getMonth()+1)+'/'+target.getDate()+'('+DAY_NAMES[target.getDay()]+') '+timeStr+'〜';
        if (stepBtn) stepBtn.disabled = false;
      };
      container.appendChild(div);
    });
  }

  function csShowNoSlots(msg) {
    const container = document.getElementById('csSlots');
    if (container) container.innerHTML = '<div class="cs-no-slots"><p>'+(msg||(csCurrentDay==='today'?'本日の空き枠はありません':'明日の空き枠はありません'))+'</p><small>「全ての日程を見る」から別の日程をお選びいただけます</small></div>';
    const stepBtn = document.getElementById('csBtnStep1');
    if (stepBtn) stepBtn.style.display = 'none';
  }

  window.csGoTo = function(step) {
    if (step > csStep && csStep === 2 && !csValidate()) return;
    if (step === 2) { const el = document.getElementById('csTimeBarText'); if (el) el.textContent = csSelectedLabel; }
    if (step === 3) csPopulateConfirm();
    csStep = step; csUpdateUI();
  };

  function csUpdateUI() {
    document.querySelectorAll('.cs-panel').forEach(function(p) { p.classList.remove('active'); });
    const panel = document.getElementById('csStep'+csStep);
    if (panel) panel.classList.add('active');
    document.querySelectorAll('.cs-step').forEach(function(d) {
      const s = parseInt(d.dataset.s);
      d.classList.remove('active','done');
      if (s === csStep) d.classList.add('active');
      else if (s < csStep) d.classList.add('done');
    });
    const conns = document.querySelectorAll('.cs-conn');
    conns.forEach(function(c, i) { c.classList.remove('filled','half'); if (i+1 < csStep) c.classList.add('filled'); else if (i+1 === csStep) c.classList.add('half'); });
    const counter = document.getElementById('csCounter');
    if (counter) counter.textContent = csStep+' / 3';
    const wrapper = document.querySelector('.cs-wrapper');
    if (wrapper) wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const stepBtn = document.getElementById('csBtnStep1');
    if (stepBtn) stepBtn.style.display = '';
  }

  function csValidate() {
    let ok = true;
    const n = document.getElementById('csName'), e = document.getElementById('csEmail'), p = document.getElementById('csPhone');
    [n,e,p].forEach(function(f) { if (f) f.classList.remove('error'); });
    document.querySelectorAll('.cs-err').forEach(function(el) { el.classList.remove('show'); });
    if (!n || !n.value.trim()) { if (n) n.classList.add('error'); const err = document.getElementById('csErrName'); if (err) err.classList.add('show'); ok = false; }
    if (!e || !e.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value)) { if (e) e.classList.add('error'); const err = document.getElementById('csErrEmail'); if (err) err.classList.add('show'); ok = false; }
    if (!p || !p.value.trim()) { if (p) p.classList.add('error'); const err = document.getElementById('csErrPhone'); if (err) err.classList.add('show'); ok = false; }
    return ok;
  }

  function csPopulateConfirm() {
    const confTime = document.getElementById('csConfTime'); if (confTime) confTime.textContent = csSelectedLabel;
    const confName = document.getElementById('csConfName'); if (confName) confName.textContent = (document.getElementById('csName') || {value:''}).value;
    const confEmail = document.getElementById('csConfEmail'); if (confEmail) confEmail.textContent = (document.getElementById('csEmail') || {value:''}).value;
    const confPhone = document.getElementById('csConfPhone'); if (confPhone) confPhone.textContent = (document.getElementById('csPhone') || {value:''}).value;
  }

  window.csSubmit = async function() {
    const btn = document.getElementById('csBtnSubmit'); if (!btn) return;
    btn.classList.add('loading'); btn.disabled = true;
    try {
      const nameVal = (document.getElementById('csName') || {value:''}).value.trim();
      const emailVal = (document.getElementById('csEmail') || {value:''}).value.trim();
      const phoneVal = (document.getElementById('csPhone') || {value:''}).value.trim();
      const params = new URLSearchParams({ action:'book', started_at:csSelectedStart, name:nameVal, email:emailVal, phone:phoneVal, source:SOURCE, lp_type:LP_TYPE, entry:ENTRY, route_id:ROUTE_ID });
      const res = await fetch(GAS_URL+'?'+params, { cache:'no-store' });
      const text = await res.text();
      let result; try { result = JSON.parse(text); } catch(e) { throw new Error('Invalid response'); }
      if (result.error) { alert('エラー: '+result.error); } else { window.location.href = THANKS_URL; }
    } catch(e) { alert('通信エラーが発生しました。もう一度お試しください。'); }
    finally { btn.classList.remove('loading'); btn.disabled = false; }
  };

  document.querySelectorAll('.cs-input').forEach(function(input) {
    input.addEventListener('input', function() {
      this.classList.remove('error');
      const err = this.parentElement.querySelector('.cs-err');
      if (err) err.classList.remove('show');
    });
  });

  // Bind navigation buttons directly (avoids React synthetic event timing issues)
  var btnToday = document.getElementById('csBtnToday');
  var btnTomorrow = document.getElementById('csBtnTomorrow');
  var btnStep1 = document.getElementById('csBtnStep1');
  var btnStep2Back = document.getElementById('csBtnStep2Back');
  var btnStep2Next = document.getElementById('csBtnStep2Next');
  var btnStep3Back = document.getElementById('csBtnStep3Back');
  var btnSubmit = document.getElementById('csBtnSubmit');
  if (btnToday) btnToday.addEventListener('click', function() { window.csSelectDay('today'); });
  if (btnTomorrow) btnTomorrow.addEventListener('click', function() { window.csSelectDay('tomorrow'); });
  if (btnStep1) btnStep1.addEventListener('click', function() { window.csGoTo(2); });
  if (btnStep2Back) btnStep2Back.addEventListener('click', function() { window.csGoTo(1); });
  if (btnStep2Next) btnStep2Next.addEventListener('click', function() { window.csGoTo(3); });
  if (btnStep3Back) btnStep3Back.addEventListener('click', function() { window.csGoTo(2); });
  if (btnSubmit) btnSubmit.addEventListener('click', function() { window.csSubmit(); });

  if (document.getElementById('csSlots')) csInit();
})();

(function() {
  var btn = document.getElementById('headerHamburger');
  var drawer = document.getElementById('headerNavDrawer');
  if (!btn || !drawer) return;
  btn.addEventListener('click', function() {
    var isOpen = drawer.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    drawer.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  });
  // サブメニュートグル
  drawer.querySelectorAll('.header__nav-drawer__toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function() {
      toggle.closest('.header__nav-drawer__item').classList.toggle('is-open');
    });
  });
  // ドロワー内リンクをクリックしたら閉じる
  drawer.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function() {
      drawer.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
    });
  });
})();

(function() {
  var track = document.getElementById('skillsTrack');
  var dotsWrap = document.getElementById('skillsDots');
  if (!track || !dotsWrap) return;

  var V = 2; /* 同時表示枚数 */
  var origSlides = Array.prototype.slice.call(track.querySelectorAll('.skills-carousel__slide'));
  var N = origSlides.length;
  var dots = Array.prototype.slice.call(dotsWrap.querySelectorAll('.skills-carousel__dot'));

  /* クローン：末尾V枚を先頭に、先頭V枚を末尾に追加 */
  var tailClones = origSlides.slice(-V).map(function(s) { return s.cloneNode(true); });
  for (var i = tailClones.length - 1; i >= 0; i--) {
    track.insertBefore(tailClones[i], track.firstChild);
  }
  origSlides.slice(0, V).forEach(function(s) { track.appendChild(s.cloneNode(true)); });

  /* pos=V が最初の本物スライド */
  var pos = V;
  var busy = false;
  var timer = null;

  function setPos(p, animated) {
    track.style.transition = animated ? 'transform 0.4s ease' : 'none';
    var slideW = track.children[0].offsetWidth + 20;
    track.style.transform = 'translateX(' + (-p * slideW) + 'px)';
  }

  function updateDots(p) {
    var dotIdx = ((p - V) % N + N) % N;
    dots.forEach(function(d, i) {
      d.classList.toggle('is-active', i === dotIdx);
    });
  }

  setPos(pos, false);
  updateDots(pos);

  function go(delta) {
    if (busy) return;
    busy = true;
    pos += delta;
    setPos(pos, true);
    updateDots(pos);
  }

  track.addEventListener('transitionend', function() {
    if (pos >= N + V) { pos -= N; setPos(pos, false); }
    if (pos < V)      { pos += N; setPos(pos, false); }
    setTimeout(function() { busy = false; }, 20);
  });

  function startTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(function() { go(1); }, 5000);
  }

  var carousel = track.closest('.skills-carousel');
  if (carousel) {
    var prevBtn = carousel.querySelector('.skills-carousel__btn--prev');
    var nextBtn = carousel.querySelector('.skills-carousel__btn--next');
    if (prevBtn) prevBtn.addEventListener('click', function() { go(-1); startTimer(); });
    if (nextBtn) nextBtn.addEventListener('click', function() { go(1);  startTimer(); });
  }

  dots.forEach(function(dot, i) {
    dot.addEventListener('click', function() {
      if (busy) return;
      busy = true;
      pos = V + i;
      setPos(pos, true);
      updateDots(pos);
      startTimer();
    });
  });

  startTimer();
})();

// ===== Voices Carousel (infinite loop) =====
(function() {
  var carousel = document.getElementById('voicesCarousel');
  if (!carousel) return;
  var wrap = carousel.closest('.voices__carousel-wrap');
  var prevBtn = wrap ? wrap.querySelector('.voices__btn--prev') : null;
  var nextBtn = wrap ? wrap.querySelector('.voices__btn--next') : null;
  var dots = document.querySelectorAll('#voicesDots .voices__dot');

  // Clone all original items and prepend/append for seamless loop
  var origItems = Array.prototype.slice.call(carousel.querySelectorAll('.voices__item'));
  var total = origItems.length;
  origItems.forEach(function(item) {
    var clone = item.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    carousel.appendChild(clone);
  });
  origItems.forEach(function(item) {
    var clone = item.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    carousel.insertBefore(clone, carousel.firstChild);
  });

  function getItemWidth() {
    var el = carousel.querySelector('.voices__item');
    return el ? el.offsetWidth + 15 : 0;
  }

  function getVisibleCount() {
    if (window.innerWidth <= 767) return 1;
    if (window.innerWidth <= 1024) return 3;
    return 4;
  }

  // Start at the first real item (after the prepended clones)
  var iw = getItemWidth();
  carousel.scrollLeft = iw * total;

  var isScrolling = false;

  function scrollTo(pos) {
    isScrolling = true;
    carousel.scrollTo({ left: pos, behavior: 'smooth' });
  }

  function onScrollEnd() {
    var iw2 = getItemWidth();
    var start = iw2 * total;
    var end = iw2 * total * 2;
    if (carousel.scrollLeft < start) {
      carousel.scrollLeft = carousel.scrollLeft + iw2 * total;
    } else if (carousel.scrollLeft >= end) {
      carousel.scrollLeft = carousel.scrollLeft - iw2 * total;
    }
    isScrolling = false;
    updateDots();
  }

  var scrollEndTimer;
  carousel.addEventListener('scroll', function() {
    clearTimeout(scrollEndTimer);
    scrollEndTimer = setTimeout(onScrollEnd, 120);
    updateDots();
  }, { passive: true });

  function updateDots() {
    var iw2 = getItemWidth();
    if (!iw2) return;
    var offset = carousel.scrollLeft - iw2 * total;
    var idx = Math.round(offset / iw2) % total;
    if (idx < 0) idx += total;
    dots.forEach(function(d, i) {
      d.classList.toggle('active', i === idx);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      carousel.scrollBy({ left: -getItemWidth(), behavior: 'smooth' });
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      carousel.scrollBy({ left: getItemWidth(), behavior: 'smooth' });
    });
  }

  dots.forEach(function(dot, i) {
    dot.addEventListener('click', function() {
      var iw2 = getItemWidth();
      carousel.scrollTo({ left: iw2 * total + iw2 * i, behavior: 'smooth' });
    });
  });

  // Auto-scroll
  var autoTimer;
  function startAuto() {
    autoTimer = setInterval(function() {
      carousel.scrollBy({ left: getItemWidth(), behavior: 'smooth' });
    }, 5000);
  }
  startAuto();
  carousel.addEventListener('mouseenter', function() { clearInterval(autoTimer); });
  carousel.addEventListener('mouseleave', function() { startAuto(); });
})();

// ===== Voice Card Carousel (infinite loop) =====
(function() {
  var track = document.getElementById('voiceTrack');
  var prevBtn = document.getElementById('voiceCardPrev');
  var nextBtn = document.getElementById('voiceCardNext');
  if (!track) return;

  var origSlides = Array.prototype.slice.call(track.querySelectorAll('.voice-card'));
  var N = origSlides.length;
  var GAP = 15;

  // visible count by viewport
  function visibleCount() {
    return window.innerWidth <= 767 ? 1 : window.innerWidth <= 1024 ? 3 : 4;
  }
  var V = visibleCount();

  // prepend clones of last V slides
  var tailClones = origSlides.slice(-V).map(function(s) { return s.cloneNode(true); });
  for (var i = tailClones.length - 1; i >= 0; i--) {
    track.insertBefore(tailClones[i], track.firstChild);
  }
  // append clones of first V slides
  origSlides.slice(0, V).forEach(function(s) { track.appendChild(s.cloneNode(true)); });

  var pos = V; // index of first real slide
  var busy = false;
  var timer = null;

  // pagination dots
  var pagination = document.getElementById('voiceCarouselPagination');
  var dots = pagination ? Array.prototype.slice.call(pagination.querySelectorAll('.voice-carousel__dot')) : [];

  function updateDots() {
    var realIdx = ((pos - V) % N + N) % N;
    dots.forEach(function(d, i) {
      d.classList.toggle('is-active', i === realIdx);
    });
  }

  function step() {
    var card = track.children[0];
    return card.offsetWidth + GAP;
  }

  function setPos(p, animated) {
    track.style.transition = animated ? 'transform 0.4s ease' : 'none';
    track.style.transform = 'translateX(' + (-p * step()) + 'px)';
  }

  setPos(pos, false);
  updateDots();

  track.addEventListener('transitionend', function() {
    if (pos >= V + N) { pos -= N; setPos(pos, false); }
    if (pos < V)      { pos += N; setPos(pos, false); }
    updateDots();
    setTimeout(function() { busy = false; }, 20);
  });

  function go(delta) {
    if (busy) return; busy = true;
    pos += delta; setPos(pos, true);
  }

  dots.forEach(function(dot, i) {
    dot.addEventListener('click', function() {
      var realIdx = ((pos - V) % N + N) % N;
      var delta = i - realIdx;
      if (delta === 0) return;
      // take the shortest path for wrap-around
      if (delta > N / 2) delta -= N;
      if (delta < -N / 2) delta += N;
      if (busy) return; busy = true;
      pos += delta; setPos(pos, true);
      startTimer();
    });
  });

  function startTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(function() { go(1); }, 5000);
  }

  if (prevBtn) prevBtn.addEventListener('click', function() { go(-1); startTimer(); });
  if (nextBtn) nextBtn.addEventListener('click', function() { go(1); startTimer(); });
  startTimer();
})();

// ===== Day Toggle (consultation form) =====
(function() {
  var btns = document.querySelectorAll('.cs-day-toggle__btn');
  btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      btns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
    });
  });
  var slots = document.querySelectorAll('.cs-time-slot:not([disabled])');
  slots.forEach(function(slot) {
    slot.addEventListener('click', function() {
      slots.forEach(function(s) { s.classList.remove('selected'); });
      slot.classList.add('selected');
    });
  });
})();

(function() {
  var DELAY_MS = 5000;
  var STORAGE_KEY = 'bytech_sp_popup_shown';
  if (window.innerWidth >= 768) return;
  if (sessionStorage.getItem(STORAGE_KEY)) return;
  setTimeout(function() {
    if (window.innerWidth >= 768) return;
    var overlay = document.getElementById('spPopupOverlay');
    var closeBtn = document.getElementById('spPopupClose');
    if (!overlay) return;
    overlay.classList.add('is-active');
    overlay.setAttribute('aria-hidden', 'false');
    sessionStorage.setItem(STORAGE_KEY, '1');
    function closePopup() {
      overlay.classList.remove('is-active');
      overlay.setAttribute('aria-hidden', 'true');
    }
    if (closeBtn) closeBtn.addEventListener('click', closePopup);
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) closePopup();
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closePopup();
    }, { once: true });
  }, DELAY_MS);
})();
