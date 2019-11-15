export class SpaceAge {
  constructor(years, months, days){
    this.years = years;
    this.months = months;
    this.days = days;
  }
  calculateDaysOnEarth(){
    this.daysOnEarth = (this.years * 365) + (this.months * 30) + (this.days);
    return this.daysOnEarth;
  }
  calculateYearsOnMercury(){

  }
}
