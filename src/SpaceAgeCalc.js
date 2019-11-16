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
    return this.lifeExpOnMercury = parseFloat(this.toFixedNotRounded(this.lifeExpectancy / 88), 1);
  }
  calculateageOnMercury(){
    this.calculateDaysOnEarth();
    return this.ageOnMercury = parseFloat(this.toFixedNotRounded((this.daysOnEarth / 88), 1));
  }
  yearsToLiveMercury(){
    this.calculateageOnMercury();
    this.calculateLifeExpOnMercury();
    if(this.ageOnMercury < this.lifeExpOnMercury){
      return this.yearstoLiveOnMercury = parseFloat(this.toFixedNotRounded((this.lifeExpOnMercury - this.ageOnMercury),1));
    } else if(this.ageOnMercury > this.lifeExpOnMercury){
      return this.passedLifeExpMercury = parseFloat(this.toFixedNotRounded((this.ageOnMercury - this.lifeExpOnMercury), 1));
    }
  }


  // Venus Calculations: ---------
  calculateLifeExpOnVenus(){
    return this.lifeExpOnVenus = parseFloat(this.toFixedNotRounded((this.lifeExpectancy / 225), 1));
  }
  calculateageOnVenus(){
    this.calculateDaysOnEarth();
    return this.ageOnVenus = parseFloat(this.toFixedNotRounded((this.daysOnEarth / 225), 1));
  }
  yearsToLiveVenus(){
    this.calculateageOnVenus();
    this.calculateLifeExpOnVenus();
    if(this.ageOnVenus < this.lifeExpOnVenus){
      return this.yearstoLiveOnVenus = parseFloat(this.toFixedNotRounded((this.lifeExpOnVenus - this.ageOnVenus),1));
    } else if(this.ageOnVenus > this.lifeExpOnVenus){
      return this.passedLifeExpVenus = parseFloat(this.toFixedNotRounded((this.ageOnVenus - this.lifeExpOnVenus), 1));
    }
  }

  //Mars Calculations: ----------
  calculateLifeExpOnMars(){
    return this.lifeExpOnMars = parseFloat(this.toFixedNotRounded((this.lifeExpectancy /687), 1));
  }
  calculateageOnMars(){
    this.calculateDaysOnEarth();
    return this.ageOnMars = parseFloat(this.toFixedNotRounded((this.daysOnEarth / 687), 1));
  }
  yearsToLiveMars(){
    this.calculateageOnMars();
    this.calculateLifeExpOnMars();
    if(this.ageOnMars < this.lifeExpOnMars){
      return this.yearstoLiveOnMars = parseFloat(this.toFixedNotRounded((this.lifeExpOnMars - this.ageOnMars),1));
    } else if(this.ageOnMars > this.lifeExpOnMars){
      return this.passedLifeExpMars = parseFloat(this.toFixedNotRounded((this.ageOnMars - this.lifeExpOnMars), 1));
    }
  }

  //Jupiter Calculations --------
  calculateLifeExpJupiter(){
    const calculations = this.toFixedNotRounded((this.lifeExpectancy / (11.8 * 365)), 1);
    return this.lifeExpOnJupiter = parseFloat(calculations);
  }
  calculateageOnJupiter(){
    this.calculateDaysOnEarth();
    let calculations = this.toFixedNotRounded((this.daysOnEarth / (11.8 * 365)), 1);
    return this.ageOnJupiter = parseFloat(calculations);
  }
  yearsToLiveJupiter(){
    this.calculateLifeExpJupiter();
    this.calculateageOnJupiter();
    if(this.ageOnJupiter < this.lifeExpOnJupiter){
      return this.yearstoLiveOnJupiter = parseFloat(this.toFixedNotRounded((this.lifeExpOnJupiter - this.ageOnJupiter),1));
    } else if(this.ageOnJupiter > this.lifeExpOnJupiter){
      return this.passedLifeExpJupiter = parseFloat(this.toFixedNotRounded((this.ageOnJupiter - this.lifeExpOnJupiter), 1));
    }
  }
}
