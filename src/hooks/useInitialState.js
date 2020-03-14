import {useState, useEffect} from 'react';

const useInitialState = (API) => {
    
    //Estamos manejando los estados
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []);

    return videos;
}

export default useInitialState;