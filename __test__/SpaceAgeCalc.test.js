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
});
