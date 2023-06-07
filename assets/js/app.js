// Obtener referencia al botón de suscripción
var subscribeButton = document.querySelector('.input_button'); // Selecciona el input deseado


  //Función para validar el formato del email  "texto@texto.texto"
function validateEmail(email) {
    // Expresión regular para validar el formato del email
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (regex.test(email)) {
    return true; // El email es válido
    } else {
    return false; // El email no es válido
    }
}
function clearInputValue(inputSelector){
    document.querySelector(inputSelector).value= ''
} 
// Función para mostrar el mensaje
function showMessageClass() {
    var messageElement = document.getElementById('message');
    messageElement.classList.add('message-visible');
  }
function hideMessageClass() {
    var messageElement = document.getElementById('message');
    messageElement.classList.remove('message-visible');
}

function applyBorderClass() {
    var inputElement = document.querySelector('.first_input');
    inputElement.classList.add('first_input-error');
  }
function removeBorderClass() {
    var inputElement = document.querySelector('.first_input');
    inputElement.classList.remove('first_input-error');
}
function applyMarginClass(){
    var inputElement = document.querySelector('.first_input');
    inputElement.classList.add('first_input-margin');

}
function removeMarginClass(){
    var inputElement = document.querySelector('.first_input');
    inputElement.classList.remove('first_input-margin');
}

// Agregar evento de clic al botón
subscribeButton.addEventListener('click', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  // Obtener el valor del campo de entrada
  var inputValue = document.querySelector('.first_input').value;

  // Realizar las validaciones
  
  if (inputValue.trim() === '') {
    showMessageClass(); // Campo vacío
    applyBorderClass(); 
    applyMarginClass();
  } else if (!validateEmail(inputValue)) {
    showMessageClass(); // Email no valido
    applyBorderClass();
    applyMarginClass();
  } else if (inputValue.length < 5) {
    showMessageClass(); // Menos de 5 letras
    applyBorderClass();
    applyMarginClass();
  } else {
    hideMessageClass(); // Mensaje vacío (sin errores)
    removeBorderClass();
    removeMarginClass();
  }
  clearInputValue('.first_input');
});