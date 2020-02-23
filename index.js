class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if(callbacks){
            this.onStart = callbacks.onStart
            this.onTick = callbacks.onTick
            this.onComplete = callbacks.onComplete
        }
        
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
        
    }
    start = () => {
        if(this.onStart) {
            this.onStart();
        }
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
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
        }
        else{
        this.timeRemaining = this.timeRemaining - 1;
        if(this.onTick){
            this.onTick()
        }
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
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(){
        console.log("timer started");

    },
    onTick(){
        console.log("timer is ticked down");

    },
    onComplete(){
        console.log("timer is completed");

    }
});
