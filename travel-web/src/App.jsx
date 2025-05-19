import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import './Header.css';
import './index.css';
import Destinations from './Destinations'
import {Routes, Route} from "react-router-dom";
import Maps from './Maps'
import About from './About'

function App(){

  return(

  <>

    <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    <Footer></Footer>

    </>
  );
}

export default App