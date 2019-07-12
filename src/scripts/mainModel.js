'use strict';
import fetchWeather from './fetchWeather';
import getGeoPosition from './getGeoPosition';
import { updateWeatherFace } from './updateWeatherFace';
import { notifyOnError } from './updateWeatherFace';
import { spinnerWheatherShowSwitcher } from './updateWeatherFace';
const refs = { subbmitBtn: document.querySelector('#search-form') };
refs.subbmitBtn.addEventListener('submit', handleCitySubmit);
{
  // function handleCitySubmit(e) {
  //   e.preventDefault();
  //   spinnerWheatherShowSwitcher(true, false);
  //   const enteredCity = e.currentTarget.elements[0].value;
  //   const getWheaterByEnteredCity = async enteredCity => {
  //     try {
  //       spinnerWheatherShowSwitcher(true, false);
  //       const res = await fetchWeather(enteredCity);
  //       return res;
  //     } catch (err) {
  //       spinnerWheatherShowSwitcher(false, false);
  //       throw err.message;
  //     }
  //   };
  //   getWheaterByEnteredCity(enteredCity)
  //     .then(curWheatherData => updateWeatherFace(curWheatherData))
  //     .catch(err => notifyOnError(err));
  // }
}
function handleCitySubmit(e) {
  e.preventDefault();
  spinnerWheatherShowSwitcher(true, false);
  const enteredCity = e.currentTarget.elements[0].value;
  fetchWeather(enteredCity)
    .then(curWheatherData => updateWeatherFace(curWheatherData))
    .catch(err => {
      spinnerWheatherShowSwitcher(false, false);
      notifyOnError(err.message);
    });
}
{
  // const getWeatherGeoByGeoAPI = async () => {
  //   try {
  //     spinnerWheatherShowSwitcher(true, false);
  //     const res = await getGeoPosition();
  //     return res.coords;
  //   } catch (err) {
  //     spinnerWheatherShowSwitcher(false, false);
  //     throw err;
  //   }
  // };
  // getWeatherGeoByGeoAPI()
  //   .then(location => `${location.latitude}+ ${location.longitude}`)
  //   .then(dataString => fetchWeather(dataString))
  //   .then(data => updateWeatherFace(data))
  //   .catch(err => notifyOnError(err.code));
}
spinnerWheatherShowSwitcher(true, false);
getGeoPosition()
  .then(location => `${location.coords.latitude}+ ${location.coords.longitude}`)
  .then(dataString => fetchWeather(dataString))
  .then(data => updateWeatherFace(data))
  .catch(err => {
    spinnerWheatherShowSwitcher(false, false);
    notifyOnError(err.code);
  });
