class RadialClock {

  constructor(options) {
    this.settings = options;
    const canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.setTime();
  };

  setTime() {
    this.present = new Date();
    this.presentMilli = this.present.getMilliseconds();
    this.presentSeconds = this.present.getSeconds();
    this.presentMinutes = this.present.getMinutes();
    this.presentHours = this.present.getHours();
  }

  paintClock() {

    let hoursPercent = ((this.presentHours * 60) + this.presentMinutes) / 1440;
    let minutesPercent = ((this.presentMinutes * 60) + this.presentSeconds) / 3600;
    let secondsPercent = ((this.presentSeconds * 1000) + this.presentMilli) / 60000;

    this.ctx.clearRect(0, 0, 600, 600);
    this.drawArc(this.settings.hoursX, this.settings.hoursY, hoursPercent);
    this.drawArc(this.settings.minutesX, this.settings.minutesY, minutesPercent);
    this.drawArc(this.settings.secondsX, this.settings.secondsY, secondsPercent);
  }

  drawArc(x, y, percent) {

    let startAngle = (Math.PI / 2) * -1;
    let endAngle = startAngle + (Math.PI * 2 * percent);

    this.ctx.beginPath();
    this.ctx.arc(x, y, 75, startAngle, endAngle, false);
    this.ctx.strokeStyle = "#ff3242";
    this.ctx.lineWidth = 10;
    this.ctx.stroke();

  }

  startClock() {
    const incrementTime = () => {
      this.setTime.call(this);
      this.paintClock.call(this);
    }
    return setInterval(incrementTime, 50);
  }

}

var test = {
  hoursX: 100,
  hoursY: 150,
  minutesX: 300,
  minutesY: 150,
  secondsX: 500,
  secondsY: 150,
}

var testClock = new RadialClock(test);
