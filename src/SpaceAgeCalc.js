export class SpaceAge {
  constructor(years, months, days){
    this.years = years;
    this.months = months;
    this.days = days;
  }

  toFixedNotRounded(num, fixed) {
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
}
  calculateDaysOnEarth(){
    this.daysOnEarth = (this.years * 365) + (this.months * 30) + (this.days);
    return this.daysOnEarth;
  }
  calculateYearsOnMercury(){
    this.calculateDaysOnEarth();
    this.yearsOnMercury = parseFloat((this.daysOnEarth / 88).toFixed(0));
    return this.yearsOnMercury;
  }
  calculateYearsOnVenus() {
    this.calculateDaysOnEarth();
    let notRounded = this.toFixedNotRounded((this.daysOnEarth / 225), 1)
    this.yearsOnVenus = parseFloat(notRounded);
    return this.yearsOnVenus;
  }
}
