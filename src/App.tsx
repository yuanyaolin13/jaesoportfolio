import './App.css'
import MobileHero from "./components/mobileComponents/MobileHero.tsx";
import DesktopHero from "./components/desktopComponents/DesktopHero.tsx";

function App() {
  return (
    <>
     <div className='flex flex-col w-full items-center h-full'>
       <section className='block lg:hidden'>
         <MobileHero />
       </section>
       <section className='lg:block hidden'>
         <DesktopHero />
       </section>
     </div>
    </>
  )
}

export default App;