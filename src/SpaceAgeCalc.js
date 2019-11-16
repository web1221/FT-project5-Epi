export class SpaceAge {
  constructor(years, months, days, lifeExpectancy){
    this.years = years;
    this.months = months;
    this.days = days;
    this.lifeExpectancy = lifeExpectancy * 365;
    this.daysOnEarth = (this.years * 365) + (this.months * 30) + (this.days);
    this.planetAgeCalculations = {
      mercury: parseFloat(this.toFixedNotRounded((this.daysOnEarth / 88), 1)),
      venus: parseFloat(this.toFixedNotRounded((this.daysOnEarth / 225), 1)),
      mars: parseFloat(this.toFixedNotRounded((this.daysOnEarth / 687), 1))
    }
    this.planetLifeExpCalculations = {
      mercury: parseFloat(this.toFixedNotRounded(this.lifeExpectancy / 88), 1),
      venus: parseFloat(this.toFixedNotRounded((this.lifeExpectancy / 225), 1)),
      mars: parseFloat(this.toFixedNotRounded((this.lifeExpectancy /687), 1))
    }
  }
  toFixedNotRounded(num, fixed){
    let re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
  }

  yearsToLiveMercury(){
    let ageOnMercury = this.planetAgeCalculations.mercury;
    let lifeExpOnMercury = this.planetLifeExpCalculations.mercury;
    if(ageOnMercury < lifeExpOnMercury){
      return this.yearstoLiveOnMercury = parseFloat(this.toFixedNotRounded((lifeExpOnMercury - ageOnMercury),1));
    } else if(ageOnMercury > lifeExpOnMercury){
      return this.passedLifeExpMercury = parseFloat(this.toFixedNotRounded(( ageOnMercury - lifeExpOnMercury), 1));
    }
  }


  // Venus Calculations: ---------
  yearsToLiveVenus(){
    let ageOnVenus = this.planetAgeCalculations.venus;
    let lifeExpOnVenus = this.planetLifeExpCalculations.venus;
    if(ageOnVenus < lifeExpOnVenus){
      return this.yearstoLiveOnVenus = parseFloat(this.toFixedNotRounded((lifeExpOnVenus - ageOnVenus),1));
    } else if(ageOnVenus > lifeExpOnVenus){
      return this.passedLifeExpVenus = parseFloat(this.toFixedNotRounded((ageOnVenus - lifeExpOnVenus), 1));
    }
  }

  //Mars Calculations: ----------
  yearsToLiveMars(){
    let ageOnMars = this.planetAgeCalculations.mars
    let lifeExpMars = this.planetLifeExpCalculations.mars;
    if(ageOnMars < lifeExpMars){
      return this.yearstoLiveOnMars = parseFloat(this.toFixedNotRounded((lifeExpMars - ageOnMars),1));
    } else if(ageOnMars > lifeExpMars){
      return this.passedLifeExpMars = parseFloat(this.toFixedNotRounded((ageOnMars - lifeExpMars), 1));
    }
  }

  //Jupiter Calculations --------
  calculateLifeExpJupiter(){
    const calculations = this.toFixedNotRounded((this.lifeExpectancy / (11.8 * 365)), 1);
    return this.lifeExpOnJupiter = parseFloat(calculations);
  }
  calculateageOnJupiter(){
    // this.calculateDaysOnEarth();
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
