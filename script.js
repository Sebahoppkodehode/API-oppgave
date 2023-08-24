const apiKey = "d0cfd2cc27b04e3e0c10e5a238f6fc8e";

const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bergen";

async function checkWeather() {
  const response = await fetch(apiUrl + "&appid=${apiKey}");
  var data = await response.json();

  console.log(data);
}

checkWeather();
