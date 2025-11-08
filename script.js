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

//### Ejercicio 2: Pila de Tareas Pendientes (LIFO)
//
//Inicias con la siguiente pila de tareas:
//`let tareas = ["Revisar emails"];`
//
//**Tareas:**
//1.  Llega una tarea nueva: "Llamar al cliente". Ponla **ENCIMA** de la pila (al inicio).
//2.  Llega otra tarea: "Preparar reporte". Ponla **ENCIMA** de la pila (al inicio).
//3.  Completaste la última tarea que entró ("Preparar reporte"). Retírala de la pila.
//4.  Completaste la siguiente tarea ("Llamar al cliente"). Retírala.

let tareas = ["revisar emails"];
tareas.unshift("Llamar al cliente");
tareas.unshift("preparar reporte");
tareas.shift(); // se retira la ultima tarea que entro en este caso es "preparar reporte"
tareas.shift(); // se retira la ultima tarea que entro en este caso es "llamar al cliente"

console.log(tareas);