const pass_field1 = document.getElementById("pass1");
const pass_field2 = document.getElementById("pass2");
const Btn1 = document.getElementById("btn1")
Btn1.addEventListener("click", function () {
  if (pass_field1.type === "password") {
    pass_field1.type = "text";
    Btn1.textContent = "SHOW";
    Btn1.style.color = "#3498db";
  } else {
    pass_field1.type = "password";
    Btn1.textContent = "HIDE";
    Btn1.style.color = "#222";
  }
});
const Btn2 = document.getElementById("btn2")
Btn2.addEventListener("click", function () {
  if (pass_field2.type === "password") {
    pass_field2.type = "text";
    Btn2.textContent = "SHOW";
    Btn2.style.color = "#3498db";
  } else {
    pass_field2.type = "password";
    Btn2.textContent = "HIDE";
    Btn2.style.color = "#222";
  }
});


function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("nav");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("nav");
            includeHTML();
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
}
includeHTML();