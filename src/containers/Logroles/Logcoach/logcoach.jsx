import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import './logcoach.css';

const Logcoach = () => {

    let history = useHistory();

    // HOOKS
    const [coachData, setCoachData] = useState({
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user'))
    });
   

    useEffect(()=>{
        console.log(coachData.token)
        console.log(coachData.user.nick)

    },[]);
    
    const Logout = () => {
        localStorage.clear();

        setCoachData("");
    }

    if (coachData.token){
        return (
            <div>
                {coachData.coach.nick}

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

export default Logcoach;