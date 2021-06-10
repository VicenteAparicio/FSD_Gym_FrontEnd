import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import './logadmin.css';

const Logadmin = () => {

    let history = useHistory();

    // HOOKS
    const [adminData, setAdminData] = useState({
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user'))
    });
   

    useEffect(()=>{
        console.log(adminData.token)
        console.log(adminData.user.nick)

    },[]);
    
    const Logout = () => {
        localStorage.clear();

        setAdminData("");
    }

    if (adminData.token){
        return (
            <div>
                {adminData.coach.nick}

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

export default Logadmin;