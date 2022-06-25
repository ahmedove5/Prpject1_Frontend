Storage_Info =() =>  {

  let email = document.getElementById("btn_sign").value;

  localStorage.setItem("email", email);

  let password = document.getElementById("password").value;

  localStorage.setItem("password", password);

  localStorage.getItem('email',"password");

}



// let toggle = document.getElementById("mode");

// toggle.addEventListener('click', () => {
//     document.body.classList.toggle('dark');
// })












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
