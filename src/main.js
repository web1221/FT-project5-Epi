// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { SpaceAge } from './SpaceAgeCalc.js';
let spaceAge = new SpaceAge(20,3,4,78);
let newSpaceAge = new SpaceAge(79, 3, 5, 78);
spaceAge.calculateLifeExpOnMercury();
console.log(spaceAge.planetAgeCalculations.mercury);
