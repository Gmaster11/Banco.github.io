const formHtml = document.getElementById('form')

let primerUsuario= '';

const data = [
    {
        usuarioDB:'migue',
        passwordDB:'1234',
        saldo: '500'
    },
    {
        usuarioDB:'ana',
        passwordDB:'5678',
        saldo: '280'
    },
    {
        usuarioDB:'gregorio',
        passwordDB:'9012',
        saldo: '200'
    }
]

function mostrarErrores(tipo){
    let error = document.getElementById(`error${tipo}`)
    error.classList.remove('escondido')
    error.classList.add('error')
    setTimeout(()=>{
        error.classList.remove('error')
        error.classList.add('escondido')
    }, 4000)   
}


function validarDatos(user, pass){

    for(let index = 0; index < data.length; index++){

        if(user === '' && pass === ''){
            mostrarErrores('Datos')
            console.log('hola1');

        }
        else if(user !== data[index].usuarioDB){
            mostrarErrores('Usuario')
            console.log('hola2');
        }
        else if(pass !== data[index].passwordDB){
            mostrarErrores('Password')
            console.log('hola1');
        }
        else{
            console.log('Bienvenido!');
            location.href= 'principal.html';
            primerUsuario=document.getElementById('inputUsuarioHtml').value;
            localStorage.setItem("usuario",primerUsuario);
            localStorage.setItem("saldo",data[index].saldo)
            console.log(primerUsuario);
            console.log(data[index].saldo)
            
            
        }

    }
    
}


formHtml.addEventListener('submit', (evento) => {

    evento.preventDefault();

    let usuarioHtml = document.getElementById('inputUsuarioHtml').value

    let passwordHtml = document.getElementById('inputPasswordHtml').value

    validarDatos(usuarioHtml, passwordHtml)

})





