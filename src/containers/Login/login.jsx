import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import Topjungle from '../../componentes/Topjungle/topjungle';
import Titlesection from '../../componentes/Titlesection/titlesection';

import '../../assets/fontcolors.css';
import './login.css';

const Loginer = () => {

    let history = useHistory();

    // Hooks
    const [credentials, setCredentials] = useState({email:'',password:'',options:'user'});

    const [msgError, setMensajeError] = useState('');

    // Handler
    const updateCredentials = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    // FUNCION LOGUEAR
    const logueame = async () => {
        //Primero  testeamos los datos
        if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/){
            setMensajeError("Introduce un email válido");
        } 

        //A continuación genearmos el body de datos
        let body = {
            email: credentials.email.toLocaleLowerCase(),
            password: credentials.password,
        }
        
        console.log('Este es el email, ', body.email);
        console.log('Este es el password, ', body.password);
        console.log(credentials.options)
        console.log('Hemos cruzado la frontera', body);
        
        // SWITCH ROLES
        switch (credentials.options){
            
            case 'user':
                let loguser = await axios.post('http://localhost:3005/user/login', body);
                console.log("Estamos en user login", loguser.data);
                
                
                if (loguser){          
                    localStorage.setItem("token", loguser.data.token);
                    localStorage.setItem("user", JSON.stringify(loguser.data.user));

                    console.log(loguser.data.token);
                    console.log(JSON.stringify(loguser.data.user));

                    setTimeout (()=>{
                        history.push("/loguser")
                    }, 500)
                }
                break;

            case 'coach':
                let logcoach = await axios.post('http://localhost:3005/coach/login', body);

                if (logcoach){
                    localStorage.setItem("tokencoach", logcoach.data.token);
                    localStorage.setItem("coach", JSON.stringify(logcoach.data.coach));

                    setTimeout (()=>{
                        history.push("/logcoach")
                    }, 500)
                }
                break;

            case 'admin':
                let logadmin = await axios.post('http://localhost:3005/user/login', body);

                if (logadmin.data.user.isAdmin === true){
                    localStorage.setItem("token", logadmin.data.token);
                    localStorage.setItem("user", JSON.stringify(logadmin.data.user));

                    setTimeout (()=>{
                        history.push("/logadmin")
                    }, 500)
                }
                break;

        }
    }
    

    

    return (

        <div className="containerLogin">
            <Topjungle id="hide" title="ENTRA EN TU PERFIL"/>
            <Titlesection title="LOGIN"/>
            {/* <pre>{JSON.stringify(credentials,null,2)}</pre> */}
            <div className="boxLogin bgGreen">
                <label className="labelsLogin dinC" for="email">EMAIL</label>
                <input className="inputsLogin" type="email" name="email" onChange={updateCredentials} placeholder="Email"></input>
                <label className="labelsLogin dinC" for="password">PASSWORD</label>
                <input className="inputsLogin" type="password" name="password" onChange={updateCredentials} placeholder="Password"></input>
                <select id="options" name="options" className=" selectinputs dinC" defaultValue="user" onChange={updateCredentials}>
                    <option value="user">USER</option>
                    <option value="coach">COACH</option>
                    <option value="admin">ADMIN</option>
                </select>

                <div className="sendButton txtGreen dinC" onClick={()=>logueame()}>Login</div>
                <div>{msgError}</div>
            </div>
        </div>
    )

}

export default Loginer;