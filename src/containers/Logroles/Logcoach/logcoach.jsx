
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

import Topjungle from '../../../componentes/Topjungle/topjungle';
import Titlesection from '../../../componentes/Titlesection/titlesection';

import Modifycoach from '../../../componentes/options/modify/Modifycoach/modifycoach';

import './logcoach.css';

const Logcoach = () => {

    let history = useHistory();

    // HOOKS
    const [credentials, setCredentials] = useState({name:'',email:'',password:'',birthdate:'',country:'',city:'',isActive:''});

    const [coachData, setCoachData] = useState({
        token: localStorage.getItem('tokencoach'),
        coach: JSON.parse(localStorage.getItem('coach'))
    });
   
    const [visual, setVisual] = useState('');

    useEffect(()=>{
        console.log(coachData.token)
        console.log(coachData.coach.name)

    },[]);

    
    // Handler
    const updateCredentials = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }
    
    // FUNCTIONS (OPTIONS)
    const Logout = () => {
        localStorage.clear();
        setCoachData("");
        history.push("/login")
    }

    const Modify = (show) => {
        
        let body = {
            name: credentials.name,
            email: credentials.email,
            password: credentials.password,
            birthdate: credentials.birthdate,
            country: credentials.country,
            city: credentials.city,
            isActive: credentials.isActive
        }

        axios
        .post('http://localhost:3005/coach/modify', body)
        .then((res)=>{})
        .catch((error)=>{
            console.log(error);
        });  
    }

    if (coachData.token){
        return (
            <div className="containerLog">

                <Topjungle id="hide" title="BIENVENIDO"/>
                <Titlesection title={coachData.coach.name}/>
                
                <div className="infoLog bgGreen txtWhite dinC">
                    <div className="nameInfo norwester">{coachData.coach.name}</div>                    
                    <div className="dataInfo">{coachData.coach.level}</div>
                    <div className="dataInfo">{coachData.coach.tasks}</div>
                    <div className="dataInfo">{coachData.coach.instagram}</div>
                    <div className="dataInfo">{coachData.coach.birthdate}</div>
                </div>
                <div className="infoLog txtWhite dinC">
                    <div className="optionsButtons bgGreen" onClick={()=>Modifycoach()}>Modify</div>
                    <div className="optionsButtons bgGreen" onClick={()=>Logout()}>LogOut!!</div>
                </div>
                
            </div>
        )
    } else {
        setTimeout(()=>{
            history.push("/login");
        }, 1000)
        return (
            <div>Cargando datos de usuario</div>
        )
    }
}

export default Logcoach;