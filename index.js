class Timer {
    constructor(durationInput, startButton, pauseButton){
        this.startButton = startButton;
        this.durationInput = durationInput;
        this.pauseButton = pauseButton;
    
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
        
    }
    start = () => {
        this.tick();
        this.interval = setInterval(this.tick, 1000)
    }
    pause = () => {
        clearInterval(this.interval)

    }
    onDurationChange = () => {
        console.log("duration is changed");
    }
    tick = () => {
        console.log("tick");
    }
}
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#play');
const  pauseButton= document.querySelector('#pause');
const timer = new Timer(durationInput, startButton, pauseButton);
