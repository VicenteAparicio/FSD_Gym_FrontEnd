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

    

    return (

        <div>
                
                <label className="labelsLogin" for="userName">NAME</label>
                <input require="true" className="inputsLogin" type="text" name="userName" onChange={updateCredentials} onBlur={()=>checkError("name")}/>

        </div>
    )

}

export default Register;