export class SpaceAge {
  constructor(years, months, days, lifeExpectancy){
    this.years = years;
    this.months = months;
    this.days = days;
    this.lifeExpectancy = lifeExpectancy * 365;
  }
  toFixedNotRounded(num, fixed){
    let re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
  }
  calculateDaysOnEarth(){
    return this.daysOnEarth = (this.years * 365) + (this.months * 30) + (this.days);
  }

  // Mercury Calculations: ---------
  calculateLifeExpOnMercury(){
    return this.lifeOnMercury = parseFloat(this.toFixedNotRounded(this.lifeExpectancy / 88), 1);
  }
  calculateageOnMercury(){
    this.calculateDaysOnEarth();
    return this.ageOnMercury = parseFloat(this.toFixedNotRounded((this.daysOnEarth / 88), 1));
  }
  yearsToLiveMercury(){
    this.calculateageOnMercury(); 
    this.calculateLifeExpOnMercury();
    if(this.ageOnMercury < this.lifeOnMercury){
      return this.yearstoLiveOnMercury = parseFloat(this.toFixedNotRounded((this.lifeOnMercury - this.ageOnMercury),1))
    } else if(this.ageOnMercury > this.lifeOnMercury){
      return this.passedLifeExpMercury = parseFloat(this.toFixedNotRounded((this.ageOnMercury - this.lifeOnMercury), 1));
    }
  }


  // Venus Calculations: ---------
  calculateLifeExpOnVenus(){
    return this.lifeOnVenus = parseFloat(this.toFixedNotRounded((this.lifeExpectancy / 225), 1));
  }
  calculateageOnVenus(){
    this.calculateDaysOnEarth();
    return this.ageOnVenus = parseFloat(this.toFixedNotRounded((this.daysOnEarth / 225), 1));
  }
  yearsToLiveVenus(){

  }

  //Mars Calculations: ----------
  calculateLifeExpOnMars(){
    return this.lifeOnMars = parseFloat(this.toFixedNotRounded((this.lifeExpectancy /687), 1));
  }
  calculateageOnMars(){
    this.calculateDaysOnEarth();
    return this.ageOnMars = parseFloat(this.toFixedNotRounded((this.daysOnEarth / 687), 1));
  }

  //Jupiter Calculations --------
  calculateLifeExpJupiter(){
    const calculations = this.toFixedNotRounded((this.lifeExpectancy / (11.8 * 365)), 1);
    return this.lifeOnJupiter = parseFloat(calculations);
  }
  calculateageOnJupiter(){
    this.calculateDaysOnEarth();
    let calculations = this.toFixedNotRounded((this.daysOnEarth / (11.8 * 365)), 1);
    return this.ageOnJupiter = parseFloat(calculations);
  }
}
