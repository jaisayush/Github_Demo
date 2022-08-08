document.getElementById("myLinks").style.display = "none";
var path = window.location.pathname;
var page = path.split("/").pop();
if (page == "index.html" || page == "") {
  document.getElementById("des-home").classList.add("active");
  document.getElementById("mob-home").classList.add("active");
}
if (page == "about.html") {
  document.getElementById("des-about").classList.add("active");
  document.getElementById("mob-about").classList.add("active");
}
if (page == "contact.html") {
  document.getElementById("des-contact").classList.add("active");
  document.getElementById("mob-contact").classList.add("active");
}
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
