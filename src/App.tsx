import './App.css'
import {Outlet} from "react-router-dom";
import Footer from "./components/Footer.tsx";
import {useIsMobile} from "./components/hooks/useIsMobile.ts";
import DesktopLanding from "./components/desktopComponents/DesktopLanding.tsx";

function App() {
  const isMobile = useIsMobile();
  return (
    <>
      <div className={'flex flex-row min-h-screen'}>
        <div className={'flex-1 min-w-0 p-8'}>
          <Outlet />
        </div>

        {!isMobile && (
          <aside className={'w-1/3 flex-shrink-0 border-l border-black'}>
            <div className={'sticky top-0 h-screen'}>
              <DesktopLanding />
            </div>
          </aside>
        )}
      </div>

      <Footer />
    </>
  );
}

export default App;