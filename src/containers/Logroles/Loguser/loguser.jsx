import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
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
            <div>
                <div className= "userInformation">
                    {userData.user.nick}
                    {userData.user.name}
                    {userData.user.email}
                    {userData.user.birthdate}
                    {userData.user.city}
                    {userData.user.country}
                 </div>

                <div className="myLessons" onClick={()=>MyLessons()}>My Lessons</div>

                <div className="logOut" onClick={()=>Logout()}>LogOut!!</div>

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