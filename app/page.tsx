"use client"

import { useEffect, useState, useRef } from "react"

export default function ChaosPage() {
  const [showFlash, setShowFlash] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Flash the inder-g.png every few seconds
    const flashInterval = setInterval(() => {
      setShowFlash(true)
      setTimeout(() => setShowFlash(false), 500)
    }, 3000)

    return () => clearInterval(flashInterval)
  }, [])

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 animate-gradient">
      {/* Background Audio */}
      <audio ref={audioRef}>
        <source
          src="https://storage.googleapis.com/random-mehkri/maazinderurvasighani.mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* Flashing Image Overlay */}
      {showFlash && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-pulse">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inder-g-lqn8R3iAVYOlRpyUjYKT3FkpvcUZeL.png"
            alt="Flash"
            className="max-w-2xl animate-spin-slow"
          />
        </div>
      )}

      <div className="fixed top-[8%] left-[12%] text-8xl animate-spin-slow z-30">😮‍💨</div>
      <div className="fixed top-[22%] right-[18%] text-9xl animate-bounce z-30">🇮🇱</div>
      <div className="fixed top-[45%] left-[25%] text-7xl animate-wiggle z-30">🤫</div>
      <div className="fixed bottom-[15%] right-[35%] text-8xl animate-float z-30">🫃🏿</div>
      <div className="fixed top-[60%] right-[8%] text-9xl animate-pulse z-30">🫦</div>
      <div className="fixed top-[35%] left-[70%] text-8xl animate-bounce rotate-45 z-30">😮‍💨</div>
      <div className="fixed bottom-[40%] left-[15%] text-7xl animate-spin-slow -rotate-90 z-30">🇮🇱</div>
      <div className="fixed top-[75%] left-[50%] text-9xl animate-wiggle z-30">🤫</div>
      <div className="fixed top-[12%] right-[45%] text-8xl animate-float rotate-180 z-30">🫃🏿</div>
      <div className="fixed bottom-[25%] right-[60%] text-7xl animate-pulse z-30">🫦</div>
      <div className="fixed top-[5%] left-[55%] text-7xl animate-bounce z-30">😮‍💨</div>
      <div className="fixed bottom-[35%] right-[90%] text-9xl animate-spin-slow rotate-[270deg] z-30">🇮🇱</div>
      <div className="fixed top-[68%] left-[78%] text-8xl animate-wiggle z-30">🤫</div>
      <div className="fixed bottom-[8%] left-[65%] text-7xl animate-float -rotate-[60deg] z-30">🫃🏿</div>
      <div className="fixed top-[42%] right-[50%] text-9xl animate-pulse z-30">🫦</div>

      {/* Floating Images */}
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inder-g-lqn8R3iAVYOlRpyUjYKT3FkpvcUZeL.png"
        alt="Floating 1"
        className="fixed top-10 left-10 w-32 animate-float opacity-70 rotate-12"
      />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/464682427_10224301205709233_1609121221462815095_n-1w0IIlRNH17W3vHCQF32tx8oAnIhqK.jpg"
        alt="Floating 2"
        className="fixed top-20 right-20 w-40 animate-bounce opacity-60 -rotate-12"
      />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inder-g-lqn8R3iAVYOlRpyUjYKT3FkpvcUZeL.png"
        alt="Floating 3"
        className="fixed bottom-10 left-1/4 w-36 animate-spin-slow opacity-50"
      />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/464682427_10224301205709233_1609121221462815095_n-1w0IIlRNH17W3vHCQF32tx8oAnIhqK.jpg"
        alt="Floating 4"
        className="fixed bottom-20 right-1/3 w-44 animate-wiggle opacity-70 rotate-45"
      />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inder-g-lqn8R3iAVYOlRpyUjYKT3FkpvcUZeL.png"
        alt="Floating 5"
        className="fixed top-1/2 left-1/2 w-48 animate-pulse opacity-40 -rotate-90"
      />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inder-g-lqn8R3iAVYOlRpyUjYKT3FkpvcUZeL.png"
        alt="Chaos 6"
        className="fixed top-[5%] left-[30%] w-28 animate-bounce opacity-80 rotate-[25deg]"
      />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/464682427_10224301205709233_1609121221462815095_n-1w0IIlRNH17W3vHCQF32tx8oAnIhqK.jpg"
        alt="Chaos 7"
        className="fixed top-[15%] right-[10%] w-36 animate-wiggle opacity-65 -rotate-[35deg]"
      />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inder-g-lqn8R3iAVYOlRpyUjYKT3FkpvcUZeL.png"
        alt="Chaos 8"
        className="fixed top-[25%] left-[5%] w-32 animate-spin-slow opacity-55 rotate-[120deg]"
      />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/464682427_10224301205709233_1609121221462815095_n-1w0IIlRNH17W3vHCQF32tx8oAnIhqK.jpg"
        alt="Chaos 9"
        className="fixed top-[35%] right-[25%] w-40 animate-float opacity-70 -rotate-[15deg]"
      />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inder-g-lqn8R3iAVYOlRpyUjYKT3FkpvcUZeL.png"
        alt="Chaos 10"
        className="fixed top-[45%] left-[15%] w-38 animate-pulse opacity-60 rotate-[75deg]"
      />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/464682427_10224301205709233_1609121221462815095_n-1w0IIlRNH17W3vHCQF32tx8oAnIhqK.jpg"
        alt="Chaos 11"
        className="fixed top-[55%] right-[5%] w-42 animate-bounce opacity-75 -rotate-[60deg]"
      />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inder-g-lqn8R3iAVYOlRpyUjYKT3FkpvcUZeL.png"
        alt="Chaos 12"
        className="fixed top-[65%] left-[40%] w-34 animate-wiggle opacity-50 rotate-[145deg]"
      />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/464682427_10224301205709233_1609121221462815095_n-1w0IIlRNH17W3vHCQF32tx8oAnIhqK.jpg"
        alt="Chaos 13"
        className="fixed top-[75%] right-[30%] w-36 animate-spin-slow opacity-65 -rotate-[90deg]"
      />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inder-g-lqn8R3iAVYOlRpyUjYKT3FkpvcUZeL.png"
        alt="Chaos 14"
        className="fixed top-[85%] left-[60%] w-30 animate-float opacity-70 rotate-[200deg]"
      />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inder-g-lqn8R3iAVYOlRpyUjYKT3FkpvcUZeL.png"
        alt="Chaos 15"
        className="fixed top-[10%] left-[50%] w-44 animate-pulse opacity-80 -rotate-[25deg]"
      />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/464682427_10224301205709233_1609121221462815095_n-1w0IIlRNH17W3vHCQF32tx8oAnIhqK.jpg"
        alt="Chaos 16"
        className="fixed top-[20%] right-[45%] w-38 animate-bounce opacity-55 rotate-[310deg]"
      />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inder-g-lqn8R3iAVYOlRpyUjYKT3FkpvcUZeL.png"
        alt="Chaos 17"
        className="fixed top-[40%] left-[75%] w-40 animate-wiggle opacity-60 -rotate-[50deg]"
      />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/464682427_10224301205709233_1609221221462815095_n-1w0IIlRNH17W3vHCQF32tx8oAnIhqK.jpg"
        alt="Chaos 1"
        className="fixed top-[30%] left-[80%] w-32 animate-spin-slow opacity-60 rotate-180"
      />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inder-g-lqn8R3iAVYOlRpyUjYKT3FkpvcUZeL.png"
        alt="Chaos 2"
        className="fixed bottom-[50%] right-[70%] w-40 animate-wiggle opacity-50 -rotate-45"
      />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inder-g-lqn8R3iAVYOlRpyUjYKT3FkpvcUZeL.png"
        alt="Extra 1"
        className="fixed top-[18%] left-[90%] w-26 animate-bounce opacity-85 rotate-[220deg]"
      />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/464682427_10224301205709233_1609221221462815095_n-1w0IIlRNH17W3vHCQF32tx8oAnIhqK.jpg"
        alt="Extra 2"
        className="fixed top-[38%] right-[90%] w-28 animate-wiggle opacity-70 -rotate-[95deg]"
      />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inder-g-lqn8R3iAVYOlRpyUjYKT3FkpvcUZeL.png"
        alt="Extra 3"
        className="fixed top-[58%] left-[3%] w-32 animate-spin-slow opacity-65 rotate-[135deg]"
      />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/464682427_10224301205709233_1609221221462815095_n-1w0IIlRNH17W3vHCQF32tx8oAnIhqK.jpg"
        alt="Extra 4"
        className="fixed top-[78%] right-[8%] w-35 animate-float opacity-75 -rotate-[180deg]"
      />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inder-g-lqn8R3iAVYOlRpyUjYKT3FkpvcUZeL.png"
        alt="Extra 5"
        className="fixed top-[88%] left-[35%] w-30 animate-pulse opacity-60 rotate-[270deg]"
      />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inder-g-lqn8R3iAVYOlRpyUjYKT3FkpvcUZeL.png"
        alt="Extra 6"
        className="fixed top-[3%] right-[35%] w-33 animate-bounce opacity-80 -rotate-[45deg]"
      />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inder-g-lqn8R3iAVYOlRpyUjYKT3FkpvcUZeL.png"
        alt="Extra 7"
        className="fixed top-[23%] left-[95%] w-27 animate-wiggle opacity-55 rotate-[315deg]"
      />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inder-g-lqn8R3iAVYOlRpyUjYKT3FkpvcUZeL.png"
        alt="Extra 8"
        className="fixed top-[43%] right-[2%] w-40 animate-spin-slow opacity-70 -rotate-[125deg]"
      />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inder-g-lqn8R3iAVYOlRpyUjYKT3FkpvcUZeL.png"
        alt="Extra 9"
        className="fixed top-[63%] left-[92%] w-29 animate-float opacity-65 rotate-[185deg]"
      />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inder-g-lqn8R3iAVYOlRpyUjYKT3FkpvcUZeL.png"
        alt="Extra 10"
        className="fixed top-[83%] right-[85%] w-37 animate-pulse opacity-75 -rotate-[235deg]"
      />

      {/* Marquee Texts */}
      <div className="marquee-container">
        <div className="marquee text-6xl font-bold text-yellow-300 animate-marquee whitespace-nowrap">
          MAAZINDER GHANI MAAZINDER GHANI MAAZINDER GHANI MAAZINDER GHANI MAAZINDER GHANI
        </div>
      </div>

      <div className="marquee-container-reverse mt-8">
        <div className="marquee-reverse text-5xl font-extrabold text-lime-400 animate-marquee-reverse whitespace-nowrap">
          ✨ MAAZINDER GHANI ✨ MAAZINDER GHANI ✨ MAAZINDER GHANI ✨
        </div>
      </div>

      {/* Spinning Text */}
      <div className="fixed top-1/4 left-1/4 animate-spin-slow">
        <h1 className="text-7xl font-black text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,1)]">MAAZINDER GHANI</h1>
      </div>

      {/* Bouncing Text */}
      <div className="fixed top-1/3 right-1/4 animate-bounce">
        <h2 className="text-6xl font-bold text-blue-400 drop-shadow-[0_0_15px_rgba(0,0,255,1)]">Maazinder Ghani</h2>
      </div>

      {/* Blinking Text */}
      <div className="fixed bottom-1/4 left-1/3 animate-blink">
        <h3 className="text-8xl font-black text-green-400 drop-shadow-[0_0_20px_rgba(0,255,0,1)]">MAAZINDER</h3>
      </div>

      {/* Wiggling Text */}
      <div className="fixed top-1/2 right-1/3 animate-wiggle">
        <p className="text-5xl font-bold text-orange-500 drop-shadow-[0_0_10px_rgba(255,165,0,1)]">GHANI</p>
      </div>

      {/* Vertical Text */}
      <div className="fixed left-10 top-1/4 animate-float">
        <div className="writing-mode-vertical text-4xl font-bold text-pink-400">MAAZINDER GHANI</div>
      </div>

      {/* Upside Down Text */}
      <div className="fixed right-10 bottom-1/3 rotate-180 animate-pulse">
        <h4 className="text-5xl font-black text-cyan-400 drop-shadow-[0_0_15px_rgba(0,255,255,1)]">Maazinder Ghani</h4>
      </div>

      {/* Diagonal Text */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 animate-spin-slow">
        <h5 className="text-6xl font-extrabold text-purple-400 drop-shadow-[0_0_20px_rgba(128,0,128,1)]">
          MAAZINDER GHANI
        </h5>
      </div>

      {/* More Chaos */}
      <div className="fixed top-10 left-1/2 animate-bounce">
        <span className="text-9xl font-black text-yellow-500 drop-shadow-[0_0_25px_rgba(255,255,0,1)] animate-pulse">
          M
        </span>
        <span className="text-8xl font-black text-red-500 drop-shadow-[0_0_25px_rgba(255,0,0,1)] animate-wiggle">
          A
        </span>
        <span className="text-7xl font-black text-blue-500 drop-shadow-[0_0_25px_rgba(0,0,255,1)] animate-spin-slow">
          A
        </span>
        <span className="text-9xl font-black text-green-500 drop-shadow-[0_0_25px_rgba(0,255,0,1)] animate-bounce">
          Z
        </span>
      </div>

      {/* Bottom Marquee */}
      <div className="fixed bottom-0 w-full marquee-container">
        <div className="marquee text-7xl font-black text-white animate-marquee whitespace-nowrap drop-shadow-[0_0_30px_rgba(255,255,255,1)]">
          🔥 MAAZINDER GHANI 🔥 MAAZINDER GHANI 🔥 MAAZINDER GHANI 🔥
        </div>
      </div>

      {/* Scattered Text */}
      <div className="fixed top-[15%] left-[60%] animate-float">
        <p className="text-3xl font-bold text-red-300 rotate-12">Maazinder Ghani</p>
      </div>
      <div className="fixed top-[70%] left-[20%] animate-wiggle">
        <p className="text-4xl font-black text-blue-300 -rotate-45">MAAZINDER GHANI</p>
      </div>
      <div className="fixed top-[40%] right-[15%] animate-bounce">
        <p className="text-5xl font-extrabold text-green-300 rotate-90">Maazinder</p>
      </div>
      <div className="fixed bottom-[40%] left-[70%] animate-pulse">
        <p className="text-6xl font-black text-yellow-300 -rotate-12">GHANI</p>
      </div>

      {/* Center Chaos */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="animate-spin-slow">
          <h1 className="text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 drop-shadow-[0_0_50px_rgba(255,255,255,1)] animate-pulse">
            MAAZINDER GHANI
          </h1>
        </div>
      </div>

      {/* App Store Badge */}
      <a
        href="https://www.linkedin.com/in/urvasi-graham-b-a-m-s-imh-e%C2%AE-1273b4190"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-50 pointer-events-auto animate-bounce hover:animate-spin-slow transition-all"
      >
        <div className="bg-black text-white px-6 py-4 rounded-xl border-4 border-white shadow-[0_0_30px_rgba(255,255,255,0.8)] hover:shadow-[0_0_50px_rgba(0,255,0,1)] transition-all">
          <div className="flex items-center gap-3">
            <div className="text-4xl animate-pulse">📱</div>
            <div>
              <div className="text-xs font-bold animate-blink">Download on the</div>
              <div className="text-2xl font-black animate-wiggle">App Store</div>
            </div>
          </div>
          <div className="text-center mt-2 text-sm font-bold text-yellow-400 animate-pulse">MAAZINDER GHANI</div>
        </div>
      </a>

      {/* Volume Warning in Center */}
      <div
        onClick={toggleAudio}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-auto cursor-pointer hover:scale-110 transition-transform"
      >
        <div className="flex flex-col items-center gap-4 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 p-8 rounded-3xl border-8 border-white shadow-[0_0_60px_rgba(255,0,0,1)] animate-pulse">
          <div className="text-9xl animate-wiggle">{isPlaying ? "🔊" : "🔇"}</div>
          <div className="text-6xl font-black text-white drop-shadow-[0_0_20px_rgba(0,0,0,1)] animate-bounce text-center">
            {isPlaying ? "PLAYING SAAR" : "CLICK TO PLAY SAAR"}
          </div>
          <div className="flex gap-2 animate-blink">
            <span className="text-5xl">🔊</span>
            <span className="text-5xl">🔊</span>
            <span className="text-5xl">🔊</span>
          </div>
        </div>
      </div>
    </div>
  )
}
