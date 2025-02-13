let image = Math.floor(Math.random() * 15); 

document.body.style.backgroundImage = `url('../img/${image}.jpg')`; 
document.body.style.backgroundSize = "cover";
document.body.style.repeat = "norepeat";




const storedcities = localStorage.getItem("sharedCities");
const storedprovides = localStorage.getItem("sharedprovides");
let h1 = document.getElementById('city_name')
let h2 = document.getElementById('provide_name')

h1.innerHTML = storedcities
h2.innerHTML = storedprovides

let svgshow =  Math.floor(Math.random() * 17); 

let svg = document.getElementById('svg')
// svg.style.src = `url('img/${svgshow}.png')`;
svg.setAttribute("src" , `img/${svgshow}.png`)

let temp = Math.floor(Math.random() * 75)-20; 
let tempinfo = document.getElementById("temp")
tempinfo.innerHTML = temp+'°C'


let humidity = Math.floor(Math.random() * 60); 
let humidityinfio = document.getElementById('humidity')
humidityinfio.innerHTML = 'Humidity : '+humidity+'%'

let wind = Math.floor(Math.random() * 30); 
let windspeed = document.getElementById('wind_speed')
windspeed.innerHTML = 'Wind_speed : '+wind+'km/h'