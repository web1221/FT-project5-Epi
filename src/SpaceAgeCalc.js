export class SpaceAge {
  constructor(years, months, days){
    this.years = years;
    this.months = months;
    this.days = days;
    this.lifeExpectancyInDays = 28766;
  }

  toFixedNotRounded(num, fixed){
    let re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
  }
  calculateDaysOnEarth(){
    return this.daysOnEarth = (this.years * 365) + (this.months * 30) + (this.days);
  }
  calculateLifeExpOnMercury(){
    return this.lifeOnMercury = parseFloat(this.toFixedNotRounded(this.lifeExpectancyInDays / 88), 1);
  }
  calculateYearsOnMercury(){
    this.calculateDaysOnEarth();
    return this.yearsOnMercury = parseFloat(this.toFixedNotRounded((this.daysOnEarth / 88), 1));
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
  lifeExpectancyOnMars(){

  }


}
