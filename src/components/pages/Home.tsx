import JaeSoLandingMobile from "../mobileComponents/JaeSoLandingMobile.tsx";
import JaeSoInformationMobile from "../mobileComponents/JaeSoInformationMobile.tsx";
import {useIsMobile} from "../hooks/useIsMobile.ts";


function Home() {
  const isMobile = useIsMobile();

  return isMobile ?
    <div className={'flex flex-col w-full items-center justify-center'}>
      <JaeSoLandingMobile />
      <JaeSoInformationMobile />
    </div> :
    <div>Desktop HOME</div>
}

export default Home;