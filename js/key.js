function initMap() {
  let options = {
    zoom: 8,
    center: { lat: 53.4808, lng: -2.2426 }
  };

  let map = new google.maps.Map(document.getElementById("map"), options);
}
