import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { SpaceAge } from './SpaceAgeCalc.js';
let spaceAge = new SpaceAge(79,3,5,78);
spaceAge.yearsToLiveMercury()
console.log(spaceAge.yearsToLiveMercury());
console.log("How old you are on Mercury", spaceAge.ageOnMercury);
console.log("What the life Exp on Mercury is", spaceAge.lifeOnMercury);
