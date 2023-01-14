function toggleHiddenMenu() {
  var x = document.getElementById("hiddenSection");
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
  }
}
