Storage_Info =() =>  {

  let email = document.getElementById("email").value;
 

  localStorage.setItem("email", email);

  let password = document.getElementById("password").value;
  

  localStorage.setItem("password", password);

  localStorage.getItem("email","password");

}












const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    if (panel.classList.contains("active") === true) {
      removeActiveClasses();
    } else {
        removeActiveClasses();
        panel.classList.add("active");
    }
    
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
