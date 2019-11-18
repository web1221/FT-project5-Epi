import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { SpaceAge } from './SpaceAgeCalc.js';



$(document).ready(function(){
  $('form#ageForm').submit(function(event){
    event.preventDefault();
    let yearsInput = parseInt($('input#years').val());
    let monthsInput = parseInt($('input#months').val());
    let daysInput = parseInt($('input#days').val());
    let lifeExpInput = parseInt($('input#life').val());
    let spaceAge = new SpaceAge(yearsInput, monthsInput, daysInput, lifeExpInput);
    // Mercury Results
    $('ul').append(`<h5>Mercury</h5><li><p>Your Age in Mercury: ${spaceAge.planetAgeCalculations.mercury} years</p></li> <li><p>Your life expectancy in Mercury: ${spaceAge.planetLifeExpCalculations.mercury} years</p></li><li><p>How long until you reach your life expectancy: ${spaceAge.yearsToLiveMercury()} years</p></li>`);
    // Venus Results
    $('ul').append(`<h5>Venus</h5><li><p>Your Age in Venus: ${spaceAge.planetAgeCalculations.venus} years</p></li> <li><p>Your life expectancy in Venus: ${spaceAge.planetLifeExpCalculations.venus} years</p></li><li><p>How long until you reach your life expectancy: ${spaceAge.yearsToLiveVenus()} years</p></li>`);
    // Mars Results
    $('ul').append(`<h5>Mars</h5><li><p>Your Age in Mars: ${spaceAge.planetAgeCalculations.mars} years</p></li> <li><p>Your life expectancy in Mars: ${spaceAge.planetLifeExpCalculations.mars} years</p></li><li><p>How long until you reach your life expectancy: ${spaceAge.yearsToLiveMars()} years</p></li>`);
    // Jupiter Results
    $('ul').append(`<h5>Jupiter</h5><li><p>Your Age in Jupiter: ${spaceAge.planetAgeCalculations.jupiter} years</p></li> <li><p>Your life expectancy in Jupiter: ${spaceAge.planetLifeExpCalculations.jupiter} years</p></li><li><p>How long until you reach your life expectancy: ${spaceAge.yearsToLiveJupiter()} years</p></li>`);
  });
});
