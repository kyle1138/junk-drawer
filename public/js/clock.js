class RadialClock {

  constructor(options) {
    this.settings = options;
    const canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.ctx.font = this.settings.fontSize + "px Arial";
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "ideographic";
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
    let secondsPercent = (this.presentSeconds * 1000) / 60000;

    this.ctx.clearRect(0, 0, 600, 600);
    this.drawArc(this.settings.hoursX, this.settings.hoursY, hoursPercent);
    this.drawNumber(this.settings.hoursX, this.settings.hoursY, this.presentHours );

    this.drawArc(this.settings.minutesX, this.settings.minutesY, minutesPercent);
    this.drawNumber(this.settings.minutesX, this.settings.minutesY, this.presentMinutes );

    this.drawArc(this.settings.secondsX, this.settings.secondsY, secondsPercent);
    this.drawNumber(this.settings.secondsX, this.settings.secondsY, this.presentSeconds );
  }

  drawArc(x, y, percent) {

    let startAngle = (Math.PI / 2) * -1;
    let endAngle = startAngle + (Math.PI * 2 * percent);
    this.ctx.fillRect(x,y,2,2);
    this.ctx.beginPath();
    this.ctx.arc(x, y, 75, startAngle, endAngle, false);
    this.ctx.strokeStyle = "#ff3242";
    this.ctx.lineWidth = 10;
    this.ctx.stroke();

  }

  drawNumber(x, y, number) {
    console.log(number);
    this.settings
    this.ctx.fillText(number,x,y + this.settings.fontSize / 2);
  }

  startClock() {
    console.log(this.settings);
    const incrementTime = () => {
      this.setTime.call(this);
      this.paintClock.call(this);
    }
    this.ticker = setInterval(incrementTime, 1000);
    return this.ticker;
  }

  stopClock() {
    clearInterval(this.ticker);
  }
}
