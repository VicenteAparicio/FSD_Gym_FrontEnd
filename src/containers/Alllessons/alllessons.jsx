import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import './alllessons.css';

const Alllessons = () => {

    let history = useHistory();

    // HOOKS
    const [userData, setUserData] = useState({
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user'))
    });
    
    const [lessonInfo, setLessonInfo] = useState({info:''})
    

    useEffect(()=>{
        console.log(userData.token)
        console.log(userData.user.nick)
        MyLessons();
    },[]);
    
    const Logout = () => {
        localStorage.clear();
        setUserData("");
        history.push("/login")
    }

    // const MyLessons = async () => {
    
    //     console.log("Entramos en MyLessons")

    //     let info = axios
    //     .post('http://localhost:3005/lesson/alllessons', {headers: {'Authorization': `Basic ${userData.token}`}})
    //     .then((res)=>{
    //         console.log(res.data[0].title)
    //         console.log(res.data[1].title)
    //         setLessonInfo(res.data)
    //     })
    //     .catch((error)=>{
    //         console.log("No entra a res");
    //     });  
    // }
    

    const MyLessons = async () => {
        try{
            let res = await axios.get('http://localhost:3005/lesson/alllessons', {headers: {'Authorization': `Basic ${userData.token}`}});
            console.log("Este es el resultado ",res.data)
            setLessonInfo(res.data)
        } catch (err) {
            console.log({message: err.message})
        }
    }
    
    
    if (userData.user.isAdmin){
        for (let i in lessonInfo){
            let info = lessonInfo[i];
            return (
                <div>
                    <div className= "userInformation">
                        {info.title}
                        {info.coach}
                        {info.date}
                        {info.members}
                     </div>


                    <div className="logOut" onClick={()=>Logout()}>LogOut!!</div>

                </div>
            )
        }
    } else {
        setTimeout(()=>{
            history.push("/login");
        }, 1000)
        return (
            <div>Cargando datos de usuario</div>
        )
    }
}

export default Alllessons;