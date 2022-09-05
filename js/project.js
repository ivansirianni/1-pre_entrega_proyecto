//Primera pre entrega. Este es un proyecto web para farmaceuticos, donde podran crear una base de datos online con medicamentos que tengan en un stock. Dentro del mismo y a través de un menu, pueden realizar multiples acciones.

//OBJETO - clase constructora
class farmacia{
    constructor(id, laboratorio, producto, precio){
        this.id = id,
        this.laboratorio = laboratorio,
        this.producto = producto,
        this.precio = precio
    }//metodo
    verDatos(){
        console.log(`En nuestro sistema encontramos:\nID: ${this.id}\nLABORATORIO: ${this.laboratorio}\nPRODUCTO: ${this.producto}\nPRECIO DE COSTO: ${this.precio}`)
    }
}
//Instanciación de Objetos - PRODUCTOS DE FARMACIA
const producto1 = new farmacia(1, "Bagó", "Tafirol", 250)

const producto2 = new farmacia(2, "Bagó", "Ibupirac", 450)

const producto3 = new farmacia(3, "Bayer", "Bayaspirina", 455)

const producto4 = new farmacia(4, "Roemmers", "Amoxidal", 950)

const producto5 = new farmacia(5, "Cassara", "Betacort Plus", 700)

const producto6 = new farmacia(6, "Ciccarelli", "Agua Oxigenada", 150)

const producto7 = new farmacia(7, "Ciccarelli", "Gazas", 280)

const producto8 = new farmacia(8, "Medigen", "Salbutamol", 550)

const producto9 = new farmacia(9, "Porta", "Bi Alcohol 500ml", 700)

const producto10 = new farmacia(10, "Bayer", "Merthiolate", 400)

const producto11 = new farmacia(11, "Elea", "Alernix Rapida Acción", 325)

//ARRAY CON LOS PRODUCTOS
const stock = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11]


//1) funcion mostrarStock() utilizando el método forEach
function mostrarStock(array){
    alert("Gracias por utilizar nuestro servicio. A través de la consola le brindamos los PRODUCTOS almacenados en nuestra base de datos")
    console.log("A continuación, nuestra lista de productos es: ")
    array.forEach((farmacia)=>{
        farmacia.verDatos()
    })
}

//2) Agregar un nuevo medicamento al Stock
function nuevoProducto(array){
    let laboratorioIngresado = prompt("Ingrese el Laboratorio")
    let productoIngresado = prompt("Ingrese el Nuevo Producto")
    let precioIngresado = prompt("Ingrese el precio de costo del producto")
    let productoCreado = new farmacia(stock.length+1, laboratorioIngresado, productoIngresado, precioIngresado)
    array.push(productoCreado)
    alert(`El producto ha sido agregado exitosamente a nuestra base de datos.`)
}

//3) Borrar un producto
function borrarUnProducto(stock){
    let posicion1 = prompt("Para eliminar un producto, seleccione la posición que ocupa el mismo en el stock, teniendo en cuenta que el primer producto, tiene posicion 0")
    let posicion2 = prompt("Seleccione una segunda posición dentro del stock, que contenga al producto que desea eliminar, teniendo en cuenta que el primer producto, tiene posicion 0")
    deleteProducto = confirm("Desea eliminar el producto seleccionado?")
        if (deleteProducto == true){
            stock.splice(posicion1, posicion2)
            alert("El producto fue eliminado de la base de datos. Revise el menú para confirmar")
        }else{
            alert("Seleccione otra opción del menú")
        }
    }   

//4)funcion buscarPorProducto. Utilizo Find
function buscarPorProducto(){
    let buscarProducto = prompt("Ingrese el Producto requerido")
    let productoEncontrado = stock.find((farmacia)=> farmacia.producto.toLowerCase() == buscarProducto.toLowerCase())
    if(productoEncontrado == undefined){
        alert("No contamos con este producto en nuestro STOCK. Si desea cargarlo en la base seleccione la opción 2")
    } else{
        console.log(`Encontramos su producto`)
        console.log(productoEncontrado)
    }
}
//5)Buscar por laboratorio. utilizo filter
function buscarPorLaboratorio(){
    let buscarLaboratorio = prompt(`Ingrese el Laboratorio y buscaremos sus productos relacionados`)
    let filtrar = stock.filter((producto)=>producto.laboratorio.toLowerCase() == buscarLaboratorio.toLocaleLowerCase())
    if(filtrar.length == 0){
        alert(`No encontramos el laboratorio solicitado`)
    }else{
        console.log(`Encontramos las siguientes coincidencias con los caracteres solicitados`)
        console.log(filtrar)
    }       
}

//Sistema de farmacia. El farmaceutico puede consultar información de diferentes productos en el stock, si el mismo no se encuentra, lo puede sumar a la base. Tambien puede filtar de forma especifica por producto o filtar por laboratorios
function programaFarmacia(){
    let opcion = parseInt(prompt(`Ingrese el número de la opción que desea realizar:
                        1 - Ver Stock de Medicamentos
                        2 - Agregar un Medicamento al Stock 
                        3 - Eliminar producto del stock
                        4 - Buscar por Producto:
                        5 - Buscar Productos por Laboratorio:
                        6 - Consultar Información y Precio Comercial
                        0 - Para salir
                        `))
    menu(opcion)
}

//Funciones que se realizan en base a la selección del usuario
function menu(opcionSeleccionada){
    switch(opcionSeleccionada){
        case 0:
            salir = true
            alert(`Gracias por utilizar nuestro sistema de almacenamiento`)
        break    
        case 1:
            mostrarStock(stock)
      	break 
   	    case 2: 
           nuevoProducto(stock)
      	break 
   	    case 3: 
           borrarUnProducto(stock)
      	break
        case 4: 
            buscarPorProducto()
      	break
        case 5: 
            buscarPorLaboratorio()
      	break
        default: 
      	alert(`La opción ingresada no es Correcta`)
    }
}

//Para salir del programa:
let salir 
while(salir != true){
    programaFarmacia()
    
}