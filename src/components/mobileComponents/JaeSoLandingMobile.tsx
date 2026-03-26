import { useScrollFadeIn } from "../hooks/useScrollFadeIn.ts";
import JaeSoImage from "../JaeSoImage.tsx";

function JaeSoLandingMobile() {
  const { ref, visible } = useScrollFadeIn();

  return (
    <div className={'min-h-dvh flex flex-col'}>
      <div className={'flex flex-col w-full items-center space-y-6 p-2 relative my-auto'}>
        <div ref={ref} className={`fade-up ${visible ? "visible" : ""} w-full`}>
          <div className='flex flex-row items-center space-x-12 w-full'>
            <JaeSoImage />
            <div className='flex flex-col w-full text-left h-full'>
              <span className='font-bold text-4xl sm:text-7xl'>JAE SO</span>
              <span className='sm:text-xl opacity-60'>UI/UX & Graphic Design</span>
            </div>
          </div>
        </div>
        <div ref={ref} className={`fade-up ${visible ? "visible" : ""} sm:text-xl text-left flex flex-col space-y-4`} style={{ transitionDelay: "150ms" }}>
          <span>
            Hello! I'm a student at the University of North Carolina at Chapel Hill, double majoring in Information Sciences and Media and Journalism (Advertising and PR). Professionally, I am a year-round intern at SAS in the Learning Design and Development team!
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