import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import '../../assets/fontcolors.css';
import './register.css';

const Register = () => {

    let history = useHistory();

    // Hooks
    const [credentials, setCredentials] = useState({name:'',nick:'',email:'',password:'',bithdate:'',country:'',city:'',isAdmin:'',isActive:''});
    const [errors, setErrors] = useState({
        eName: '',
        eEmail: ''
    });

    const [msgError, setMensajeError] = useState('');

    // Handler
    const updateCredentials = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    // FUNCTION ERROR CHECK
    const checkError = (arg) => {
        switch (arg){
            case 'name':
                console.log("aaaaaaaaaaaaaaaa");
                if(credentials.name.length < 4){
                    console.log("aaaaaaaaaaaaa 22222");
                    setErrors({...errors, eName: 'El nombre debe de tener 4 caracteres'});
                }else{
                    setErrors({...errors, eName: ''});
                }
            break;
            case 'email':
            break;
        }
    }

    const logueame = async () => {
        //Primero  testeamos los datos
        if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/){
            setMensajeError("Introduce un email válido");
        } 

        //A continuación genearmos el body de datos
        let body = {
            name: credentials.name,
            nick: credentials.nick,
            email: credentials.email,
            password: credentials.password,
            birthdate: credentials.birthdate,
            country: credentials.country,
            city: credentials.city,
            isAdmin: credentials.isAdmin,
            isActive: credentials.isActive
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

                let logadmin = await axios.post('http://localhost:3005/user/login', body);

                console.log(logadmin.data.user.isAdmin)
                
                if (logadmin.data.user.isAdmin === true){
                    localStorage.setItem("token", logadmin.data.token);
                    localStorage.setItem("user", JSON.stringify(logadmin.data.user));

                    setTimeout (()=>{
                        history.push("/logadmin")
                    }, 500)
                }

                // PARA VERIFICARLO HABRÍA QUE INSTALAR JSONWEBTOKEN, o eso o hacemos una tabla de administradores separada de los users

                break;

        }
    }
    

    

    return (

        <div className="containerLogin">
            {/* <pre>{JSON.stringify(credentials,null,2)}</pre> */}
            <div className="boxLogin bgGreen">
                
                <label className="labelsLogin" for="userName">NAME</label>
                <input require="true" className="inputsLogin" type="text" name="userName" onChange={updateCredentials} onBlur={()=>checkError("name")}/>
                <label className="labelsLogin" for="nick">NICK</label>
                <input require="true" className="inputsLogin" type="text" name="nick" onChange={updateCredentials} onBlur={()=>checkError("nick")}/>
                <label className="labelsLogin" for="email">EMAIL</label>
                <input require="true" className="inputsLogin" type="email" name="email" onChange={updateCredentials} onBlur={()=>checkError("email")}/>
                <label className="labelsLogin" for="password">PASSWORD</label>
                <input require="true" className="inputsLogin" type="password" name="password" onChange={updateCredentials} onBlur={()=>checkError("password")}/>
                <label className="labelsLogin" for="birthdate">BIRTHDATE</label>
                <input className="inputsLogin" type="date" name="birthdate" onChange={updateCredentials} onBlur={()=>checkError("")}/>
                <label className="labelsLogin" for="country">COUNTRY</label>
                <input className="inputsLogin" type="text" name="country" onChange={updateCredentials} onBlur={()=>checkError("name")}/>
                <label className="labelsLogin" for="city">CITY</label>
                <input className="inputsLogin" type="text" name="city" onChange={updateCredentials} onBlur={()=>checkError("name")}/>
    
                

                <div className="sendButton txtGreen" onClick={()=>logueame()}>Login</div>
                <div>{msgError}</div>
            </div>
        </div>
    )

}

export default Register;