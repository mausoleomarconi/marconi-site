document.addEventListener("DOMContentLoaded",events);

function events(){
    load_images();
}

function load_images(){
    var images = {
        "home":"./images/div_backgrounds/home.jpg",
        "storia":"./images/div_backgrounds/storia.jpg",
        "esperimenti":"./images/div_backgrounds/esperimenti.jpg",
        "curiosita":"./images/div_backgrounds/curiosita.jpg",
        "prenota":"./images/div_backgrounds/prenota.jpg"
    }

    var content_div = document.getElementsByClassName("content")[0];
    var id  = content_div.id;

    content_div.style.backgroundImage = "url("+images[id]+")";
}


/*function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("mappa"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap; */