var myAge = "Janurary 16, 1997"
var dateStart = Date.parse(myAge);
var dateNow   = Date.now();
var displayAge = dateNow - dateStart;

var milliseconds = displayAge;
var months = 1000 * 60 * 60 * 24 * 30.4167;
var years = months * 12; //milliseonds * seconds * minutes * hours * days = 1 year
var ageInYears = (Math.round(milliseconds/years)-1);
var ageInMonths = (Math.round(milliseconds/months) % 12);

function printAge(){
  var returnYear = ageInYears;
  var returnMonth = ageInMonths;
  document.getElementById("currentAge").innerHTML = "I am " + returnYear + " years old (and " + returnMonth + " months).";
}
window.onload = printAge;
