// nos permite guardad/modificar datos
import { useState } from "react";

function LoginForm(){

    // guardar el dato del username
    const [username, setUsername] = useState("")
    // guardar el dato del password
    const [password, setPassword] = useState("")

    // funcion se ejecuta cuando enviamos el formulario
    const eventoSubmit = (event) => {
        event.preventDefault();

        console.log("Login", username, "Password", password)
    }

    return(
        <form onSubmit={eventoSubmit}>
            <h2>Iniciar Sesion</h2>
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

export default LoginForm