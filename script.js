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

//### Ejercicio 3: Pila de Historial (LIFO)
//
//Inicias con el historial:
//`let historial = ["google.com", "youtube.com", "facebook.com"];`
//
//**Tareas:**
//1.  Se requiere deshacer la última acción. Elimina el **ÚLTIMO** elemento del historial.
//2.  Se requiere deshacer la acción anterior. Elimina el **ÚLTIMO** elemento restante.

let historial = ["google.com", "youtube.com", "facebook.com"];
historial.pop(); //se retira el ultimo registro de historial en este caso "facebook"
historial.pop(); //se retira el ultimo registro de historial en este caso "youtube.com"

console.log(historial);

//### Ejercicio 4: Cola de Impresión (FIFO)
//
//Inicias con los siguientes trabajos en cola:
//`let colaImpresion = ["doc1.pdf", "doc2.png", "doc3.jpg"];`
//
//**Tareas:**
//1.  Se imprimió el primer documento. Retíralo de la cola.
//2.  Llega un nuevo trabajo: "doc4.txt". Añádelo al **FINAL** de la cola.
//3.  Se imprimió el siguiente documento. Retíralo de la cola.

let colaImpresion = ["doc1.pdf", "doc2.png", "doc3.jpg"];
colaImpresion.shift();
colaImpresion.push("doc4.txt");
colaImpresion.shift();

console.log(colaImpresion);

//### Ejercicio 5: Fila del Banco (Splice)
//
//Inicias con la siguiente fila:
//`;`let fila = ["Ana", "Luis", "Carlos", "Maria"]
//
//**Tareas:**
//1.  "Luis" (posición 1) se cansa y se va. Elimínalo.
//2.  "Jorge" se cuela en la fila y se pone justo después de "Ana" (en la nueva posición 1). Insértalo sin eliminar a nadie.

let fila = ["Ana", "Luis", "Carlos", "Maria"];

fila.splice(1,1); //lo que entendi es que el 1 es de la posicion en el vector y el 1 es para eliminar
fila.splice(1,0,"jorge"); // lo que entendi es que el 1 es la posicion y el 0 agrega objetos despues de la posicion indicada y en comillas dices que objeto vas a insertar

console.log(fila);

//### Ejercicio 6: Mazo de Cartas
//
//Inicias con un pequeño mazo:
//`let mazo = ["As", "Rey", "Reina", "Jota"];`
//
//**Tareas:**
//1.  Barajas el mazo invirtiendo el orden de las cartas.
//2.  Sacas la carta de arriba (el primer elemento).

let mazo = ["As", "Rey", "Reina", "Jota"];

mazo.reverse();
mazo.shift(); //teniendo en cuenta que esta en reverse en este caso el eliminado seria "jota"

console.log(mazo);

//### Ejercicio 7: Gestión de Asientos de Cine
//
//Inicias con el estado de una fila de asientos:
//`let asientos = ["Ocupado", "Libre", "Libre", "Libre", "Ocupado"];`
//
//**Tareas:**
//1.  Las tres personas en los asientos "Libre" (posiciones 1, 2 y 3) deben moverse. Cambia esos tres asientos a "Reservado".
//    (Pista: `fill` puede usar un índice de inicio y fin).

let asientos = ["Ocupado", "Libre", "Libre", "Libre", "Ocupado"];

asientos.fill("reservado",1,4); //lo que entiendo es que debes poner primero el valor a cambiar luego el inicio que seria 1 en este caso y el fin que seria 4 en este caso 

console.log(asientos);

//### Ejercicio 8: Reemplazar Elemento
//
//Inicias con una lista de productos:
//`let productos = ["Monitor", "Teclado", "Mouse Roto", "Webcam"];`
//
//**Tareas:**
//1.  El "Mouse Roto" (posición 2) debe ser reemplazado. Cámbialo por "Mouse Nuevo" usando `splice`.

let productos = ["Monitor", "Teclado", "Mouse Roto", "Webcam"];

productos.splice(2,1,"mouse nuevo");  //para reemplazar un valor debes eliminarlo primero y luego reemplazarlo 

console.log(productos);

//### Ejercicio 9: Orden Alfabético (Sort)
//
//Inicias con una lista de estudiantes desordenada:
//`let estudiantes = ["Zapata", "Alvarez", "Gomez", "Bernal"];`
//
//**Tareas:**
//1.  Ordena la lista de estudiantes alfabéticamente.

let estudiantes = ["Zapata", "Alvarez","Alvarado", "Gomez", "Bernal","Abril"];

estudiantes.sort(); //recordar que es solo el primer valor en este caso la letra inicial (en el caso de texto al parecer si ordena en orden alfabetico teniendo en cuenta las siguientes letras)

console.log(estudiantes);

