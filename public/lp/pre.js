'use strict';

(function() {
  function activateDeferredStyles() {
    document.querySelectorAll('link[rel="stylesheet"][data-pre-media]').forEach(function(link) {
      link.media = link.getAttribute('data-pre-media') || 'all';
      link.removeAttribute('data-pre-media');
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', activateDeferredStyles, { once: true });
  } else {
    activateDeferredStyles();
  }
})();

document.addEventListener('click', function(event) {
  var trigger = event.target.closest('[data-pre-click]');
  if (!trigger) return;
  var name = trigger.getAttribute('data-pre-click');
  var handler = window[name];
  if (typeof handler !== 'function') return;
  var args = [];
  var rawArgs = trigger.getAttribute('data-pre-args');
  if (rawArgs) {
    try { args = JSON.parse(rawArgs); } catch (_) { args = []; }
  }
  if (trigger.getAttribute('data-pre-pass-this') === 'true') args.unshift(trigger);
  handler.apply(window, args);
});

document.addEventListener('DOMContentLoaded', function() {
  var carousels = document.querySelectorAll('.prex-image-carousel-wrapper');
  if (!carousels.length) return;

  carousels.forEach(function(root) {
    var track = root.querySelector('.prex-image-carousel');
    var slides = Array.prototype.slice.call(root.querySelectorAll('.swiper-slide'));
    if (!track || slides.length < 2 || root.dataset.preCarouselReady === '1') return;

    var prev = root.querySelector('.prex-swiper-button-prev');
    var next = root.querySelector('.prex-swiper-button-next');
    var pagination = root.querySelector('.swiper-pagination');
    var index = 0;
    var perView = 1;
    var maxIndex = slides.length - 1;
    var startX = 0;
    var deltaX = 0;

    root.dataset.preCarouselReady = '1';
    root.classList.add('swiper-initialized', 'swiper-horizontal');

    function getSlidesPerView() {
      var raw = getComputedStyle(root).getPropertyValue('--prex-image-carousel-slides-to-show');
      var value = parseFloat(raw);
      if (!isFinite(value) || value < 1) value = 1;
      return Math.min(slides.length, Math.max(1, Math.round(value)));
    }

    function renderBullets() {
      if (!pagination || pagination.dataset.preCarouselReady === '1') return;
      pagination.dataset.preCarouselReady = '1';
      pagination.classList.add('swiper-pagination-bullets', 'swiper-pagination-horizontal', 'swiper-pagination-clickable');
      slides.forEach(function(_, bulletIndex) {
        var bullet = document.createElement('button');
        bullet.type = 'button';
        bullet.className = 'swiper-pagination-bullet';
        bullet.setAttribute('aria-label', (bulletIndex + 1) + '枚目へ移動');
        bullet.addEventListener('click', function(event) {
          event.preventDefault();
          event.stopPropagation();
          goTo(bulletIndex);
        });
        pagination.appendChild(bullet);
      });
    }

    function update() {
      perView = getSlidesPerView();
      maxIndex = Math.max(0, slides.length - perView);
      index = Math.max(0, Math.min(index, maxIndex));

      var basis = 100 / perView;
      slides.forEach(function(slide, slideIndex) {
        slide.style.flexBasis = basis + '%';
        slide.style.maxWidth = basis + '%';
        slide.classList.toggle('swiper-slide-active', slideIndex === index);
        slide.classList.toggle('swiper-slide-prev', slideIndex === index - 1);
        slide.classList.toggle('swiper-slide-next', slideIndex === index + 1);
        slide.setAttribute('aria-hidden', slideIndex < index || slideIndex >= index + perView ? 'true' : 'false');
      });

      track.style.transform = 'translate3d(' + (-index * basis) + '%, 0, 0)';

      if (prev) {
        prev.classList.toggle('swiper-button-disabled', index === 0);
        prev.setAttribute('aria-disabled', index === 0 ? 'true' : 'false');
      }
      if (next) {
        next.classList.toggle('swiper-button-disabled', index === maxIndex);
        next.setAttribute('aria-disabled', index === maxIndex ? 'true' : 'false');
      }
      if (pagination) {
        Array.prototype.forEach.call(pagination.children, function(bullet, bulletIndex) {
          bullet.classList.toggle('swiper-pagination-bullet-active', bulletIndex === index);
          bullet.setAttribute('aria-current', bulletIndex === index ? 'true' : 'false');
        });
      }
    }

    function goTo(nextIndex) {
      index = Math.max(0, Math.min(nextIndex, maxIndex));
      update();
    }

    if (prev) {
      prev.setAttribute('role', 'button');
      prev.setAttribute('tabindex', '0');
      prev.setAttribute('aria-label', '前の画像へ');
      prev.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        goTo(index - 1);
      });
    }
    if (next) {
      next.setAttribute('role', 'button');
      next.setAttribute('tabindex', '0');
      next.setAttribute('aria-label', '次の画像へ');
      next.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        goTo(index + 1);
      });
    }
    root.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goTo(index - 1);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        goTo(index + 1);
      }
    });
    root.addEventListener('touchstart', function(event) {
      if (!event.touches || event.touches.length !== 1) return;
      startX = event.touches[0].clientX;
      deltaX = 0;
    }, {passive: true});
    root.addEventListener('touchmove', function(event) {
      if (!event.touches || event.touches.length !== 1) return;
      deltaX = event.touches[0].clientX - startX;
    }, {passive: true});
    root.addEventListener('touchend', function() {
      if (Math.abs(deltaX) > 40) goTo(index + (deltaX < 0 ? 1 : -1));
      startX = 0;
      deltaX = 0;
    });

    renderBullets();
    update();
    window.addEventListener('resize', update, {passive: true});
  });
});

