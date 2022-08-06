document.getElementById("myLinks").style.display = "none";
var path = window.location.pathname;
var page = path.split("/").pop();
if (page == "index.html") {
  document.getElementById("home").classList.add("active");
}
if (page == "about.html") {
  document.getElementById("about").classList.add("active");
}
if (page == "contact.html") {
  document.getElementById("contact").classList.add("active");
}
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
