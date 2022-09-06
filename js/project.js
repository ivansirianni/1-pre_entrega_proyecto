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
class sucursales{
    constructor(direccion, zona, telefono){        
        this.direccion = direccion,
        this.zona = zona,
        this.telefono = telefono
    }
    verZona(){
        console.log(`Visita nuestras sucursales:\nNOMBRE: Farmacia Ivo\nZONA: ${zona}\nDIRECCIÓN: ${direccion}\nTELEFONO: ${telefono}`)
    }
}
//Instanciación de Objetos - PRODUCTOS DE FARMACIA
const producto1 = new farmacia(0, "Bagó", "Tafirol", 250)

const producto2 = new farmacia(1, "Bagó", "Ibupirac", 450)

const producto3 = new farmacia(2, "Bayer", "Bayaspirina", 455)

const producto4 = new farmacia(3, "Roemmers", "Amoxidal", 950)

const producto5 = new farmacia(4, "Cassara", "Betacort Plus", 700)

const producto6 = new farmacia(5, "Ciccarelli", "Agua Oxigenada", 150)

const producto7 = new farmacia(6, "Ciccarelli", "Gazas", 280)

const producto8 = new farmacia(7, "Medigen", "Salbutamol", 550)

const producto9 = new farmacia(8, "Porta", "Bi Alcohol 500ml", 700)

const producto10 = new farmacia(9, "Bayer", "Merthiolate", 400)

const producto11 = new farmacia(10, "Elea", "Alernix Rapida Acción", 325)


const sucursal1 = new sucursales("Bajada Puccio 1552", "NORTE", 4251236)

const sucursal2 = new sucursales("Arijon 155 Bis", "SUR", 4125842)

const sucursal3 = new sucursales("Entre Ríos 729", "CENTRO", 4568523)

const sucursal4 = new sucursales("Pellegrini 6523", "OESTE", 4362145)

const sucursal5 = new sucursales("Bv. Seguí 6411", "SUDOESTE", 4302562)

//ARRAY CON LOS PRODUCTOS
const stock = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11]

const locales = [sucursal1, sucursal2, sucursal3, sucursal4, sucursal5]


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
    alert(`El producto ha sido agregado exitosamente a nuestra base de datos. Revise nuestro catalogo para confirmar.`)
}

//3) Borrar un producto
function borrarUnProducto(stock){
    let posicion1 = prompt("Para eliminar un producto, indique el ID del mismo en el stock")
    let posicion2 = prompt("Indique el ID del producto siguiente para poder eliminar el primero. Si desea eliminar mas de uno, indique el ID del producto hasta donde quiera que sean eliminados.")
    deleteProducto = confirm("Desea eliminar el/los productos seleccionados?")
        if (deleteProducto == true){
            stock.splice(posicion1, posicion2)
            alert("El/los productos fueron eliminados de la base de datos. Revise el menú para confirmar")
        }else{
            alert("Seleccione otra opción del menú")
        }
    }   

//4)funcion buscarPorProducto. Utilizo Find
function buscarPorProducto(){
    let buscarProducto = prompt("Ingrese el ID del Producto requerido")
    let productoEncontrado = stock.find((farmacia)=> farmacia.id == buscarProducto)
    if(productoEncontrado == undefined){
        alert("No contamos con este producto en nuestro STOCK. Si desea cargarlo en la base seleccione la opción 2")
    } else{
        alert("Los resultado de la busqueda se muestran en la consola")
        console.log(`Coincidencias de Busqueda`)
        console.log(productoEncontrado)
    }
}
//5)Buscar por laboratorio. utilizo filter
function buscarPorLaboratorio(){
    let buscarLaboratorio = prompt(`Ingrese el Laboratorio y buscaremos sus productos relacionados`)
    let filtrar = stock.filter((producto)=>producto.laboratorio.toLowerCase() == buscarLaboratorio.toLowerCase())
    if(filtrar.length == 0){
        alert(`No encontramos el laboratorio solicitado`)
    }else{
        alert("Encontramos las siguientes coincidencias. Los resultado de la busqueda se muestran en la consola. Presione aceptar.")
        console.log(`Encontramos las siguientes coincidencias con los caracteres solicitados`)
        console.log(filtrar)
    }       
}
//6) Información sobre las diferentes sucursales de la cadena de farmacias
function buscarPorSucursal(){
    let buscarSucursal = prompt("Para conocer la información requerida de las diferentes sucursales, ingrese la ZONA de referencia (NORTE, SUR, CENTRO, OESTE, SUDOESTE)")
    let farmaciaEncontrada = locales.find((sucursales)=> sucursales.zona.toLowerCase() == buscarSucursal.toLowerCase())
    if(farmaciaEncontrada == undefined){
        alert("Ingrese una Zona valida")
    } else{
        alert("Los resultado de la busqueda se muestran en la consola")
        console.log(`Coincidencias de Busqueda`)
        console.log(farmaciaEncontrada)
    }
}

//Sistema de farmacia. El farmaceutico puede consultar información de diferentes productos en el stock, si el mismo no se encuentra, lo puede sumar a la base. Tambien puede filtar de forma especifica por producto o filtar por laboratorios
function programaFarmacia(){
    let opcion = parseInt(prompt(`Ingrese el número de la opción que desea realizar:
                        1 - Ver Stock de Medicamentos
                        2 - Agregar un Medicamento al Stock 
                        3 - Eliminar producto del stock
                        4 - Buscar un producto con su ID:
                        5 - Buscar productos por Laboratorio:
                        6 - Ver Información de Sucursales                        
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
        case 6:
            buscarPorSucursal()
        default: 
      	alert(`Si desea salir, presione 0`)
    }
}

//Para salir del programa:
let salir 
while(salir != true){
    programaFarmacia()
    
}