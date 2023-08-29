 document.getElementById("agregar").addEventListener("click", function(event){
  var input = document.getElementById("item").value; // Valor campo usuario
  if (input) {
      localStorage.setItem("agregar", input);// Gardar clave en el almacenamiento local del navegador
  }  
  
  let datoInput = localStorage.getItem("agregar");
  const htmlContentToAppend = `<li>${datoInput}</li>`;
  document.getElementById("contenedor").innerHTML += htmlContentToAppend

 document.getElementById("item").value = "";
 
});

document.getElementById("limpiar").addEventListener("click", function(){
  document.getElementById("contenedor").innerHTML = "";
});
