
import { Outlet } from "react-router";
import { Footer } from "./components/Hero/styles";
import Navbar from "./components/Navbar";


const App = () => {

  return (
    <div>
      <Navbar/>
    <Outlet/>
    
     
    </div>
  );
};

export default App;