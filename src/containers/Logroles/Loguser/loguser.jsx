import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
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
        history.push("/login")
    }

    const MyLessons = () => {
        
        history.push("/userlessons")

        console.log("Id barrabaja",userData.user._id)
        let body = {
            userId : userData.user._id,
        }

        axios
        .post('http://localhost:3005/user/all_my_lessons', body, {headers: {'Authorization': `Basic ${userData.token}`}})
        .then((res)=>{
            console.log(res.data[0].title)
            console.log(res.data[1].title)
            localStorage.setItem(res)
        })
        .catch((error)=>{
            console.log("No entra a res");
        });  
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