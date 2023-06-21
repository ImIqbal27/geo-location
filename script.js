const display = document.getElementById("display");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    display.innerText = "Geo Location is not supported by this browser.";
  }
}
function showPosition(position) {
  display.innerText =
    "Latitude : " +
    position.coords.latitude +
    " Longitude : " +
    position.coords.longitude;
}
function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      display.innerHTML = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      display.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      display.innerHTML = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      display.innerHTML = "An unknown error occurred.";
      break;
  }
}
