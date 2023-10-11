let time = new(Date);

let hours = time.getHours();
let minute = time.getMinutes();
let seconds = time.getSeconds();

let current = document.getElementById("current");
let day1 = document.getElementById("day1");
let day2 = document.getElementById("day2");
let day3 = document.getElementById("day3");



const weatherApiKey = "GHTDEJZBQ4TUTM2CZH5U4WS9J";
// const location = "Tønsberg";
const weatherUrl =
  `https://api.weatherapi.com/v1/forecast.json?key=31f44f0e648d46fb88670919231110&q=London&days=3&aqi=no&alerts=yes`;

async function getWeather() {
  try {
    const data = await fetch(weatherUrl, {
      method: "GET",
      headers: {
        "Transfer-Encoding": "chunked",
        "Connection": "keep-alive",
        "Vary": "Accept-Encoding",
        "CDN-PullZone": "93447",
        "CDN-Uid": "8fa3a04a-75d9-4707-8056-b7b33c8ac7fe",
        "CDN-RequestCountryCode": "GB",
        "Age": "0",
        "x-weatherapi-qpm-left": "5000000",
        "CDN-ProxyVer": "1.04",
        "CDN-RequestPullSuccess": "True",
        "CDN-RequestPullCode": "200",
        "CDN-CachedAt": "10/11/2023 07:12:53",
        "CDN-EdgeStorageId": "1055",
        "CDN-Status": "200",
        "CDN-RequestId": "e01c040a2448ccfd2db9e3f0c8af3c90",
        "CDN-Cache": "MISS",
        "Cache-Control": "public, max-age=180",
        "Content-Type": "application/json",
        "Date": "Wed, 11 Oct 2023 07:12:53 GMT",
        "Server": "BunnyCDN-DE1-752",
        "Via": "1.1 varnish (Varnish/6.0)"
      },
    });

    if (!data.ok) {
      throw new Error("Network response was not ok");
    }

    const response = await data.json();
    console.log(response);


    current.innerHTML = `
    <h2>${response.location.name}, ${response.location.country}</h2>
    <img src=${response.current.condition.icon}></img>`


  } catch (err) {
    console.error(err);
  }
  
}

getWeather();

