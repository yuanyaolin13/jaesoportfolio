import linkedin from "../assets/linkedin-logo-svgrepo-com.svg";

function Footer() {
  return (
    <div className="flex flex-col justify-center mt-auto w-full pb-8">
      <hr className="h-px mx-8 md:mx-0 my-4 md:my-0 bg-slate-600 border-0"/>
      <div className="flex flex-row justify-center mt-auto w-full items-center px-8 pt-2">
        <a href={'/'} className={'dark-link'}>
          <span className="text-4xl font-extrabold">
          JS
          </span>
        </a>
        <div className='sm:text-lg text-left flex flex-row justify-center ml-auto'>
          <a href={'https://www.linkedin.com/in/jae-so/'}>
            <img src={linkedin} alt={'linkedin link'} className={'w-8 h-8 px-1'}/>
          </a>
          <span className={'m-auto text-xl'}>|</span>
          <span className={'px-1 m-auto text-sm'}>sojae04 [at] gmail [dot] com</span>
        </div>
      </div>
      <span className='text-xs font-light opacity-80'>
        © {new Date().getFullYear()} Jae So
      </span>
    </div>
  );
}

export default Footer;