//### Ejercicio 10: Vaciar un Arreglo (Fill)
//
//Inicias con una lista de puntuaciones:
//`let puntuaciones = [100, 85, 92, 78];`
//
//**Tareas:**
//1.  El juego se resetea. Cambia **TODOS** los elementos del arreglo a `0` usando `fill`.

let puntuaciones = [100, 85, 92, 78];

puntuaciones.fill("0"); //solo debes poner el producto entre comillas y va a reemplazar todos los valores de vector 

console.log(puntuaciones);

//### Ejercicio 11: Carrito de Compras (Combinado)
//
//Inicias con un carrito vacío:
//`let carrito = [];`
//
//**Tareas:**
//1.  Añade "Camisa" y "Pantalón" al final.
//2.  Añade "Zapatos" al inicio.
//3.  Revisas el carrito y decides no comprar la "Camisa" (ahora en posición 1). Elimínala.

let carrito = [];

carrito.push("camisa","pantalon");
carrito.unshift("zapatos");
carrito.splice(1,1);

console.log(carrito);

//### Ejercicio 12: Control de Versiones (Simple)
//
//Inicias con los cambios guardados:
//`let commits = ["v1.0", "v1.1"];`
//
//**Tareas:**
//1.  Haces un nuevo guardado: "v1.2". Añádelo al final.
//2.  Te das cuenta de que "v1.2" tiene un error. Deshaz el último commit (elimínalo del final).
//3.  Haces un nuevo guardado corregido: "v1.2-corregido". Añádelo al final.

let commits = ["v1.0", "v1.1"];

commits.push("v1.2");
commits.pop();
commits.push("v1.2-corregido");

console.log(commits);

//### Ejercicio 13: Receta de Cocina
//
//Inicias con los pasos de una receta:
//`let receta = ["Paso 2: Mezclar ingredientes", "Paso 3: Hornear"];`
//
//**Tareas:**
//1.  Olvidaste el primer paso. Añade "Paso 1: Pre-calentar horno" al **INICIO**.
//2.  Olvidaste el último paso. Añade "Paso 4: Servir" al **FINAL**.

let receta = ["Paso 2: Mezclar ingredientes", "Paso 3: Hornear"];

receta.unshift("Paso 1: Pre-calentar horno");
receta.push("Paso 4: Servir");

console.log(receta);

//### Ejercicio 14: Invertir y Reemplazar
//
//Inicias con una lista de palabras:
//`let palabras = ["uno", "dos", "cuatro"];`
//
//**Tareas:**
//1.  Invierte el orden del arreglo.
//2.  Te das cuenta de que "cuatro" (ahora en pos 0) es incorrecto. Reemplázalo por "tres" usando `splice`.

let palabras = ["uno", "dos", "cuatro"];

palabras.reverse();
palabras.splice(0,1,"tres");

console.log(palabras);

//### Ejercicio 15: Equipo de Proyecto
//
//Inicias con un equipo:
//`let equipo = ["Ana (Líder)", "Juan (Dev)", "Maria (Diseñadora)"];`
//
//**Tareas:**
//1.  "Juan (Dev)" (posición 1) renuncia. Elimínalo.
//2.  Se contratan dos nuevos desarrolladores: "Pedro (Dev)" y "Luisa (Dev)". Añádelos al **FINAL**.

let equipo = ["Ana (Líder)", "Juan (Dev)", "Maria (Diseñadora)"];

equipo.splice(1,1);
equipo.push("Pedro (Dev)","Luisa (Dev)");

console.log(equipo);

//### Ejercicio 16: Puestos de Estacionamiento
//
//Inicias con el estado de los puestos:
//`let parking = ["CarroA", "Libre", "Libre", "CarroB"];`
//
//**Tareas:**
//1.  El "CarroA" (posición 0) se va. Elimínalo.
//2.  Llegan dos motos. Ocupan los dos primeros lugares (que ahora son "Libre", "Libre"). Reemplaza esos dos elementos por "MotoA" y "MotoB".

let parking = ["CarroA", "Libre", "Libre", "CarroB"];

parking.shift(0,1);
parking.splice(0,2,"MotoA","MotoB");

console.log(parking);

//### Ejercicio 17: Manejo de Feed (Red Social)
//
//Inicias con publicaciones en un feed:
//`let feed = ["Foto de Ana", "Video de Juan", "Noticia de Empresa"];`
//
//**Tareas:**
//1.  Llega una nueva publicación urgente: "Alerta de Sistema". Debe ir al **INICIO**.
//2.  La publicación más antigua ("Noticia de Empresa") ya no es relevante. Elimínala del **FINAL**.

let feed = ["Foto de Ana", "Video de Juan", "Noticia de Empresa"];

feed.unshift("Alerta de Sistema");
feed.pop();

console.log(feed);