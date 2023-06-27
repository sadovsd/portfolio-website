import React, { Component } from 'react';

class Project1 extends Component {

    vimeoPlayer = null;

    componentDidMount() {
        // Initialize the Vimeo player
        this.vimeoPlayer = new window.Vimeo.Player('vimeoPlayer', {
            url: 'https://vimeo.com/832650056',
            controls: false, // Disable the default controls
            autoplay: false, // Disable autoplay if needed
            background: false, // Disable background playback if needed
        });

        // Create custom play butto
        this.playButton = document.createElement('button');
        this.playButton.className = 'play-button';
        this.playButton.innerHTML = '<span class="play-icon"></span>';
        this.playButton.addEventListener('click', () => {
            if (this.isPlaying) {
                this.vimeoPlayer.pause().then(() => {
                    this.isPlaying = false;
                    this.playButton.innerHTML = '<span class="play-icon"></span>';
                });
            } else {
                this.vimeoPlayer.play().then(() => {
                    this.isPlaying = true;
                    this.playButton.innerHTML = '<span class="pause-icon"></span>';
                });
            }
        });
        document.getElementById('vimeoPlayer').appendChild(this.playButton);

        // Create time bar
        this.timeBar = document.createElement('div');
        this.timeBar.className = 'time-bar';
        document.getElementById('vimeoPlayer').appendChild(this.timeBar);

        // Update time bar on time update
        this.vimeoPlayer.on('timeupdate', (data) => {
            const percent = (data.percent * 100) + '%';
            this.timeBar.style.width = percent;
        });
    }

    componentWillUnmount() {
        // Clean up the Vimeo player instance
        if (this.vimeoPlayer) {
        this.vimeoPlayer.unload();
        this.vimeoPlayer = null;
        }
    }

    render() {

        return(
            <div className='container mt-16 mb-24 w-7/12 bg-slate-100'>
                <h1 className='text-left'>Project 1</h1>
                <span class="play-icon">deez nuts</span>
                <div id='vimeoPlayer'></div>
            </div>
        );
    }
}


export default Project1;