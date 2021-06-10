
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './login.css';
import axios from 'axios';

const Loginer = () => {

    let history = useHistory();

    // Hooks
    const [credentials, setCredentials] = useState({email:'',password:'',options:'user'});

    const [msgError, setMensajeError] = useState('');

    // Handler
    const updateCredentials = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    const logueame = async () => {
        //Primero  testeamos los datos
        if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/){
            setMensajeError("Introduce un email válido");
        } 

        //A continuación genearmos el body de datos
        let body = {
            email: credentials.email,
            password: credentials.password,
            options: credentials.options
        }
        console.log('Este es el email, ', body.email);
        console.log('Este es el password, ', body.password);
        console.log('Hemos cruzado la frontera', body);
        
        // SWITCH ROLES
        switch (body.options){

            case 'user':
                let loguser = await axios.post('http://localhost:3005/user/login', body);
                console.log(loguser.data);
                
                if (loguser){          
                    localStorage.setItem("token", loguser.data.token);
                    localStorage.setItem("user", JSON.stringify(loguser.data.user));

                    setTimeout (()=>{
                        history.push("/loguser")
                    }, 500)
                }
                break;

            case 'coach':
                let logcoach = await axios.post('http://localhost:3005/coach/login', body);
                console.log(logcoach.data);

                if (logcoach){
                    localStorage.setItem("token", logcoach.data.token);
                    localStorage.setItem("user", JSON.stringify(logcoach.data.coach));

                    setTimeout (()=>{
                        history.push("/logcoach")
                    }, 500)
                }
                break;

            case 'admin':

                // let logadmin = await axios.post('http://localhost:3005/user/login', body);

                // const jwt = require('jsonwebtoken');  
                // const secret = "Everyone lies";
                // let auth = jwt.verify(token,secret);
                
                // if (auth.isAdmin === true && logadmin){
                //     localStorage.setItem("token", logcoach.data.token);
                //     localStorage.setItem("user", JSON.stringify(logcoach.data.coach));

                //     setTimeout (()=>{
                //         history.push("/logadmin")
                //     }, 500)
                // }

                // PARA VERIFICARLO HABRÍA QUE INSTALAR JSONWEBTOKEN, o eso o hacemos una tabla de administradores separada de los users

                break;

        }
    }
    

    

    return (

        <div className="vistaLogin">
            <pre>{JSON.stringify(credentials,null,2)}</pre>
            <div className="loginCard">
                <input type="email" name="email" onChange={updateCredentials}></input>
                <input type="password" name="password" onChange={updateCredentials}></input>
                <select id="options" name="options" defaultValue="user" onChange={updateCredentials} required="true">
                    <option className="selectinputs" value="user">User</option>
                    <option className="selectinputs" value="coach">Coach</option>
                    <option className="selectinputs" value="admin">Admin</option>
                </select>

                <div className="sendButton" onClick={()=>logueame()}>Login</div>
                <div>{msgError}</div>
            </div>
        </div>
    )

}

export default Loginer;