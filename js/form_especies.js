let form = document.getElementById("formId");
let submitForm = document.querySelector(".sign");
form.addEventListener("submit", function(event){
    validateDates(event);
});
submitForm.addEventListener("mouseenter", () => {
    submitForm.style.backgroundColor = "#ff5733"; // Cambia el color al pasar el ratón
    
});
submitForm.addEventListener("mouseleave", () => {
    submitForm.style.backgroundColor = "#007bff"; // Restaura el color original
});
;

function validateDates(event){
    event.preventDefault(); //<---- Evita el envío del formulario hasta que se hagan todas las validaciones
    let validation = true;

    const validateNom = /^[A-Za-z\s]+$/ //<--- Solo letras y espacios
    document.querySelectorAll(".error-message").forEach(el => el.textContent = ""); //<--- Reinicia los mensajes de errores previos

    let nomForm = document.getElementById("nom");
    let mailForm = document.getElementById("email");
    let titForm = document.getElementById("titulo");


    if (!validateNom.test(nomForm.value)){
        console.log("Error nombre")
        validation = false;
        nomForm.classList.add("error-box");
        document.getElementById("error-nom").textContent="Por favor, ingresa un nombre válido.";
    }else{
        nomForm.classList.remove("error-box");
    }
    
    if (!mailForm.value){
        validation = false;
        document.getElementById("error-email").textContent="Por favor, ingresa una fecha de nacimiento válida.";

    }
    if (!validateNom.test(titForm.value)){
        console.log("Error titulo")
        validation = false;
        titForm.classList.add("error-box");
        document.getElementById("error-tit").textContent="Por favor, ingresa un titulo válido.";
    }else{
        nomForm.classList.remove("error-box");
    }

    if (validation) {
        form.submit(); //<---- Evita el envío del formulario hasta que se hagan todas las validaciones
        window.location.href = "http://127.0.0.1:5500/css-EspeciesEnPeligro-Jhon/index.html";
    }
}