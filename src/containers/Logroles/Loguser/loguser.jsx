import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import './loguser.css';

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
    }

    if (userData.token){
        return (
            <div>
                {userData.user.nick}

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