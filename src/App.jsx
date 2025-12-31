import Header from "../src/components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom";
import './app.css'
function App() {

  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
