'use strict';
export default function getGeoPosition() {
  const options = { timeout: 5000, maximumAge: 1800000 };
  return new Promise((resolve, reject) => {
    window.navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}
