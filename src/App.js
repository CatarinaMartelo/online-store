
import { Outlet } from "react-router";
import Hero from "./components/Hero";
import { Footer } from "./components/Hero/styles";
import Navbar from "./components/Navbar";
import { Container } from "./components/Navbar/styles";


const App = () => {

  return (
    <div>
      <Navbar/>
    <Outlet/>
    
     
    </div>
  );
};

export default App;