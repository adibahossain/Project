
import {APIProvider, Map} from '@vis.gl/react-google-maps';


function Maps(){

    return(

    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} onLoad={() => console.log('Maps API has loaded.')}>
    <Map
        style = {{width: '50vw', height: '50vh'}}
        Center={{ lat: 36.365, lng: 7.565,}}
        defaultZoom={2}
        disableDefaultUI={true}
      />    
  </APIProvider>
  );
}

export default Maps