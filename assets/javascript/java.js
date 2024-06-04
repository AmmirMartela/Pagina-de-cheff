//para el registro gerando un coreoo
function registrarUsuario() {
    var nombre = document.getElementById("nombre").value.trim().toLowerCase();
    var apellidos = document.getElementById("apellidos").value.trim().toLowerCase();
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var contraseña = document.getElementById("password").value;

    if (contraseña.length < 6) {
        document.getElementById("resultadoRegistro").innerHTML = "La contraseña debe tener al menos 6 caracteres.";
        return;
    }

    var año = fechaNacimiento.substring(2, 4);
    var mes = fechaNacimiento.substring(5, 7);
    var dia = fechaNacimiento.substring(8, 10);

    var primeraLetraNombre = nombre.substring(0, 2);
    var ultimasLetrasPrimerApellido = apellidos.substring(apellidos.length - 3);

    var correo = primeraLetraNombre + ultimasLetrasPrimerApellido + año + dia + mes + "@gmail.com";

    localStorage.setItem('registeredEmail', correo);
    localStorage.setItem('registeredPassword', contraseña);

    var mensaje = "Registro exitoso.<br>Su correo es: " + correo + ".<br>Bienvenido, " + nombre.charAt(0).toUpperCase() + nombre.slice(1);
    document.getElementById("resultadoRegistro").innerHTML = mensaje;
}



//para autenticacion 
function validar(event) {
    event.preventDefault(); 
    let correo = document.getElementById("gmail").value;
    let contraseña = document.getElementById("n2").value;
    console.log(correo + " " + contraseña);
    const correoCorrecto = "admin@gmail.com";
    const contraseñaCorrecta = "123";

    if (correo === correoCorrecto && contraseña === contraseñaCorrecta) {
        document.getElementById('res1').innerHTML = "Inicio de sesión correcto";
        window.location.href = 'index.html';
        console.log("entro");
    } else {
        document.getElementById('res1').innerHTML = "Correo electrónico o contraseña incorrecta";
    }
}


// para buscar recetas
let discografia=[
    {
        nombre:"Ceviche de callo de hacha",
        anio:2018,
        canciones:["200 g de callo de hacha","1 jitomate","1/2 cebolla morada","1 manojo de cilantro","Café","2 limones","1 chile serrano"]
    },
    {
        nombre :"Ensalada de pulpo",
        anio:2021,
        canciones:[
            "200 g de pulpo cocido",
            "1 pepino",
            "1 jitomate",
            "1/2 cebolla morada","1 manojo de cilantro", "1 limón", "2 cucharadas de aceite de oliva", "Sal y pimienta al gusto"
        ]
    }
]
function buscar(){
    const name = document.getElementById('nombre').value;
    let  nombre;
    let  año;
    let  canciones;
    for ( let i = 0; i < discografia.length; i++){
        if(discografia[i].nombre == name){
            nombre = discografia[i].nombre;
            año = discografia[i].anio;
            canciones = discografia[i].canciones; //;
            break;
        }
    }
    document.getElementById('title').innerText= "Receta "+nombre; 
    document.getElementById('año').innerText= "Ingredientes "+año; 
    //mostrando los ingredientes
    const lista  = document.getElementById('canciones');
    const ul = document.createElement('ul');
    for (let i = 0; i < canciones.length; i++) {
        const li = document.createElement('li');
        li.textContent = canciones[i]; 
        ul.appendChild(li); 
    } 
    lista.appendChild(ul);
}
/**
 * validacion de entra de busqueda -(Indistinto Mayus minus y espacio)
 * validacion si existe el nombre de receta buscar
 * solucionar todos los incovenientes que puedan tener al testear la funcionalidad()
*/