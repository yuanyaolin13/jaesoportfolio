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
        {!isMobile && (
          <aside className={'w-1/3 flex-shrink-0 border-r border-slate-600 '}>
            <div className={'sticky top-0 h-screen'}>
              <DesktopLanding />
            </div>
          </aside>
        )}
        <div className={'min-w-0 p-8 md:p-16'}>
          <Outlet />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;