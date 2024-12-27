import { useState } from "react";
import Header from './Header'
import Albums from './Albums'
import { albums } from '../data/songsData';
import Player from './Player'


const MusicApp = ({onHandleDark,mode}) => {
    let [currentSong, setCurrentSong] = useState(albums[0].songs[0].src);
    let [currentImg, setCurrentImg] = useState(albums[0].songs[0].image);
  
    let [isPlaying, setIsPlaying] = useState(false);
  

  return (
    <div className="container mx-auto">
        {/* Header-section start */}
        <Header onHandleDark={onHandleDark} mode={mode}/>
        {/* Header-section end */}
        {/* Albums start */}
        <Albums
        setCurrentSong={setCurrentSong}  
        setIsPlaying={setIsPlaying} 
        currentImg={currentImg} 
        setCurrentImg={setCurrentImg}/>
        {/* Albums end */}
        {/* Player start */}
        <Player
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}/>
        {/* Player end */}
      
    </div>
  )
}

export default MusicApp