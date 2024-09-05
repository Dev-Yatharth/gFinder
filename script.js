let PlanetMass = document.getElementById("PlanetMass").value
let PlanetRadius = document.getElementById("Radius").value
const G = 0.0000000000667
let PersonMass = document.getElementById("Mass").value
let gResult = document.getElementById("gResult")
let wResult = document.getElementById("wResult")
let button = document.getElementById("result")


function scientificToStandard(number) {
    const [coefficient, exponent] = number.toString().split('e');
  
    if (exponent < 0) {
      const zeros = '0'.repeat(Math.abs(exponent) - 1);
      return `0.${zeros}${coefficient}`;
    } else {
      const zeros = '0'.repeat(exponent - 1);
      return `${coefficient}${zeros}`;
    }
  }

let EvalPlanetMass = scientificToStandard(PlanetMass);
let EvalPlanetRadius = scientificToStandard(PlanetRadius);
console.log(EvalPlanetMass)

button.addEventListener("click", function () {calculate_g(EvalPlanetMass, EvalPlanetRadius, PersonMass)})
function calculate_g(Pm, Pr, Pem) {
    let prMeter = Pr * 1000
    let g = (G*Pm)/prMeter**2
    gResult.innerHTML = g
    console.log(g)
    let w = Pem*g 
    console.log("w:",w)
    wResult.innerHTML = w
}
