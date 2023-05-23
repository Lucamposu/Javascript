//Vole home, productos de decoracion para el hogar
//saludo al ingresar a la pagina, usando una funcion.

function saludar(){
    alert("Bienvenido a Vole Home, para acceder al catalogo mayorista ingrese sesion");
}
saludar()

//inicio de sesion. Al iniciar sesion el uruario una vez que realiza su compra, le quedan todos sus datos guardados en su cuenta. 
//declaramos las variables usuario y contrasena que fueron guardadas anteriormente por el usuario

let usuario= prompt("ingrese aqui tu usuario");
let contrasena= prompt("ingrese su contrasena");

if(usuario === "lucamposu"  && contrasena === "12345") {
    alert("Bienvenida Lucamposu a Vole Home");  //si ingresa el usuario y la contrasena correcta le da la bienvenida
} else{ 
    alert("usuario o contrasena incorrectos");  //si alguno de los dos es incorrecto le da error
}


//lista de productos. Array con un objeto por cada producto.

const productos = [
    { id: 1, nombre: "almohadon", precio: 3000 },
    { id: 2, nombre: "manta", precio: 5500 },
    { id: 3, nombre: "acolchado", precio: 20800 },
    { id: 4, nombre: "cortinas", precio: 8000 },
    { id: 5, nombre: "mantel", precio: 5000 },

];

let precioTotal = 0;

//carrito de compras
//declaramos una variable prompt para que el usuario agregue los productos que desee al carrito

let carrito = []
let opcion = prompt("Elige un producto para agregar al carrito \n1-Almohadon\n2-Manta\n3-Acolchado\n4-Cortina\n5-Mantel\ningrese x para finalizar la compra");


  while (opcion != "x") {
    switch (opcion) {
        case "1":
            console.log(productos[0]);  //mostrar por consola el producto elegido
            carrito.push(productos[0]); //en caso de elegir 1 se pushea a nuestro array carrito
            break;
            
        case "2":
            console.log(productos[1]);
            carrito.push(productos[1]);
            break;

        case "3":
            console.log(productos[2]);
            carrito.push(productos[2]);
            break;

        case "4":
            console.log(productos[3]);
            carrito.push(productos[3]);
            break;

        case "5":
            console.log(productos[4]);
            carrito.push(productos[4]);
            break;

        default:
            break;

    } 
    
    opcion=prompt(
        "Elige un producto para agregar al carrito \n1-Almohadon\n2-Manta\n3-Acolchado\n4-Cortina\n5-Mantel\ningrese x para finalizar la compra"
      );
  }

//funcion agregar al carrito para que se vayan agregando y mostrando la suma de los productos 

let carrito1 = "";

function agregaraCarrito(carrito){
    for (let i = 0; i < carrito.length; i++) {
        carrito1 = carrito1 + carrito[i].nombre + "\n";
    }
}

agregaraCarrito(carrito);

//funcion suma para ir guardando en la variable precioTotal la suma de los precios de los productos que se ingresaron al carrito

function suma(carrito){
    for (let i = 0; i < carrito.length; i++) {
        precioTotal = precioTotal + carrito[i].precio;
    }
  }

suma(carrito);

let mensaje = alert("Carrito de compras:\n" + carrito1);  //mensaje con la lista de los productos, usando un alert
let finCarrito = alert("Total a pagar:\n" + "$" + precioTotal);  //mensaje alert con el precio total guardado en la variable.

  
  