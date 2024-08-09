

    const key = "07aa7f6eb565e093ad380c6b0c04f979"

function putonScreen (data){
  console.log(data)
  document.querySelector(".city").innerHTML = "weather in " + data.name
  document.querySelector(".temperature").innerHTML = Math.ceil (data.main.temp) + "°C"
  document.querySelector(".description").innerHTML = data.weather [0].description
  document.querySelector(".humidade").innerHTML = "Humidity " + data.main.humidity + "%"
  document.querySelector(".iconclouds").src ="https://openweathermap.org/img/wn/" + data.weather[0].icon
   + ".png"


}



   
  async  function findCity (city) {

    const data = await fetch ("https://api.openweathermap.org/data/2.5/weather?q="
       + city 
       + "&appid=" 
       + key+ "&units=metric")

   .then(response => response.json())    
        putonScreen(data)
      

}

function changeCity() {
  const city = document.querySelector(".type-city").value



findCity(city)
}





