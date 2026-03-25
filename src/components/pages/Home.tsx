import JaeSoLandingMobile from "../mobileComponents/JaeSoLandingMobile.tsx";
import JaeSoInformationMobile from "../mobileComponents/JaeSoInformationMobile.tsx";
import {useIsMobile} from "../hooks/useIsMobile.ts";


function Home() {
  const isMobile = useIsMobile();

  return(
    <div className={'flex flex-col w-full items-center justify-center'}>
      {
        isMobile ?
          <JaeSoLandingMobile /> :
          <></>
      }
      <JaeSoInformationMobile />
    </div>
  );

}

export default Home;