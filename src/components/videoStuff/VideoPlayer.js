// import "./App.css";
import ReactPlayer from "react-player";
import Control from "./Control";
import { useState, useRef } from "react";
import { formatTime } from "./format";

let count = 0;
function VideoPlayer() {
  const videoPlayerRef = useRef(null);
  const controlRef = useRef(null);

  const [videoState, setVideoState] = useState({
    playing: true,
    muted: false,
    volume: 0.5,
    // playbackRate: 1.0,
    played: 0,
    seeking: false,
    buffer: true,

  });

  //Destructuring the properties from the videoState
  const { playing, muted, volume, playbackRate, played, seeking, buffer } =
    videoState;

  const currentTime = videoPlayerRef.current
    ? videoPlayerRef.current.getCurrentTime()
    : "00:00";

  const duration = videoPlayerRef.current
    ? videoPlayerRef.current.getDuration()
    : "00:00";

  const formatCurrentTime = formatTime(currentTime);
  const formatDuration = formatTime(duration);

  const playPauseHandler = () => {
    //plays and pause the video (toggling)
    setVideoState({ ...videoState, playing: !videoState.playing });
  };


  //console.log("========", (controlRef.current.style.visibility = "false"));
  const progressHandler = (state) => {
    if (count > 3) {
      console.log("close");
      controlRef.current.style.visibility = "hidden"; // toggling player control container
    } else if (controlRef.current.style.visibility === "visible") {
      count += 1;
    }

    if (!seeking) {
      setVideoState({ ...videoState, ...state });
    }
  };

  const seekHandler = (e, value) => {
    setVideoState({ ...videoState, played: parseFloat(value / 100) });
    videoPlayerRef.current.seekTo(parseFloat(value / 100));
  };

  const seekMouseUpHandler = (e, value) => {
    console.log(value);

    setVideoState({ ...videoState, seeking: false });
    videoPlayerRef.current.seekTo(value / 100);
  };

  const volumeChangeHandler = (e, value) => {
    const newVolume = parseFloat(value) / 100;

    setVideoState({
      ...videoState,
      volume: newVolume,
      muted: Number(newVolume) === 0 ? true : false, // volume === 0 then muted
    });
  };

  const volumeSeekUpHandler = (e, value) => {
    const newVolume = parseFloat(value) / 100;

    setVideoState({
      ...videoState,
      volume: newVolume,
      muted: newVolume === 0 ? true : false,
    });
  };

  const muteHandler = () => {
    //Mutes the video player
    setVideoState({ ...videoState, muted: !videoState.muted });
  };

  const onSeekMouseDownHandler = (e) => {
    setVideoState({ ...videoState, seeking: true });
  };

  const mouseMoveHandler = () => {
    controlRef.current.style.visibility = "visible";
    count = 0;
  };

  const bufferStartHandler = () => {
    console.log("Bufering.......");
    setVideoState({ ...videoState, buffer: true });
  };

  const bufferEndHandler = () => {
    console.log("buffering stoped ,,,,,,play");
    setVideoState({ ...videoState, buffer: false });
  };


// chat gpt gave me this toggle handler - its definitely shit
  // const toggleFullScreen = () => {
  //   if (!isFullScreen) {
  //     // Enter fullscreen
  //     if (videoPlayerRef.current.requestFullscreen) {
  //       videoPlayerRef.current.requestFullscreen();
  //     } else if (videoPlayerRef.current.mozRequestFullScreen) {
  //       videoPlayerRef.current.mozRequestFullScreen();
  //     } else if (videoPlayerRef.current.webkitRequestFullscreen) {
  //       videoPlayerRef.current.webkitRequestFullscreen();
  //     } else if (videoPlayerRef.current.msRequestFullscreen) {
  //       videoPlayerRef.current.msRequestFullscreen();
  //     }
  //   } else {
  //     // Exit fullscreen
  //     if (document.exitFullscreen) {
  //       document.exitFullscreen();
  //     } else if (document.mozCancelFullScreen) {
  //       document.mozCancelFullScreen();
  //     } else if (document.webkitExitFullscreen) {
  //       document.webkitExitFullscreen();
  //     } else if (document.msExitFullscreen) {
  //       document.msExitFullscreen();
  //     }
  //   }
  
  //   // Toggle the fullscreen state
  //   setIsFullScreen(!isFullScreen);
  // };



  return (
    <div className="video_container">
      <div>
        <h2>React player</h2>
      </div>
      <div className="container">
        <div className="player__wrapper" onMouseMove={mouseMoveHandler}>
          <ReactPlayer
            ref={videoPlayerRef}
            // className="player"
            url="https://vimeo.com/586971565"
            playing={playing}
            volume={volume}
            muted={muted}
            onProgress={progressHandler}
            onBuffer={bufferStartHandler}
            onBufferEnd={bufferEndHandler}
          />

          {buffer && <p>Loading</p>}

          <Control
            controlRef={controlRef}
            onPlayPause={playPauseHandler}
            playing={playing}
            played={played}
            onSeek={seekHandler}
            onSeekMouseUp={seekMouseUpHandler}
            onMouseSeekDown={onSeekMouseDownHandler}
            volume={volume}
            onVolumeChangeHandler={volumeChangeHandler}
            onVolumeSeekUp={volumeSeekUpHandler}
            mute={muted}
            onMute={muteHandler}
            duration={formatDuration}
            currentTime={formatCurrentTime}
            // onToggleFullScreen={toggleFullScreen}
          />
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;