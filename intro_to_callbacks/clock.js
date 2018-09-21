class Clock {
  constructor() {
    const time = new Date();
    this.hours = time.getHours();
    this.minutes = time.getMinutes();
    this.seconds = time.getSeconds();
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // console.log(`Hours: ${this.hours}. Minutes: ${this.minutes}. Seconds: ${this.seconds}`);
    // 4. Schedule the tick at 1 second intervals.
    this.printTime();
    let that = this;
    this._tick.bind(this);
    window.setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // let output_hours, output_minutes, output_seconds;
    const output_hours = (this.hours < 10 ? `0${this.hours}` : `${this.hours}`);
    const output_minutes = (this.minutes < 10 ? `0${this.minutes}` : `${this.minutes}`);
    const output_seconds = (this.seconds < 10 ? `0${this.seconds}` : `${this.seconds}`);
    // Format the time in HH:MM:SS
    console.log(`${output_hours}:${output_minutes}:${output_seconds}`);
    // Use console.log to print it.
  }

  _tick() {
    // 1. Increment the time by one second.

    //increase seconds
    this.seconds = (this.seconds === 59 ? 0 : this.seconds += 1);
    if (this.seconds === 0) {
      this.minutes = (this.minutes === 59 ? 0 : this.minutes += 1);
    }
    if (this.minutes === 0){
     this.hours = (this.hours === 23 ? 0 : this.hours += 1);
    }
    this.printTime();
    //check if seconds == 60
    //reset to 0, increment minutes
    //check if minutes == 60
    //reset to 0, increment hours
    //check if hours == 24
    //reset to 0



    // setTimeout(this.printTime.call,1000);
    // 2. Call printTime.
  }
}

const clock = new Clock();
