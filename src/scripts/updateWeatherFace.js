'use strict';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
PNotify.defaults.styling = 'material';
PNotify.defaults.icons = 'material';

const refs = {
  secWeather: document.querySelector('#weather'),
  spinner: document.querySelector('.loading'),
};
export function updateWeatherFace(data) {
  const weatherMarkup = `<h2>Current weather</h2>
  <img
    class="icon"
    src="https://${data.current.condition.icon}"
    alt="${data.current.condition.text}"
  />
  <p>Location: <span data-field="location">${data.location.name}</span></p>
  <p>Temperature: <span data-field="temp">${
    data.current.temp_c
  }&#8451;</span></p>
  <p>Humidity: <span data-field="humidity">${data.current.humidity}%</span></p>
  <p>Wind: <span data-field="wind">${data.current.wind_kph}kph</span></p>
  <p>Conditions: <span data-field="conditions">${
    data.current.condition.text
  }</span></p>
</section>`;
  refs.secWeather.innerHTML = '';
  refs.secWeather.insertAdjacentHTML('afterbegin', weatherMarkup);
  spinnerWheatherShowSwitcher(false, true);
}
export function notifyOnError(errorCode) {
  let text = '';
  if (errorCode == 1) {
    text = 'Нет прав доступа к геопозиции, используйте поиск по имени города';
  } else if (errorCode == 400) {
    text = 'Указанный город не найден';
  } else {
    text = 'Неизвестная ошибка';
  }

  PNotify.error({
    title: 'Ошибка',
    text: text,
  });
}
export function spinnerWheatherShowSwitcher(spinner, weather) {
  if (spinner) {
    refs.spinner.classList.remove('is-hidden');
  } else {
    refs.spinner.classList.add('is-hidden');
  }
  if (weather) {
    refs.secWeather.classList.remove('is-hidden');
  } else {
    refs.secWeather.classList.add('is-hidden');
  }
}
