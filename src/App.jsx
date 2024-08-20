import { Outlet } from "react-router-dom"
import Navber from "./Components/Navber"
import Footer from "./Components/Footer/Footer"

function App() {
  

  return (
    <div className="max-w-6xl mx-auto">
      <Navber></Navber>
     <Outlet></Outlet>
     <Footer></Footer>
      
    </div>
  )
}

export default App
