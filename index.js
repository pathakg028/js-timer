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
