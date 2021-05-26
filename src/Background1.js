import React, { useEffect } from 'react'
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";

/* Background animations */
var sceneryFrames = [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }
];

var sceneryTimingBackground = {
    duration: 36000,
    iterations: Infinity,
}


function Background1({ speed }) {

    const { ref, getAnimation } = useWebAnimations({
        keyframes: sceneryFrames,
        timing: sceneryTimingBackground,
        onReady: ({ animation }) => {
            animation.currentTime = animation.effect.getTiming().duration / 2
        },
    })

    useEffect(() => {
        const animation = getAnimation();
        if (speed < 0.8) {
            animation.playbackRate = speed;
        }
        else if (speed > 1.2) {
            animation.playbackRate = speed - 0.5;
        }
        else {
            animation.playbackRate = speed - 0.2;
        }
    }, [getAnimation, speed])

    return (
        <div >
            <div class="scenery" id="background1" ref={ref}>

                <img
                    id="palm3"
                    src="https://www.pngkit.com/png/full/286-2869481_logs-clip-art-at-clker-com-vector-wood.png"
                    alt=" "
                    height="90"
                    width="150"
                />
            </div>
        </div>
    )
}

export default Background1