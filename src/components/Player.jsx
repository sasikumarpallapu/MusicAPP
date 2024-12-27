import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Player = ({ currentSong,setCurrentSong,isPlaying, setIsPlaying}) => {

  return (
    <div className="player shadow border border-danger ">
     
      <AudioPlayer
       className="audio-player"
        autoPlay={isPlaying}
        src={currentSong}
        onPlay={(e) => setIsPlaying(true)}
        onPause={(e) => setIsPlaying(false)}
        // other props here
      />
    </div>
  );
};

export default Player;