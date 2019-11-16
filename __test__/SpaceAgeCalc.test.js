import { SpaceAge } from "./../src/SpaceAgeCalc.js"


describe ('spaceAge', () => {
  let spaceAge;
  let newSpaceAge
  beforeEach(() => {
    spaceAge = new SpaceAge(20, 3, 4, 78);
    newSpaceAge = new SpaceAge(79, 3, 5, 78);
  });
  test('should calculate the numbers of days you have lived on earth', () => {
    expect(spaceAge.calculateDaysOnEarth()).toEqual(7394);
  });
  test('should calculate how old user is on Mercury', () => {
    expect(spaceAge.calculateageOnMercury()).toEqual(84.0);
  });
  test('should calculate how old user is on Venus', () => {
    expect(spaceAge.calculateageOnVenus()).toEqual(32.8);
  });
  test('should calculate how old user is on Mars', () => {
    expect(spaceAge.calculateageOnMars()).toEqual(10.7);
  });
  test('should calculate how old user is on Jupiter', () => {
    expect(spaceAge.calculateageOnJupiter()).toEqual(1.7);
  });
  test('should return the average life expectancy in Mercury years', () => {
    expect(spaceAge.calculateLifeExpOnMercury()).toEqual(323);
  });
  test('should return the average life expectancy in Venus years', () => {
    expect(spaceAge.calculateLifeExpOnVenus()).toEqual(126.5);
  });
  test('should return the average life expectancy in Mars years', () => {
    expect(spaceAge.calculateLifeExpOnMars()).toEqual(41.4);
  });
  test('should return the average life expectancy in Jupiter years', () => {
    expect(spaceAge.calculateLifeExpJupiter()).toEqual(6.6);
  });
  test('should return how many years a person has before they reach their life expectancy on Mercury.', () => {
    expect(spaceAge.yearsToLiveMercury()).toEqual(239);
  });
  test('If they surpass their life expectancy on Mercury it should return how many years they surpassed it.', () => {
    expect(newSpaceAge.yearsToLiveMercury()).toEqual(5.6);
  });
  test('should return how many years a person has before they reach their life expectancy on Venus.', () => {
    expect(spaceAge.yearsToLiveVenus()).toEqual(93.7);
  });
  test('If they surpass their life expectancy on Venus it should return how many years they surpassed it.', () => {
    expect(newSpaceAge.yearsToLiveVenus()).toEqual(2);
  });
  test('should return how many years a person has before they reach their life expectancy on Mars.', () => {
    expect(spaceAge.yearsToLiveMars()).toEqual(30.7);
  });
  test('If they surpass their life expectancy on Mars it should return how many years they surpassed it.', () => {
    expect(newSpaceAge.yearsToLiveMars()).toEqual(0.7);
  });
  test('should return how many years a person has before they reach their life expectancy on Jupiter.', () => {
    expect(spaceAge.yearsToliveJupiter()).toEqual(30.7);
  });
  test('If they surpass their life expectancy on Jupiter it should return how many years they surpassed it.', () => {
    expect(newSpaceAge.yearsToliveJupiter()).toEqual(0.7);
  });
});
