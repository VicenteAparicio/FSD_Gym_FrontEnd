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
        console.log(adminData.user.name)
        console.log(adminData.user.isAdmin)

    },[]);
    
    const Logout = () => {
        localStorage.clear();

        setAdminData("");
    }
    if (adminData.user.isAdmin == true){
        return (
            <div>
                {adminData.user.name}

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