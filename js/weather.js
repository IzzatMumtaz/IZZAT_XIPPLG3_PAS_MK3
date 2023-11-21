// weather.js
const weatherAPI =
  "http://api.weatherapi.com/v1/current.json?key=7e71b6f8993649078d1145132220906&aqi=no";
let currentAudio; // Menyimpan referensi ke elemen audio saat ini

function showElement(data) {
  return `<h3 class="larger-text">${data.location.name}, ${data.location.region}, ${data.location.country}</h3>
          <p class="larger-text" style="color: white;">${data.current.last_updated}</p>
          <div class="box">
              <img src="https:${data.current.condition.icon}" alt="">
              <h1 class="larger-text" style="color: white;">${data.current.temp_c} ℃</h1>
          </div>
          <p class="larger-text" style="color: white;">${data.current.condition.text}</p>`;
}

function playSound(soundFile) {
  // Menghentikan audio yang sedang diputar jika ada
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    document.body.removeChild(currentAudio);
  }

  // Membuat elemen audio baru
  const audio = new Audio(soundFile);
  document.body.appendChild(audio);

  // Mengatur agar audio diputar secara berulang
  audio.loop = true;

  // Memainkan audio
  audio.play();

  // Menyimpan referensi ke elemen audio saat ini
  currentAudio = audio;
}

let isMuted = false;

function toggleMute() {
    const speakerIcon = document.getElementById('speakerIcon');
    
    if (isMuted) {
        isMuted = false;
        speakerIcon.src = 'img/speaker.png'; // Path relatif dari file JavaScript
        if (currentAudio) {
            currentAudio.play();
        }
    } else {
        isMuted = true;
        speakerIcon.src = 'img/mute.png'; // Path relatif dari file JavaScript
        if (currentAudio) {
            currentAudio.pause();
        }
    }
}


function setWeatherBackground(data) {
  const body = document.body;
  const conditionText = data.current.condition.text.toLowerCase();

  switch (conditionText) {
    case 'clear':
    case 'sunny':
      body.style.backgroundImage = 'url("img/weather-clear.jpg")';
      playSound('sounds/clear.mp3');
      break;
    case 'partly cloudy':
    case 'cloudy':
    case 'overcast':
      body.style.backgroundImage = 'url("img/weather-cloudy.jpg")';
      playSound('sounds/cloudy.mp3');
      break;
    case 'patchy rain nearby':
    case 'patchy light rain':
    case 'patchy rain possible':
    case 'light rain shower':
    case 'light rain':
    case 'light drizzle':
    case 'moderate or heavy rain with thunder':
      body.style.backgroundImage = 'url("img/weather-rain.jpg")';
      playSound('sounds/rain.mp3');
      break;
    case 'fog':
    case 'mist':
      body.style.backgroundImage = 'url("img/weather-fog.jpg")';
      playSound('sounds/fog.mp3');
      break;
    // Tambahkan case lain sesuai dengan kondisi cuaca yang diinginkan
    default:
      body.style.backgroundImage = 'url("img/weather-hot.jpg")';
      playSound('sounds/default.mp3');
  }
}

