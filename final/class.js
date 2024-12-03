class FastingSchedule {
  constructor(currentDay, currentTime) {
    this.currentDay = currentDay;
    this.currentTime = currentTime;
    this.dailySchedule = {
      Monday: "Intermittent Fasting Day",
      Tuesday: "Intermittent Fasting Day",
      Wednesday: "Intermittent Fasting Day",
      Thursday: "Intermittent Fasting Day",
      Friday: "Intermittent Fasting Day",
      Saturday: "Reward Day",
      Sunday: "Full Fasting Day",
    };
    this.eatingStatus = this.determineEatingStatus();
    this.hoursLeft = this.calculateHoursLeft();
  }
  determineEatingStatus = () => {
    const status = this.dailySchedule[this.currentDay];
    if (status === "Intermittent Fasting Day") {
      if (this.currentTime >= 10 && this.currentTime < 17) {
        return "yes";
      } else {
        return "no";
      }
    }
    if (status === "Full Fasting Day") {
      return "no";
    }
    if (status === "Reward Day") {
      return "yes";
    }
  };
  calculateHoursLeft() {
    let hoursLeft;
    if (this.currentTime >= 10 && this.currentTime < 17) {
      hoursLeft = 17 - this.currentTime;
    } else if (this.currentTime < 10) {
      hoursLeft = 7;
    } else {
      hoursLeft = 0;
    }
    if (hoursLeft === 0) {
      return "n/a";
    } else {
      return hoursLeft;
    }
  }
}

export { FastingSchedule };