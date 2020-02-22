class Timer {
    constructor(durationInput, startButton, pauseButton){
        this.durationInput = durationInput;
        this.startButton = startButton;
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
        if(this.timeRemaining<=0){
            this.pause
        }
        else{
        this.timeRemaining = this.timeRemaining - 1;
        }
    }

    get timeRemaining() {
            return parseFloat(this.durationInput.value)
    }

    set timeRemaining(time) {
        this.durationInput.value = time
    }
    // getTime(){
    //     return parseFloat(this.durationInput.value)

    // }
    // setTime(time){
    //     this.durationInput.value = time

    // }
}
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#play');
const  pauseButton= document.querySelector('#pause');
const timer = new Timer(durationInput, startButton, pauseButton);
