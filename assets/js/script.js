function menuToggle() {
    let x = document.getElementById("links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

function changeIcon(x) {
    x.classList.toggle("fa-xmark");
}