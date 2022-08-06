const API_KEY = `ec91b10d0b759309b5590aaf89d87eda`;

// search temperature
const searchTemperature = () => {
  const city = document.getElementById("city-name-input").value;
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(API)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
  document.getElementById("city-name-input").value = "";
};

// update inner text
const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

// display temperature
const displayTemperature = (data) => {
  setInnerText("city-name", data.name);
  setInnerText("temperature", data.main.temp);
  setInnerText("status", data.weather[0].main);

  // update weather status icon
  const imageURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const image = document.getElementById("image1");
  image.setAttribute("src", imageURL);
};
