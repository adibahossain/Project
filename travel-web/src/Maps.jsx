
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';



function Maps(){

    return(

    <>
    <h1 className='mapsTitle'>Places Visited</h1>

    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
    <Map

        style = {{width: '50vw', height: '60vh', margin: 'auto', padding: '50px'}}
        defaultCenter={{ lat: 38, lng: 14,}}
        defaultZoom={2}
        disableDefaultUI={true}
      />    
    <Marker position= {{ lat: 55.079, lng: -103.163  }} icon={{ url: '/pin.png', scaledSize: {width: 40, height: 40},}}/>
   
    
  </APIProvider>
  </>
  );
}

export default Maps