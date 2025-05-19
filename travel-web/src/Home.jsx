
import thaiPic from './assets/thailand.jpeg'
import malayPic from './assets/malaysia.jpeg'
import japanPic from './assets/japan.jpg'
import homeVid from './assets/Homepage.mp4'
 
function Home(){

  return(
 
 <main>
            <div className="videos" >
                <video autoPlay muted loop>
                    <source src={homeVid} type="video/mp4"></source>
                </video>
            </div>
                
            <h1 className="recent">Recent Destinations</h1>

            <div className="pics">

                <div className="gallery">
                    <a target="_blank" href="thailand.jpeg">
                        <img src= {thaiPic} alt="thailand" width="200"></img>
                    </a>
                    <div className="description"> Thailand</div>
                </div>

                <div className="gallery">
                    <a target="_blank" href="malaysia.jpeg">
                    <img src={malayPic} alt="malaysia" width="200"></img>
                    </a>
                    <div className="description"> Malaysia</div>
                </div>

                <div className="gallery">
                    <a target="_blank" href="japan.jpg">
                        <img src={japanPic} alt="thailand" width="200"></img>
                    </a>
                    <div className="description">Japan</div>
                </div>
            </div>
        
        </main>

  );

}

export default Home