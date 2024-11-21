const btn = [...document.querySelectorAll('#botao')]

 btn.map((el)=>{
   el.addEventListener("click", (evt)=>{
      const el = evt.target
      el.classList.toggle("active")
   
   })
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