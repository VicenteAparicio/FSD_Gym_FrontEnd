// IMPORT MOTORS
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
// IMPORT COMPONENTS
import Topjungle from '../../../components/Topjungle/topjungle';
import Titlesection from '../../../components/Titlesection/titlesection';
// IMPORT STYLES
import './loguser.css';
import '../userlessons/userlessons'

const Loguser = (props) => {

    let history = useHistory();

    // HOOKS
    // const [userData, setUserData] = useState({
    //     token: localStorage.getItem('token'),
    //     user: JSON.parse(localStorage.getItem('user'))
    // });
   

    // useEffect(()=>{
    //     console.log(userData.token)
    //     console.log(userData.user.nick)
    // },[]);
    
    const Logout = () => {
        localStorage.clear();
        // setUserData("");
        history.push("/login")
    }

    const MyLessons = () => {

       
        history.push("/userlessons")

    }

    if (props.logData.token){
        return (
            <div className="containerLog">
                <Topjungle id="hide" title="BIENVENIDO"/>
                <Titlesection title="USER"/>
                <div className="infoLog bgGreen txtWhite dinC">
                    <div className="nameInfo norwester">{props.logData.user.name}</div>
                    <div className="dataInfo">{props.logData.user.nick}</div>
                    <div className="dataInfo">{props.logData.user.email}</div>
                    <div className="dataInfo">{props.logData.user.birthdate}</div>
                    <div className="dataInfo">{props.logData.user.city}</div>
                    <div className="dataInfo">{props.logData.user.country}</div>
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

export default connect((state)=>(
    {logData:state.credentials}
))(Loguser);