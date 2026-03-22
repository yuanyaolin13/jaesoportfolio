import './App.css'
import {Outlet} from "react-router-dom";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export default App;