import React, { Component } from 'react'
import video from '../../assets/videos/Thermalgel/5.mp4'

export default class Step1 extends Component {
    omponentDidMount = () => {
        this.playVideo();
    };

    componentWillUnmount = () => {
        this.pauseVideo();
    };


    playVideo = () => {
        // You can use the play method as normal on your video ref
        this.refs.vidRef.play();
    };

    pauseVideo = () => {
        // Pause as well
        this.refs.vidRef.pause();
    };

    render() {
        return (
            <div>
                <video
                    ref="vidRef"
                    src={video}
                    type="video/mp4"
                />

                <div>
                    <button onClick={this.playVideo}>
                        Play!
              </button>
                    <button onClick={this.pauseVideo}>
                        Pause!
              </button>
                </div>
            </div>
        )
    }
}
