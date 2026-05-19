'use client'

import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react'

const V = 3

function useInfiniteCarousel<T>(rawSlides: T[], slidesPerView: number = V) {
  const spv = slidesPerView
  const N = rawSlides.length
  const extended = useMemo(
    () => [...rawSlides.slice(-spv), ...rawSlides, ...rawSlides.slice(0, spv)],
    [rawSlides, spv],
  )
  const [pos, setPos] = useState(spv)
  const [anim, setAnim] = useState(true)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const busyRef = useRef(false)

  const go = useCallback((delta: number) => {
    if (busyRef.current) return
    busyRef.current = true
    setAnim(true)
    setPos(prev => prev + delta)
  }, [])

  const goTo = useCallback((dotIdx: number) => {
    if (busyRef.current) return
    busyRef.current = true
    setAnim(true)
    setPos(spv + dotIdx)
  }, [spv])

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => go(1), 5000)
  }, [go])

  useEffect(() => {
    startTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [startTimer])

  useEffect(() => {
    if (!anim) {
      const id = setTimeout(() => {
        setAnim(true)
        busyRef.current = false
      }, 20)
      return () => clearTimeout(id)
    }
    const id = setTimeout(() => {
      setPos(prev => {
        if (prev >= N + spv) {
          setAnim(false)
          return prev - N
        }
        if (prev < spv) {
          setAnim(false)
          return prev + N
        }
        busyRef.current = false
        return prev
      })
    }, 420)
    return () => clearTimeout(id)
  }, [pos, anim, N, spv])

  const dotIdx = ((pos - spv) % N + N) % N
  const slideWidthPct = 100 / spv
  const trackStyle = {
    transform: `translateX(calc(-${pos} * ${slideWidthPct.toFixed(4)}%))`,
    transition: anim ? 'transform 0.4s ease' : 'none',
  }

  return { extended, dotIdx, N, trackStyle, go, goTo, startTimer }
}

const slides = [
  '/bytech/assets/images/アートボード-–-19.png',
  '/bytech/assets/images/アートボード-–-20.png',
  '/bytech/assets/images/アートボード-–-22.png',
  '/bytech/assets/images/アートボード-–-21.png',
  '/bytech/assets/images/アートボード-–-24.png',
  '/bytech/assets/images/アートボード-–-25.png',
  '/bytech/assets/images/アートボード-–-23.png',
]

const r3Slides = [
  { src: '/bytech/assets/images/グループ-19545-1.webp', alt: 'バイテックAIメンター07_田中省吾' },
  { src: '/bytech/assets/images/グループ-19539-1.webp', alt: 'バイテックAIメンター02_池田義国' },
  { src: '/bytech/assets/images/グループ-19542-1.webp', alt: 'バイテックAIメンター05_後藤暁子' },
  { src: '/bytech/assets/images/グループ-19538-1.webp', alt: 'バイテックAIメンター01_野口侑渡' },
  { src: '/bytech/assets/images/グループ-19541-1.webp', alt: 'バイテックAIメンター04_椿明人' },
  { src: '/bytech/assets/images/グループ-19540-1.webp', alt: 'バイテックAIメンター03_木村竜太郎' },
  { src: '/bytech/assets/images/グループ-19543-1.webp', alt: 'バイテックAIメンター06_那須太陽' },
]

const r5Slides = [
  { src: '/bytech/assets/images/b-create2_1_11zon.webp', alt: 'b-create' },
  { src: '/bytech/assets/images/b-carrer_2_2_11zon.webp', alt: 'b-carrer' },
  { src: '/bytech/assets/images/b-biz1_3_11zon.webp', alt: 'b-biz1' },
  { src: '/bytech/assets/images/b-biz1-–-2_4.webp', alt: 'b-biz2' },
  { src: '/bytech/assets/images/b-biz1-–-1_5.webp', alt: 'b-biz3' },
]

function useIsMobile() {
  return useSyncExternalStore(
    (callback) => {
      window.addEventListener('resize', callback)
      return () => window.removeEventListener('resize', callback)
    },
    () => window.innerWidth <= 767,
    () => false,
  )
}