(function(){window.dataLayer=window.dataLayer||[];function add(src){var s=document.createElement('script');s.async=true;s.src=src;document.head.appendChild(s)}function loadPreThirdParty(){add('https://r.moshimo.com/af/r/maftag.js');add('https://www.rentracks.jp/js/itp/rt.track.js?t='+Date.now())}var run=function(){('requestIdleCallback'in window)?requestIdleCallback(loadPreThirdParty,{timeout:3000}):setTimeout(loadPreThirdParty,1200)};window.addEventListener('load',run,{once:true})})();



(function(){function jstDate(offset){var d=new Date();var jst=new Date(d.toLocaleString("en-US",{timeZone:"Asia/Tokyo"}));jst.setDate(jst.getDate()+offset);return jst;}var y=jstDate(-1);var seed=y.getFullYear()*10000+(y.getMonth()+1)*100+y.getDate();var count=52+((seed*17)%35);document.querySelectorAll("#mo-yesterday-count,.mo-yesterday-count").forEach(function(el){el.textContent=String(count);});})();

var GAS_URL='https://script.google.com/macros/s/AKfycbzFK2HDxL3BwTfK2DBR8flrCIll2lr5ZyOB1W9Vy5s6V5EcAIhNc_plwDu-lFMCU__1fg/exec';var THANKS_URL='/thanks';var SOURCE='GEN【AI HACK】CP5万円';var LP_TYPE='gen';var ROUTE_ID='gen_ai_hack_cp5';

