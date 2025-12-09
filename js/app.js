const keyword = document.querySelector(".keyword");
const btnSearch = document.querySelector(".btn-search");
const container = document.getElementById("container");

function searchWeather() {
  fetch(`${weatherAPI}&q=${keyword.value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let element = showElement(data);
      container.innerHTML = element;
      setWeatherBackground(data);
    });
}

btnSearch.onclick = searchWeather;
keyword.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    searchWeather();
  }
});

