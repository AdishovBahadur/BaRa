function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// DEMO tracking sistemi
function trackOrder() {
  let input = document.getElementById("trackInput").value;
  let result = document.getElementById("trackResult");

  if (input.length < 3) {
    result.innerText = "Tracking nömrə səhvdir";
  } else {
    let statuses = [
      "Çində anbarında",
      "Gömrükdə",
      "Yoldadır ✈️",
      "Azərbaycana çatdı",
      "Çatdırıldı 🚚"
    ];

    let random = Math.floor(Math.random() * statuses.length);
    result.innerText = "Status: " + statuses[random];
  }
}
