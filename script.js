//### Ejercicio 1: Lista del Súpermercado
//
//Inicias con la siguiente lista:
//`let compras = ["Manzanas"];`
//
//**Tareas:**
//1.  Añade "Leche" y "Pan" al **FINAL** de la lista.
//2.  Añade "Huevos" al **INICIO** de la lista.
//3.  Vendiste las "Manzanas" (el segundo elemento). Elimínalo.

let compras = ["manzanas"];
compras.push("leche","pan");
compras.unshift("huevos");
compras.splice(1,1);

console.log(compras);