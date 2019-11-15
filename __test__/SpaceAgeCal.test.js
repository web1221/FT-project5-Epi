import { SpaceAge } from "./../src/SpaceAgeCalc.js"


describe ('ageInDays', () => {

  test('should calculate the numbers of days you have lived on earth', () => {
    expect(calculateDaysOnEarth()).toEqual(7394);
  });
});
