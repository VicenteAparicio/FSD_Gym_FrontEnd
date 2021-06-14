import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import './userlessons.css';
import '../Loguser/loguser';

const Userlessons = () => {

    let history = useHistory();

    const [userData, setUserData] = useState({
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user'))
    });

    const [lessonInfo, setLessonInfo] = useState([]);

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

    const MyLessons = async () => {

        let body = {
            userId : userData.user._id,
        }

        try{
            let res = await axios.post('http://localhost:3005/user/all_my_lessons', body, {headers: {'Authorization': `Basic ${userData.token}`}});
            console.log("Este es el resultado ",res.data)
            setLessonInfo(res.data)
        } catch (err) {
            console.log({message: err.message})
        }
    }


    if (userData.user){

            return (
                <div>
                 {lessonInfo.map((lesson, index)=>(     
                    <div className= "userInformation">
                       <div>Disciplina: {lesson.title}</div> 
                        <div>Entrenador: {lesson.coach || "Sin concretar"}</div>
                        <div>Fecha: {lesson.date}</div>
                        <div>Quiénes vienen: {lesson.members}</div>
                     </div>

                     ))} 
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
    }}



export default Userlessons;