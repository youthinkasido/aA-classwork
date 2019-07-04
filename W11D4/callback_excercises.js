
class Clock {
    constructor() {
        // 1. Create a Date object.
        const date = new Date();
        // 2. Store the hours, minutes, and seconds.
        this.date = date
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        setInterval(this._tick.bind(this), 1000);

        // const date = new Date();
        // date.getHours();
            
        // 3. Call printTime.
        // this.printTime;
        // 4. Schedule the tick at 1 second intervals.  
        // this._tick;
    }
    printTime() {
        // console.log(`${this.hour}:${this.minutes}:${this.seconds}`)
        const current_time = [this.hours, this.minutes, this.seconds].join(":");
        console.log(current_time);
        // Format the time in HH:MM:SS
        // Use console.log to print it.
    }
    // setInterval(function(){ alert("Hello"); }, 3000);
    _tick() {
      this._increSecs();
      this.printTime();
    
        // 1. Increment the time by one second.
        // 2. Call printTime.
    }

    _increSecs(){
        this.seconds += 1;
        if (this.seconds === 60){
            this.seconds = 0;
            this._increMins
        }
    }
    _increMins(){
        this.minutes += 1;
        if (this.minutes === 60) {
            this.minutes = 0;
            this._increHours
        }

    }
    _increHours(){
        this.hours += 1;
        if (this.hours >= 24 ) {
            this.hours = this.hours % 24;
        }
    }
}


const clock = new Clock();
// console.log(clock.date);
// console.log('-------------------')
// console.log(clock.hour);
// console.log('-------------------')
// console.log(clock.minutes);
// console.log('-------------------')
// console.log(clock.seconds);
// clock.printTime();

clock
