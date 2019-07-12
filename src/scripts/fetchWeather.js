'use strict';
export default function fetchWeather(query) {
  return new Promise((resolve, reject) => {
    const currentWeather = fetch(
      `http://api.apixu.com/v1/current.json?key=a111d758e3d74685acc181313191107&q=${query}&lang=ru`,
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.status);
      })
      .then(resolve)
      .catch(reject);
  });
}