const ENTRY='fv';const DAY_NAMES=['日','月','火','水','木','金','土'];let csStep=1,csSelectedStart='',csSelectedLabel='',csSelectedDateStr='',csCurrentDay='today',csAllSlots=[];window.dataLayer=window.dataLayer||[];function csJstTodayStr(){return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());}
function csAddDaysJst(ymd,n){var p=ymd.split('-').map(Number);var d=new Date(Date.UTC(p[0],p[1]-1,p[2])+n*86400000);return d.getUTCFullYear()+'-'+String(d.getUTCMonth()+1).padStart(2,'0')+'-'+String(d.getUTCDate()).padStart(2,'0');}
function csJstDow(ymd){var p=ymd.split('-').map(Number);return new Date(Date.UTC(p[0],p[1]-1,p[2])).getUTCDay();}
function csFmtLabel(ymd){var p=ymd.split('-').map(Number);return p[1]+'/'+p[2]+'('+DAY_NAMES[csJstDow(ymd)]+')';}
function csInit(){var today=csJstTodayStr();var tomorrow=csAddDaysJst(today,1);document.getElementById('csTodayLabel').textContent=csFmtLabel(today);document.getElementById('csTomorrowLabel').textContent=csFmtLabel(tomorrow);csFetchSlots();}
async function csFetchSlots(){try{const res=await fetch(GAS_URL+'?action=slots',{cache:'no-store'});const text=await res.text();let result;try{result=JSON.parse(text);}catch{csShowNoSlots('枠の取得に失敗しました');return;}
if(!result.success||!result.slots||result.slots.length===0){csShowNoSlots('現在、予約可能な枠がありません');return;}
csAllSlots=result.slots;csRenderDay();}catch{csShowNoSlots('枠の取得に失敗しました');}}
function csSelectDay(day){csCurrentDay=day;document.getElementById('csBtnToday').classList.toggle('active',day==='today');document.getElementById('csBtnTomorrow').classList.toggle('active',day==='tomorrow');csSelectedStart='';csSelectedLabel='';csSelectedDateStr='';document.getElementById('csBtnStep1').disabled=true;csRenderDay();}
function csRenderDay(){var container=document.getElementById('csSlots'),nowMs=Date.now();var today=csJstTodayStr();var tds=csCurrentDay==='tomorrow'?csAddDaysJst(today,1):today;var daySlots=csAllSlots.filter(function(s){return typeof s.startedAt==='string'&&s.startedAt.substring(0,10)===tds;}).filter(function(s){return new Date(s.startedAt).getTime()>nowMs-30*60*1000;});if(daySlots.length===0){csShowNoSlots();return;}
container.innerHTML='';document.getElementById('csBtnStep1').style.display='';daySlots.forEach(function(slot){var timeStr=slot.startedAt.substring(11,16);var cap=slot.remainingCapacity||1;var badge='';if(cap<=1)badge='<div class="cs-cap cs-cap-last">△ あと'+cap+'席</div>';else if(cap<=2)badge='<div class="cs-cap cs-cap-few">△ あと'+cap+'席</div>';else badge='<div class="cs-cap cs-cap-ok">◎ 空きあり</div>';var div=document.createElement('div');div.className='cs-slot';div.dataset.start=slot.startedAt;div.dataset.date=tds;div.innerHTML='<div class="cs-slot-time">'+timeStr+'</div>'+badge;div.onclick=function(){document.querySelectorAll('.cs-slot').forEach(function(s){s.classList.remove('selected');});this.classList.add('selected');csSelectedStart=slot.startedAt;csSelectedDateStr=tds;var dayLabel=csCurrentDay==='today'?'今日':'明日';csSelectedLabel=dayLabel+' '+csFmtLabel(tds)+' '+timeStr+'〜';document.getElementById('csBtnStep1').disabled=false;dataLayer.push({event:'consultation_slot_click',slot_time:timeStr});var _btn=document.getElementById('csBtnStep1');var _rect=_btn.getBoundingClientRect();function getScrollParent(el){while(el&&el!==document.body){var st=window.getComputedStyle(el);if(/(auto|scroll)/.test(st.overflow+st.overflowY))return el;el=el.parentElement;}return window;}
var _scroller=getScrollParent(_btn);var _scrollTop=(_scroller===window?window.scrollY:_scroller.scrollTop);var _offset=(_scroller===window?_rect.top:_rect.top-_scroller.getBoundingClientRect().top);var _target=_scrollTop+_offset-window.innerHeight/2+_rect.height/2;if(_scroller===window){window.scrollTo({top:_target,behavior:'smooth'});}else{_scroller.scrollTo({top:_target,behavior:'smooth'});}};container.appendChild(div);});}
function csShowNoSlots(msg){document.getElementById('csSlots').innerHTML='<div class="cs-no-slots"><p>'+(msg||(csCurrentDay==='today'?'本日の空き枠はありません':'明日の空き枠はありません'))+'</p><small>「全ての日程を見る」から別の日程をお選びいただけます</small></div>';document.getElementById('csBtnStep1').style.display='none';}
function csGoTo(step){if(step>csStep&&csStep===2&&!csValidate())return;if(step===2)document.getElementById('csTimeBarText').textContent=csSelectedLabel;if(step===3)csPopulateConfirm();csStep=step;csUpdateUI();}
function csUpdateUI(){document.querySelectorAll('.cs-panel').forEach(function(p){p.classList.remove('active');});document.getElementById('csStep'+csStep).classList.add('active');document.querySelectorAll('.cs-step').forEach(function(d){var s=parseInt(d.dataset.s);d.classList.remove('active','done');if(s===csStep)d.classList.add('active');else if(s<csStep)d.classList.add('done');});document.querySelectorAll('.cs-conn').forEach(function(c,i){c.classList.remove('filled','half');if(i+1<csStep)c.classList.add('filled');else if(i+1===csStep)c.classList.add('half');});document.getElementById('csCounter').textContent=csStep+' / 3';document.querySelector('.cs-wrapper').scrollIntoView({behavior:'smooth',block:'start'});document.getElementById('csBtnStep1').style.display='';}
function csValidate(){var ok=true;var ln=document.getElementById('csLastName'),fn=document.getElementById('csFirstName');var em=document.getElementById('csEmail'),ph=document.getElementById('csPhone');[ln,fn,em,ph].forEach(function(f){f.classList.remove('error');});document.querySelectorAll('.cs-err').forEach(function(el){el.classList.remove('show');});if(!ln.value.trim()){ln.classList.add('error');document.getElementById('csErrName').classList.add('show');ok=false;}
if(!fn.value.trim()){fn.classList.add('error');document.getElementById('csErrName').classList.add('show');ok=false;}
if(!em.value.trim()||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value)){em.classList.add('error');document.getElementById('csErrEmail').classList.add('show');ok=false;}
if(!ph.value.trim()){ph.classList.add('error');document.getElementById('csErrPhone').classList.add('show');ok=false;}
return ok;}
function csPopulateConfirm(){var last=document.getElementById('csLastName').value.trim();var first=document.getElementById('csFirstName').value.trim();document.getElementById('csConfTime').textContent=csSelectedLabel;document.getElementById('csConfName').textContent=(last+' '+first).trim();document.getElementById('csConfEmail').textContent=document.getElementById('csEmail').value;document.getElementById('csConfPhone').textContent=document.getElementById('csPhone').value;}
async function csSubmit(){var btn=document.getElementById('csBtnSubmit');btn.classList.add('loading');btn.disabled=true;dataLayer.push({event:'consultation_form_submit'});try{var last=document.getElementById('csLastName').value.trim();var first=document.getElementById('csFirstName').value.trim();var params=new URLSearchParams({action:'book',started_at:csSelectedStart,displayed_date:csSelectedDateStr||(csSelectedStart?csSelectedStart.substring(0,10):''),last_name:last,first_name:first,name:(last+' '+first).trim(),email:document.getElementById('csEmail').value.trim(),phone:document.getElementById('csPhone').value.trim(),source:SOURCE,lp_type:LP_TYPE,entry:ENTRY,route_id:ROUTE_ID});var res=await fetch(GAS_URL+'?'+params,{cache:'no-store'});var text=await res.text();var result;try{result=JSON.parse(text);}catch{throw new Error('Invalid response');}
if(result.error){alert('エラー: '+result.error);}
else{dataLayer.push({event:'consultation_form_complete',booking_id:result.bookingId||''});window.location.href=THANKS_URL;}}catch{alert('通信エラーが発生しました。もう一度お試しください。');}
finally{btn.classList.remove('loading');btn.disabled=false;}}
document.querySelectorAll('.cs-input').forEach(function(input){input.addEventListener('input',function(){this.classList.remove('error');var err=this.closest('.cs-field').querySelector('.cs-err');if(err)err.classList.remove('show');});});document.getElementById('csLastName').addEventListener('focus',function(){dataLayer.push({event:'consultation_name_focus'});},{once:true});document.getElementById('csEmail').addEventListener('focus',function(){dataLayer.push({event:'consultation_email_focus'});},{once:true});csInit();

