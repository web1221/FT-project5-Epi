import { SpaceAge } from "./../src/SpaceAgeCalc.js"


describe ('spaceAge', () => {
  let spaceAge;
  beforeEach(() => {
    spaceAge = new SpaceAge(20, 3, 4);

  });
  test('should calculate the numbers of days you have lived on earth', () => {
    expect(spaceAge.calculateDaysOnEarth()).toEqual(7394);
  });
  test('should calculate how old user is on Mercury', () => {
    expect(spaceAge.calculateYearsOnMercury()).toEqual(84.0);
  });
  test('should calculate how old user is on Venus', () => {
    expect(spaceAge.calculateYearsOnVenus()).toEqual(32.8);
  });
  test('should calculate how old user is on Mars', () => {
    expect(spaceAge.calculateYearsOnMars()).toEqual(10.7);
  });
  test('should calculate how old user is on Jupiter', () => {
    expect(spaceAge.calculateYearsOnJupiter()).toEqual(1.7);
  });
});
