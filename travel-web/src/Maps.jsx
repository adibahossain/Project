
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';

//const visted = [

  //['Canada', 55.079, -103.163  ]
  //['USA', 40.241, -95.198 ]
 

//]

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
    <Marker position= {{ lat: 55.079, lng: -103.163 }} icon={{ url: '/pin.png', scaledSize: {width: 40, height: 40},}}/>
    <Marker position= {{ lat: 40.241, lng: -95.198 }} icon={{ url: '/pin.png', scaledSize: {width: 40, height: 40},}}/>
    <Marker position= {{ lat: 3.871, lng: 102.733 }} icon={{ url: '/pin.png', scaledSize: {width: 40, height: 40},}}/>
    <Marker position= {{ lat: 15.151, lng: 101.163 }} icon={{ url: '/pin.png', scaledSize: {width: 40, height: 40},}}/>
    <Marker position= {{ lat: 36.226, lng: 138.955 }} icon={{ url: '/pin.png', scaledSize: {width: 40, height: 40},}}/>'
    <Marker position= {{ lat: 1.284, lng: 103.850 }} icon={{ url: '/pin.png', scaledSize: {width: 40, height: 40},}}/>
    
  </APIProvider>
  </>
  );
}

export default Maps