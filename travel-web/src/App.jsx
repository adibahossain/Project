import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import './Header.css';
import './index.css';
import Destinations from './Destinations'
import {Routes, Route} from "react-router-dom";
//import Map from './Map'
//import About from './About'
//<Routes path="/map" element={<Map />} />
//<Routes path="/about" element={<About/>} />

function App(){

  return(

  <>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
      </Routes>
    <Footer></Footer>

    </>
  );
}

export default App