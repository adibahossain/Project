import { Link } from "react-router-dom";

function Header(){

  return(

    <header>
    <h1 className="page-title">Sain Destinations</h1>
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to= "/destinations">Destinations</Link></li>
    
                </ul>
            </nav>
    </header>
  );
}

export default Header