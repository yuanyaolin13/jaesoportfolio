import { useState } from "react";
import jae from '../../assets/jae.jpg';
import test from '../../assets/reze.png'
import { useScrollFadeIn } from "../hooks/useScrollFadeIn.ts"; // ← fixed typo

function JaeSoLandingMobile() {
  const [flipping, setFlipping] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const { ref, visible } = useScrollFadeIn();

  const handleClick = () => {
    if (flipping) return;
    setFlipping(true);
    setTimeout(() => setFlipped(f => !f), 200);
    setTimeout(() => setFlipping(false), 800);
  }

  return (
    <div className={'min-h-dvh flex flex-col'}>
      <div className={'flex flex-col w-full items-center space-y-6 p-2 relative my-auto'}>
        <div ref={ref} className={`fade-up ${visible ? "visible" : ""} w-full`}>
          <div className='flex flex-row items-center space-x-12 w-full'>
            <div className='w-full flex flex-row justify-center'>
              <div className="relative inline-block">
                <div className="absolute -top-6 -right-12 sm:-right-6 flex items-center">
                  <span className="text-sm absolute -top-2 -right-6">click me!</span>
                  <svg
                    className="rotate-12"
                    width="60"
                    height="60"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 55 10 C 70 20, 60 45, 40 40 C 20 35, 15 15, 30 20 C 42 24, 38 42, 15 55" stroke="black" strokeWidth="1" fill="none" strokeLinecap="round"/>
                    <polygon points="14,55 14,46 24,58" fill="black"/>
                  </svg>
                </div>
                <img
                  alt='jaesopic'
                  src={flipped ? test : jae}
                  onClick={handleClick}
                  className={`rounded-full w-28 h-28 sm:w-64 sm:h-64 object-cover border-2 border-black cursor-pointer ${flipping ? "coin-flip" : ""}`}
                />
              </div>
            </div>
            <div className='flex flex-col w-full text-left h-full'>
              <span className='font-bold text-4xl sm:text-7xl'>JAE SO</span>
              <span className='sm:text-xl opacity-60'>UI/UX & Graphic Design</span>
            </div>
          </div>
        </div>
        <div ref={ref} className={`fade-up ${visible ? "visible" : ""} sm:text-xl text-left flex flex-col space-y-4`} style={{ transitionDelay: "150ms" }}>
          <span>
            Hello! I'm a student at the University of North Carolina at Chapel Hill, double majoring in Information Sciences and Media and Journalism (Advertising and PR).
          </span>
          <span>
            I'm passionate about UI/UX design and graphic design, and have been doing art since I could walk. In my free time, I like to play video games, make matcha lattes, and play with my cat!
          </span>
          <span className='opacity-60 italic sm:text-xl'>Contact me! <br/> sojae04 [at] gmail [dot] com</span>
        </div>
      </div>
      <div ref={ref} className={`fade-up ${visible ? "visible" : ""} mb-auto ml-auto`} style={{ transitionDelay: "300ms" }}>
        <a href={"/resume"} className={'dark-link'}>
        <span className={'border border-black px-2 py-1 text-xl'}>
          RESUME &rarr;
        </span>
        </a>
      </div>
    </div>
  );
}

export default JaeSoLandingMobile;