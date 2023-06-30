import React from "react";


import Slider from '@mui/material-next/Slider';

import { PauseIcon, PlayIcon, VolumeOnIcon, VolumeOffIcon, FullScreenIcon, FullScreenExitIcon} from '../icons';


const Control = ({
  controlRef,
  onPlayPause,
  playing = false,
  played,
  onSeek,
  onSeekMouseUp,
  onMouseSeekDown,
  volume,
  onVolumeChangeHandler,
  onVolumeSeekUp,
  mute,
  onMute,
  duration,
  currentTime,

  isFullScreen,
  onToggleFullScreen
}) => {
//   const classes = useStyles();


    return (
        <div className="" ref={controlRef}>
            <Slider
            value={played * 100}
            onChange={onSeek}
            onChangeCommitted={onSeekMouseUp}
            onMouseDown={onMouseSeekDown}
            className='ml-10'
            />
        <div className="flex flex-row">

        
            <div className="icon__btn" onClick={onPlayPause}>
                {playing ? <PauseIcon className='h-[3.5rem] w-[3.5rem]' /> : <PlayIcon className='h-[3.5rem] w-[3.5rem]' />}{" "}
            </div>

            <div className="icon__btn" onClick={onMute}>
                {mute ? <VolumeOffIcon className='h-[3.5rem] w-[3.5rem]' /> :  <VolumeOnIcon className='h-[3.5rem] w-[3.5rem]' />}
            </div>
            
            {/* volume slider */}
            <Slider
                value={volume * 100}
                onChange={onVolumeChangeHandler}
                onChangeCommitted={onVolumeSeekUp}
                size='small'
                className='basis-1/6'
            />
              
            <span>
            {currentTime} : {duration}
            </span>

            <div className="icon__btn" onClick={onToggleFullScreen}>
                {isFullScreen ? <FullScreenExitIcon className='h-[3.5rem] w-[3.5rem]' /> : <FullScreenIcon className='h-[3.5rem] w-[3.5rem]' />}
            </div>
        </div> 
        </div>     
    );
};

export default Control;