
import homeVid from './assets/Homepage.mp4'

function Destinations(){

    return(


   <div className="videos" >
        <video autoPlay muted loop>
            <source src={homeVid} type="video/mp4"></source>
        </video>
    </div>
    );
}

export default Destinations