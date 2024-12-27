const btn = [...document.querySelectorAll('.botao')]

 btn.map((el)=>{
   el.addEventListener("click", (evt)=>{
      const el = evt.target
      el.classList.toggle("active")
   
   })
 })



 
 document.addEventListener("DOMContentLoaded", () => {
  let inputElement = document.getElementById("pesquisa");   
  let sectionElements = document.querySelectorAll("section");
  let noresult = document.getElementById("semResultado");
  let footer = document.getElementById("footer");

  inputElement.addEventListener("input", (e) => {
    let inputed = e.target.value.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let found = false;
    sectionElements.forEach((section) => {
      let h1 = section.querySelector("h2");
      if (h1 && h1.textContent.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(inputed)) {
        section.style.display = "block";
        found = true;
      } else {
        section.style.display = "none";
      }

      if (inputed === "") {
        noresult.style.display = "none";
        footer.classList.remove('fundo');
      } else {
        noresult.style.display = found ? "none" : "block";
        footer.classList.add('fundo');
      }
    });
  });
});