export class SpaceAge {
  constructor(years, months, days){
    this.years = years;
    this.months = months;
    this.days = days;
    this.lifeExpectancy = 78.7;
  }

  toFixedNotRounded(num, fixed){
    let re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
  }
  calculateDaysOnEarth(){
    return this.daysOnEarth = (this.years * 365) + (this.months * 30) + (this.days);
  }

  calculateYearsOnMercury(){
    this.calculateDaysOnEarth();
    return this.yearsOnMercury = parseFloat((this.daysOnEarth / 88).toFixed(0));
  }
  calculateYearsOnVenus(){
    this.calculateDaysOnEarth();
    return this.yearsOnVenus = parseFloat(this.toFixedNotRounded((this.daysOnEarth / 225), 1));
  }
  calculateYearsOnMars(){
    this.calculateDaysOnEarth();
    return this.yearsOnMars = parseFloat(this.toFixedNotRounded((this.daysOnEarth / 687), 1));
  }
  calculateYearsOnJupiter(){
    this.calculateDaysOnEarth();
    let calculations = this.toFixedNotRounded((this.daysOnEarth / (11.8 * 365)), 1);
    return this.yearsOnJupiter = parseFloat(calculations);

  }
}
