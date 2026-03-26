import {useScrollFadeIn} from "../hooks/useScrollFadeIn.ts";
import JaeSoImage from "../JaeSoImage.tsx";

function DesktopLanding() {
  const { ref, visible } = useScrollFadeIn();

  return (
    <div className={'flex flex-col h-full p-8'}>
      <div className={'flex flex-col w-full items-center justify-center space-y-6 relative my-auto'}>
        <div ref={ref} className={`fade-up ${visible ? "visible" : ""} w-full`}>
          <div className='flex flex-col items-center justify-center space-x-12 w-full'>
            <JaeSoImage />
            <div className='flex flex-col w-full text-left h-full mt-4'>
              <span className='font-bold text-4xl sm:text-7xl'>JAE SO</span>
              <span className='sm:text-xl opacity-60'>UI/UX & Graphic Design</span>
            </div>
          </div>
        </div>
        <div ref={ref} className={`fade-up ${visible ? "visible" : ""} text-md text-left flex flex-col space-y-2`} style={{ transitionDelay: "150ms" }}>
          <span>
            Hello! I'm a student at the University of North Carolina at Chapel Hill, double majoring in Information Sciences and Media and Journalism (Advertising and PR). Professionally, I am a year-round intern at SAS in the Learning Design and Development team!
          </span>
          <span>
            I'm passionate about UI/UX design and graphic design, and have been doing art since I could walk. In my free time, I like to play video games, make matcha lattes, and play with my cat!
          </span>
        </div>
        <div ref={ref} className={`fade-up ${visible ? "visible" : ""} flex flex-row items-end justify-between mt-4 w-full`} style={{ transitionDelay: "300ms" }}>
          <span className='opacity-60 italic text-left text-sm'>Contact me! <br/> sojae04 [at] gmail [dot] com</span>
          <a href={"/resume"} className={'dark-link'}>
          <span className={'border border-black px-2 py-1 text-xl hover:text-[#242424] hover:bg-[#EDEBEB]'}>
            RESUME &rarr;
          </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DesktopLanding;