function MobileHeader() {
  return (
    <div className={'flex flex-row'}>
      <a href={"/"} className={'dark-link'}>
        <span className={'border border-black px-2 py-1 text-xl'}>
          &larr; BACK
        </span>
      </a>
      <span className={'ml-auto text-3xl font-extrabold text-right'}>
      JS
      </span>
    </div>

);
}

export default MobileHeader;