var GAS_URL='https://script.google.com/macros/s/AKfycbzFK2HDxL3BwTfK2DBR8flrCIll2lr5ZyOB1W9Vy5s6V5EcAIhNc_plwDu-lFMCU__1fg/exec';var THANKS_URL='/thanks';var SOURCE='GEN【AI HACK】CP5万円';var LP_TYPE='gen';var ROUTE_ID='gen_ai_hack_cp5';

const FC_ENTRY='calendar';const DAY_NAMES_FC=['日','月','火','水','木','金','土'];let fcStep=1,fcSelectedStart='',fcSelectedLabel='',fcSelectedDateStr='',fcAllSlots=[],fcInterest='';window.dataLayer=window.dataLayer||[];function fcJstTodayStr(){return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());}
function fcAddDaysJst(ymd,n){var p=ymd.split('-').map(Number);var d=new Date(Date.UTC(p[0],p[1]-1,p[2])+n*86400000);return d.getUTCFullYear()+'-'+String(d.getUTCMonth()+1).padStart(2,'0')+'-'+String(d.getUTCDate()).padStart(2,'0');}
function fcJstDow(ymd){var p=ymd.split('-').map(Number);return new Date(Date.UTC(p[0],p[1]-1,p[2])).getUTCDay();}
function fcInit(){fcFetchSlots();}
async function fcFetchSlots(){try{var res=await fetch(GAS_URL+'?action=slots',{cache:'no-store'});var text=await res.text();var result;try{result=JSON.parse(text);}catch{fcShowEmpty('枠の取得に失敗しました');return;}
if(!result.success||!result.slots||result.slots.length===0){fcShowEmpty('現在、予約可能な枠がありません');return;}
fcAllSlots=result.slots;fcRenderCalendar();}catch{fcShowEmpty('枠の取得に失敗しました');}}
function fcRenderCalendar(){var nowMs=Date.now();var todayJst=fcJstTodayStr();var dayStrs=[];for(var i=0;i<5;i++)dayStrs.push(fcAddDaysJst(todayJst,i));var fp=dayStrs[0].split('-'),lp=dayStrs[4].split('-');var title=fp[0]+'年'+Number(fp[1])+'月';if(fp[1]!==lp[1])title+=' - '+Number(lp[1])+'月';document.getElementById('fcCalTitle').textContent=title;var daySlotMaps=[],allHours={};dayStrs.forEach(function(dStr){var daySlots=fcAllSlots.filter(function(s){return typeof s.startedAt==='string'&&s.startedAt.substring(0,10)===dStr;}).filter(function(s){return new Date(s.startedAt).getTime()>nowMs-30*60*1000;});var hourMap={};daySlots.forEach(function(s){var h=parseInt(s.startedAt.substring(11,13),10);hourMap[h]=s;allHours[h]=true;});daySlotMaps.push({dStr:dStr,hourMap:hourMap});});var hours=Object.keys(allHours).map(Number).sort(function(a,b){return a-b;});if(hours.length===0){fcShowEmpty('この期間に空き枠がありません');return;}
var minH=hours[0],maxH=hours[hours.length-1];var html='<div class="fc-grid"><div class="fc-grid-corner"></div>';dayStrs.forEach(function(dStr){var day=Number(dStr.substring(8,10));var dow=DAY_NAMES_FC[fcJstDow(dStr)];var todayCls=(dStr===todayJst)?' today':'';html+='<div class="fc-dh'+todayCls+'"><div class="fc-dh-dow">'+dow+'</div><div class="fc-dh-date">'+day+'</div></div>';});for(var h=minH;h<=maxH;h++){html+='<div class="fc-tl">'+('0'+h).slice(-2)+':00</div>';for(var di=0;di<5;di++){var slot=daySlotMaps[di].hourMap[h];if(slot){var minStr=slot.startedAt.substring(14,16);var startStr=('0'+h).slice(-2)+':'+minStr;var cap=slot.remainingCapacity||1;var badge='';if(cap<=1)badge='<div class="fc-badge fc-badge-last"><span class="fc-badge-label">残り</span><span><span class="fc-badge-num">'+cap+'</span><span class="fc-badge-tail">枠</span></span></div>';else if(cap<=2)badge='<div class="fc-badge fc-badge-few"><span class="fc-badge-label">残り</span><span><span class="fc-badge-num">'+cap+'</span><span class="fc-badge-tail">枠</span></span></div>';else badge='<div class="fc-badge fc-badge-ok"><span class="fc-badge-icon">◯</span></div>';var dStr2=daySlotMaps[di].dStr;var day2=Number(dStr2.substring(8,10));var mon2=Number(dStr2.substring(5,7));var dow2=DAY_NAMES_FC[fcJstDow(dStr2)];var label=mon2+'/'+day2+'('+dow2+') '+startStr+'〜';html+='<div class="fc-cell"><div class="fc-slot has-slot" data-start="'+slot.startedAt+'" data-date="'+dStr2+'" data-label="'+label+'" data-pre-click="fcSelectSlot" data-pre-pass-this="true">'+badge+'</div></div>';}else{html+='<div class="fc-cell"><div class="fc-slot"><span class="fc-x">×</span></div></div>';}}}
html+='</div>';document.getElementById('fcCalContainer').innerHTML=html;}
function fcSelectSlot(el){document.querySelectorAll('.fc-slot').forEach(function(s){s.classList.remove('selected');});el.classList.add('selected');fcSelectedStart=el.dataset.start;fcSelectedLabel=el.dataset.label;fcSelectedDateStr=el.dataset.date;document.getElementById('fcBtnStep1').disabled=false;dataLayer.push({event:'fc_slot_click',slot_time:fcSelectedLabel});document.getElementById('fcBtnStep1').scrollIntoView({behavior:'smooth',block:'center'});}
function fcSelectInterest(el,value){document.querySelectorAll('.fc-radio-item').forEach(function(r){r.classList.remove('selected');});el.classList.add('selected');fcInterest=value;document.getElementById('fcErrInterest').classList.remove('show');}
function fcGoTo(step){if(step>fcStep&&fcStep===2&&!fcValidate())return;if(step===2)document.getElementById('fcTimeBarText').textContent=fcSelectedLabel;if(step===3)fcPopulateConfirm();fcStep=step;fcUpdateUI();}
function fcUpdateUI(){document.querySelectorAll('.fc-panel').forEach(function(p){p.classList.remove('active');});document.getElementById('fcStep'+fcStep).classList.add('active');document.querySelectorAll('.fc-wrapper .fc-step').forEach(function(d){var s=parseInt(d.dataset.s);d.classList.remove('active','done');if(s===fcStep)d.classList.add('active');else if(s<fcStep)d.classList.add('done');});document.querySelectorAll('.fc-wrapper .fc-conn').forEach(function(c,i){c.classList.remove('filled','half');if(i+1<fcStep)c.classList.add('filled');else if(i+1===fcStep)c.classList.add('half');});document.getElementById('fcCounter').textContent=fcStep+' / 3';document.querySelector('.fc-wrapper').scrollIntoView({behavior:'smooth',block:'start'});}
function fcValidate(){var ok=true;var ln=document.getElementById('fcLastName'),fn=document.getElementById('fcFirstName');var em=document.getElementById('fcEmail'),ph=document.getElementById('fcPhone');[ln,fn,em,ph].forEach(function(f){f.classList.remove('error');});document.querySelectorAll('.fc-err-msg').forEach(function(el){el.classList.remove('show');});if(!ln.value.trim()){ln.classList.add('error');document.getElementById('fcErrName').classList.add('show');ok=false;}
if(!fn.value.trim()){fn.classList.add('error');document.getElementById('fcErrName').classList.add('show');ok=false;}
if(!em.value.trim()||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value)){em.classList.add('error');document.getElementById('fcErrEmail').classList.add('show');ok=false;}
if(!ph.value.trim()){ph.classList.add('error');document.getElementById('fcErrPhone').classList.add('show');ok=false;}
if(!fcInterest){document.getElementById('fcErrInterest').classList.add('show');ok=false;}
return ok;}
function fcPopulateConfirm(){var last=document.getElementById('fcLastName').value.trim();var first=document.getElementById('fcFirstName').value.trim();document.getElementById('fcConfTime').textContent=fcSelectedLabel;document.getElementById('fcConfName').textContent=(last+' '+first).trim();document.getElementById('fcConfEmail').textContent=document.getElementById('fcEmail').value;document.getElementById('fcConfPhone').textContent=document.getElementById('fcPhone').value;document.getElementById('fcConfInterest').textContent=fcInterest;var c=document.getElementById('fcComment').value.trim();if(c){document.getElementById('fcConfComment').textContent=c;document.getElementById('fcConfCommentRow').style.display='';}
else{document.getElementById('fcConfCommentRow').style.display='none';}}
async function fcSubmit(){var btn=document.getElementById('fcBtnSubmit');btn.classList.add('loading');btn.disabled=true;dataLayer.push({event:'fc_form_submit'});try{var last=document.getElementById('fcLastName').value.trim();var first=document.getElementById('fcFirstName').value.trim();var params=new URLSearchParams({action:'book',started_at:fcSelectedStart,displayed_date:fcSelectedDateStr||(fcSelectedStart?fcSelectedStart.substring(0,10):''),last_name:last,first_name:first,name:(last+' '+first).trim(),email:document.getElementById('fcEmail').value.trim(),phone:document.getElementById('fcPhone').value.trim(),source:SOURCE,lp_type:LP_TYPE,entry:FC_ENTRY,route_id:ROUTE_ID,interest:fcInterest,comment:document.getElementById('fcComment').value.trim()});var res=await fetch(GAS_URL+'?'+params,{cache:'no-store'});var text=await res.text();var result;try{result=JSON.parse(text);}catch{throw new Error('Invalid');}
if(result.error){alert('エラー: '+result.error);}
else{dataLayer.push({event:'fc_form_complete',booking_id:result.bookingId||''});window.location.href=THANKS_URL;}}catch{alert('通信エラーが発生しました。もう一度お試しください。');}
finally{btn.classList.remove('loading');btn.disabled=false;}}
document.querySelectorAll('#fcStep2 .fc-input').forEach(function(input){input.addEventListener('input',function(){this.classList.remove('error');var err=this.closest('.fc-field').querySelector('.fc-err-msg');if(err)err.classList.remove('show');});});function fcShowEmpty(msg){document.getElementById('fcCalContainer').innerHTML='<div class="fc-loading-wrap"><div class="fc-loading-text" style="color:var(--fc-text-sub);font-size:14px;">'+(msg||'予約可能な枠がありません')+'</div></div>';document.getElementById('fcBtnStep1').style.display='none';}
fcInit();

