// nos permite guardad/modificar datos
import { useState } from "react";

function ValidacionForm(){

    // guardar el dato del username
    const [username, setUsername] = useState("")
    // guardar el dato del password
    const [password, setPassword] = useState("")

    // funcion se ejecuta cuando enviamos el formulario
    const eventoSubmit = (event) => {
        event.preventDefault();

        // Username = Valide que el usuario tenga @ y el dominio sea duocuc.cl

        // if username termina con duocuc. cl check
        if (!username.endsWith("@duocuc.cl")){
            alert("El correo debe termina con @duocuc.cl")
            return
        }

        const mayuscula = password.match(/[A-Z]/g) || []
        const numeros = password.match(/[0-9]/g) || []
        const caracter = password.match(/[^a-zA-Z0-9]/g) || []

        if(password.length > 10){
            alert("La contraseña deberia tener un largo mayor a 10 caracteres")
            return
        }

        if(mayuscula.length > 2){
            alert("La contraseña deberia tener al menos 2 o mas mayusculas")
            return
        }

        if(numeros.length > 5){
            alert("La contraseña debe tener al menos 2 o mas numeros")
            return
        }

        if(caracter.length > 1){
            alert("La contraseña deberia tener al menos 1 o mas caracteres")
        }

        console.log(mayuscula, numeros, caracter)

        // Password = Valide que el password tenga el caracter especial + 2 numeros + 2 mayuscula + largo 10 o +

        // if password caracter especial + 2 numeros + 2 mayuscula + largo 10 o + check

    }

    return(
        <form onSubmit={eventoSubmit}>
            <h2>Iniciar Sesion V2</h2>
            <input
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            ></input>

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            ></input>

        <button type="submit">
            Ingresar
        </button>

        </form>


    )

}

export default ValidacionForm