export function R2Carousel() {
  const isSp = useIsMobile()
  const spv = isSp ? 1 : V
  const { extended, dotIdx, N, trackStyle, go, goTo, startTimer } = useInfiniteCarousel(slides, spv)

  return (
    <div className="r2-sub__carousel">
      <button className="r2-sub__btn r2-sub__btn--prev" aria-label="前へ" onClick={() => { go(-1); startTimer() }}>
        <svg viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L2 8l6 7" stroke="#FFD464" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
      </button>
      <div className="r2-sub__viewport">
        <div className="r2-sub__slides" style={trackStyle}>
          {(extended as string[]).map((src, i) => (
            <div className="r2-sub__slide" key={i}>
              <img src={src} alt="実践課題" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      <button className="r2-sub__btn r2-sub__btn--next" aria-label="次へ" onClick={() => { go(1); startTimer() }}>
        <svg viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg"><path d="M2 1l6 7-6 7" stroke="#FFD464" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
      </button>
      <div className="r2-sub__dots">
        {Array.from({ length: N }).map((_, i) => (
          <button key={i} className={`r2-sub__dot${i === dotIdx ? ' r2-sub__dot--active' : ''}`} aria-label={`スライド${i + 1}`} onClick={() => { goTo(i); startTimer() }} />
        ))}
      </div>
    </div>
  )
}

export function R3Carousel() {
  const isSp = useIsMobile()
  const spv = isSp ? 1 : V
  const { extended, dotIdx, N, trackStyle, go, goTo, startTimer } = useInfiniteCarousel(r3Slides, spv)

  return (
    <div className="r3-sub__carousel">
      <button className="r3-sub__btn r3-sub__btn--prev" aria-label="前へ" onClick={() => { go(-1); startTimer() }}>
        <svg viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L2 8l6 7" stroke="#FFD464" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
      </button>
      <div className="r3-sub__viewport">
        <div className="r3-sub__slides" style={trackStyle}>
          {(extended as typeof r3Slides).map((slide, i) => (
            <div className="r3-sub__slide" key={i}>
              <img src={slide.src} alt={slide.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      <button className="r3-sub__btn r3-sub__btn--next" aria-label="次へ" onClick={() => { go(1); startTimer() }}>
        <svg viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg"><path d="M2 1l6 7-6 7" stroke="#FFD464" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
      </button>
      <div className="r3-sub__dots">
        {Array.from({ length: N }).map((_, i) => (
          <button key={i} className={`r3-sub__dot${i === dotIdx ? ' r3-sub__dot--active' : ''}`} aria-label={`スライド${i + 1}`} onClick={() => { goTo(i); startTimer() }} />
        ))}
      </div>
    </div>
  )
}

export function R5Carousel() {
  const isSp = useIsMobile()
  const spv = isSp ? 1 : V
  const { extended, dotIdx, N, trackStyle, go, goTo, startTimer } = useInfiniteCarousel(r5Slides, spv)

  return (
    <div className="r5-carousel">
      <button className="r5-carousel__btn r5-carousel__btn--prev" aria-label="前へ" onClick={() => { go(-1); startTimer() }}>
        <svg viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L2 8l6 7" stroke="#FFD464" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
      </button>
      <div className="r5-carousel__viewport">
        <div className="r5-carousel__track" style={trackStyle}>
          {(extended as typeof r5Slides).map((slide, i) => (
            <div className="r5-carousel__slide" key={i}>
              <img src={slide.src} alt={slide.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      <button className="r5-carousel__btn r5-carousel__btn--next" aria-label="次へ" onClick={() => { go(1); startTimer() }}>
        <svg viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg"><path d="M2 1l6 7-6 7" stroke="#FFD464" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
      </button>
      <div className="r5-carousel__dots">
        {Array.from({ length: N }).map((_, i) => (
          <button key={i} className={`r5-carousel__dot${i === dotIdx ? ' r5-carousel__dot--active' : ''}`} aria-label={`スライド${i + 1}`} onClick={() => { goTo(i); startTimer() }} />
        ))}
      </div>
    </div>
  )
}
