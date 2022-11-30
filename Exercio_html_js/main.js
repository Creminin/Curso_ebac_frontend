const form = document.getElementById("form");
const numberA = document.getElementById("numberA");
const numberB = document.getElementById("numberB");

form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const TextSucesso = document.getElementById("TextSucesso")
  
  if (parseInt(numberB.value) > parseInt(numberA.value)) {
    TextSucesso.style.display = "block"
    document.getElementById("TextError").style.display = "none"
  } else {
    document.getElementById("TextError").style.display = "block"
    TextSucesso.style.display = "none"
  }
})

