const btn = document.getElementById('botao')
const btn2 = document.getElementById("botao2")
const btn3 = document.getElementById("botao3")
 
btn.addEventListener("click", ()=> {
   btn.classList.toggle("active")
})

btn2.addEventListener("click", ()=> {
    btn2.classList.toggle("active")
 })

 btn3.addEventListener("click", ()=> {
   btn3.classList.toggle("active")
})





    let inputElement = document.getElementById("pesquisa");   
    
    let sectionElements = document.querySelectorAll("section");

    let noresult = document.getElementById("semResultado")

     inputElement.addEventListener("input", (e) => 
      { let inputed = e.target.value.toLowerCase(); 
          sectionElements.forEach((section) => {
             let h1 = section.querySelector("h1"); 
              if (h1 && h1.textContent.toLowerCase().includes(inputed))
                { 
                   section.style.display = "block"; 

             } else {
                section.style.display = "none"; 
               
             } 
            });
          });