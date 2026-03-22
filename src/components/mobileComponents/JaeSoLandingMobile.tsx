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
            <div className='relative w-full'>
              <div className="absolute right-0 -top-4 md:top-12">
                <div className="absolute -right-20 -top-6">
                  <span className="text-sm font-medium">click me!</span>
                </div>
                <svg className="absolute -right-14 -top-4 rotate-12" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 55 10 C 70 20, 60 45, 40 40 C 20 35, 15 15, 30 20 C 42 24, 38 42, 15 55" stroke="black" strokeWidth="1" fill="none" strokeLinecap="round"/>
                  <polygon points="14,55 14,46 24,58" fill="black"/>
                </svg>
              </div>
              <img
                alt='jaesopic'
                src={flipped ? test : jae}
                onClick={handleClick}
                className={`ml-auto rounded-full w-28 h-28 md:h-64 md:w-64 object-cover border-2 border-black cursor-pointer ${flipping ? "coin-flip" : ""}`}
              />
            </div>
            <div className='flex flex-col w-full text-left h-full'>
              <span className='font-bold text-4xl md:text-7xl'>JAE SO</span>
              <span className='opacity-70 text-sm md:text-lg'>UI/UX & Graphic Design</span>
              <span className='opacity-70 text-sm md:text-lg'>sojae04 [at] gmail [dot] com</span>
            </div>
          </div>
        </div>
        <div ref={ref} className={`fade-up ${visible ? "visible" : ""} text-lg sm:text-2xl text-left flex flex-col space-y-4`} style={{ transitionDelay: "150ms" }}>
          <span>
            Hello! I'm a student at the University of North Carolina at Chapel Hill, double majoring in Information Sciences and Media and Journalism (Advertising and PR).
          </span>
          <span>
            I'm passionate about UI/UX design and graphic design, and have been doing art since I could walk. In my free time, I like to play video games, make matcha lattes, and play with my cat!
          </span>
        </div>
      </div>
      <div ref={ref} className={`fade-up ${visible ? "visible" : ""} mb-auto ml-auto`} style={{ transitionDelay: "300ms" }}>
        <a href={"/resume"}>
        <span className={'border border-black px-2 py-1 text-xl'}>
          RESUME &#8594;
        </span>
        </a>
      </div>
    </div>
  );
}

export default JaeSoLandingMobile;