(function(){var maxStep=1,submitted=false,slotSelected=false;function tk(type,data){data=data||{};data.route_id=ROUTE_ID;data.source=SOURCE;data.entry='calendar';data.ts=new Date().toISOString();var img=new Image();img.src=GAS_URL+'?action=track&type='+encodeURIComponent(type)+'&id='+encodeURIComponent(data.email||ROUTE_ID)+'&route_id='+encodeURIComponent(ROUTE_ID)+'&data='+encodeURIComponent(JSON.stringify(data));}
tk('page_view',{page:'calendar',lp:ROUTE_ID});var _origGoTo=window.fcGoTo;window.fcGoTo=function(step){var prev=window.fcStep;_origGoTo(step);if(window.fcStep!==prev&&window.fcStep>maxStep){maxStep=window.fcStep;tk('form_step',{step:window.fcStep,total:3,email:(document.getElementById('fcEmail').value||'').trim()});}};document.getElementById('fcCalContainer').addEventListener('click',function(e){var slot=e.target.closest('.fc-slot');if(slot&&!slotSelected){slotSelected=true;tk('form_step',{step:'slot_first_select',total:3});}});var _origSubmit=window.fcSubmit;window.fcSubmit=function(){submitted=true;tk('form_step',{step:'submit',total:3,email:(document.getElementById('fcEmail').value||'').trim(),interest:window.fcInterest||''});return _origSubmit();};function trackAbandon(){if(submitted||maxStep<1)return;tk('form_abandon',{step:window.fcStep,maxStep:maxStep,total:3,slotSelected:slotSelected,email:(document.getElementById('fcEmail').value||'').trim(),interest:window.fcInterest||''});}
window.addEventListener('beforeunload',trackAbandon);document.addEventListener('visibilitychange',function(){if(document.visibilityState==='hidden')trackAbandon();});})();

document.addEventListener('DOMContentLoaded',function(){const cta=document.querySelector('.fixed-footer-cta');if(!cta)return;const showAfter=800;const hideBottom=80;const footer=document.querySelector('.site-footer')||document.querySelector('footer');const isNearBottom=()=>{const scrollBottom=window.scrollY+window.innerHeight;const docHeight=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);return(docHeight-scrollBottom)<=hideBottom;};const updateByScroll=()=>{if(cta.dataset.footerHidden==="1"){cta.classList.remove('is-visible');return;}
if(isNearBottom()){cta.classList.remove('is-visible');return;}
if(window.scrollY>showAfter)cta.classList.add('is-visible');else cta.classList.remove('is-visible');};updateByScroll();window.addEventListener('scroll',updateByScroll,{passive:true});window.addEventListener('resize',updateByScroll);if(footer&&'IntersectionObserver'in window){const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){cta.classList.remove('is-visible');cta.dataset.footerHidden="1";}else{cta.dataset.footerHidden="0";updateByScroll();}});},{root:null,threshold:0.01});observer.observe(footer);}});
