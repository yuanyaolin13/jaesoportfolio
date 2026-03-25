import {useState} from 'react';
import test from "../assets/reze.png";
import jae from "../assets/jae.jpg";

function JaeSoImage() {
  const [flipping, setFlipping] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    if (flipping) return;
    setFlipping(true);
    setTimeout(() => setFlipped(f => !f), 200);
    setTimeout(() => setFlipping(false), 800);
  }

  return (
    <div className='w-full flex flex-row justify-center'>
      <div className="relative inline-block">
        <div className="absolute -right-12 sm:-right-6 flex items-center">
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
  );
}

export default JaeSoImage;