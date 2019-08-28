// refactor that logic

function myFunction() {
  var el = document.getElementsByClassName("home")[0];
  var about = document.getElementsByClassName("about")[0];

  if(el.style.display !== "block"){
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }

  if(about.style.display !== "none"){
    about.style.display = "none";
  } else {
    about.style.display = "block";
  }

  console.log('this works')
}
