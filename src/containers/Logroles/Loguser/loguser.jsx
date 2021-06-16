import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import Topjungle from '../../../components/Topjungle/topjungle';
import Titlesection from '../../../components/Titlesection/titlesection';

import './loguser.css';
import '../userlessons/userlessons'

const Loguser = () => {

    let history = useHistory();

    // HOOKS
    const [userData, setUserData] = useState({
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user'))
    });
   

    useEffect(()=>{
        console.log(userData.token)
        console.log(userData.user.nick)
    },[]);
    
    const Logout = () => {
        localStorage.clear();
        setUserData("");
        history.push("/login")
    }

    const MyLessons = () => {

        console.log("Te empuja a userlessons")
        history.push("/userlessons")

    }

    if (userData.token){
        return (
            <div className="containerLog">
                <Topjungle id="hide" title="BIENVENIDO"/>
                <Titlesection title="USER"/>
                <div className="infoLog bgGreen txtWhite dinC">
                    <div className="nameInfo norwester">{userData.user.name}</div>
                    <div className="dataInfo">{userData.user.nick}</div>
                    <div className="dataInfo">{userData.user.email}</div>
                    <div className="dataInfo">{userData.user.birthdate}</div>
                    <div className="dataInfo">{userData.user.city}</div>
                    <div className="dataInfo">{userData.user.country}</div>
                </div>
                <div className="infoLog txtWhite dinC">
                    <div className="optionsButtons bgGreen" onClick={()=>MyLessons()}>MY LESSONS</div>
                    <div className="optionsButtons bgGreen" onClick={()=>Logout()}>LOGOUT</div>
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

export default Loguser;