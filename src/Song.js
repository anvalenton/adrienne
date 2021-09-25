import React from "react";
import song from './Dijon.mp3';
import ReactAudioPlayer from 'react-audio-player';

const Song = () => {

    


    
    return (

        <>
        <ReactAudioPlayer
            className="audio" src={song}
            controls
         />
        </>



    )


}

export default Song;