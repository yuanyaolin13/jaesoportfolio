import {useState} from "react";
import jae from '../../assets/jae.jpg';
import linkedin from '../../assets/linkedin-logo-svgrepo-com.svg';
import test from '../../assets/reze.png'

function JaeSoLandingMobile() {

  const [flipping, setFlipping] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    if(flipping) return;

    setFlipping(true);
    setTimeout(() => setFlipped(f => !f), 200);
    setTimeout(() => setFlipping(false), 800);

  }
  return (
    <div className={'min-h-dvh flex flex-col'}>
      <div className={'flex flex-col w-full items-center space-y-8 p-4 relative mt-auto'}>
        <div className='flex flex-row items-center space-x-12'>
          <div className='relative'>
            <div className="absolute right-0">
              <div className="absolute -right-20 -top-6">
                <span className="text-sm font-medium">click me!</span>
              </div>
              <svg
                className="absolute -right-14 -top-4 rotate-12"
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 55 10 C 70 20, 60 45, 40 40 C 20 35, 15 15, 30 20 C 42 24, 38 42, 15 55"
                  stroke="black"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                />
                <polygon
                  points="14,55 14,46 24,58"
                  fill="black"
                />
              </svg>
            </div>
            <img
              alt='jaesopic'
              src={flipped ? test : jae}
              onClick={handleClick}
              className={`rounded-full w-36 h-36 md:h-48 md:w-48 object-cover border-2 border-black cursor-pointer
            ${flipping ? "coin-flip" : ""}`}
            />
          </div>
          <div className='font-bold text-5xl sm:text-7xl'>
            JAE <br/> SO
          </div>
        </div>
        <div className='text-lg text-left flex flex-col space-y-4'>
        <span>
          Hello! I’m a student at the University of North Carolina  at Chapel Hill, double majoring in Information Sciences and Media and Journalism (Advertising and PR).
        </span>
          <span>
          I’m passionate about UI/UX design and graphic design, and have been doing art since I could walk. In my free time, I like to play video games, make matcha lattes, and play with my cat!
        </span>

        </div>
        <div className='text-lg text-left flex flex-row justify-center'>
          <img src={linkedin} alt={'linkedin link'} className={'w-12 h-12 px-2'}/>
          <span className={'m-auto text-2xl'}>|</span>
          <span className={'px-2 m-auto font-medium'}>sojae04 [at] gmail [dot] com</span>
        </div>
      </div>
      <a href={"/"} className={'mt-auto ml-auto mb-16'}>
          <span className={'border border-black px-2 py-1 text-xl'}>
            RESUME &#8594;
          </span>
      </a>
    </div>
  );
}

export default JaeSoLandingMobile;