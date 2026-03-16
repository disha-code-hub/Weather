const button = document.getElementById("search");
let city = "";
button.addEventListener("click", () => {
  city = document.getElementById("enter-city").value.trim();
  getAPIData(city);
  
});
async function getAPIData(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2439c30c487c1d2492460a96fbb54e4e`,
  );
  const data = await response.json();
  console.log(data);
  getDetails(data);
}
function getDetails(data){
const weatherImgDiv=document.getElementById("weather-icon");
const weatherImg=document.createElement("img")
weatherImg.setAttribute("id","weather-img")// or weatherImg.id="weather-img"
weatherImg.src=`images/${data.weather[0].main.toLowerCase()}.png`;
weatherImgDiv.replaceChild(weatherImg, document.getElementById("weather-img"))//or weatherImgDiv.firstElementChild
const temp=document.getElementById("temp")
temp.innerText=((data.main.temp)-273.15).toFixed(2);
const city=document.getElementById("city-name");
city.innerText=data.name;
const humidity=document.getElementById("humidity-value");
humidity.innerText=`${data.main.humidity}%`
const windSpeed=document.getElementById("wind-speed-value")
windSpeed.innerText=`${(data.wind.speed*3.6).toFixed(2)} Km/h`;

}






