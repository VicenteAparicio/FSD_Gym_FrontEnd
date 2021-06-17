import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import Topjungle from '../../../components/Topjungle/topjungle';
import Titlesection from '../../../components/Titlesection/titlesection';

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
   /*      console.log(userData.token)
        console.log(userData.user.nick) */
       /*  console.log("Hola useEffect") */
        MyLessons();
        
    },[]);

    const Logout = () => {
        localStorage.clear();
       /*  setUserData(""); */
        history.push("/login")
    }

    const Back = () => {
        history.push("/loguser")
    }

    const MyLessons = async () => {

        console.log("Entramos a MyLessons");
        let body = {
            userId : userData.user._id,
        }

        try{
            console.log("A continuación viene res etc")
            let res = await axios.post('http://localhost:3005/user/all_my_lessons', body, {headers: {'Authorization': `Basic ${userData.token}`}});
            console.log("Este es el resultado ",res.data)
            setLessonInfo(res.data)
        } catch (err) {
            console.log({message: err.message})
        }
    }


    if (userData.user){

            return (
                <div className="lessonsContainer">
                    <Topjungle id="hide" title="MANAGE LESSONS"/>
                    <Titlesection title='MY LESSONS'/>
                    <div className="lessonsBox">
                        {lessonInfo.map((lesson, index)=>(     
                        <div className="lessonCard bgGreen txtWhite">
                            <div className="lessonName norwester">Disciplina: {lesson.title}</div> 
                            <div className="lessonInfo dinC">Entrenador: {lesson.coaches[0].name}</div>
                            <div className="lessonInfo dinC">Fecha: {lesson.date}</div>
                            <div className="lessonInfo dinC">Quiénes vienen: {lesson.members}</div>
                        </div>

                     ))}
                    </div>
                    <div className="bLessonsBox">
                        <div className="bLessons bgGreen dinC" onClick={()=>Logout()}>Logout</div>
                        <div className="bLessons bgGreen dinC" onClick={()=>Back()}>Back</div>
                    </div>
                
                </div>
            )
            
         } else {
        setTimeout(()=>{
            console.log("No te lo coge y te escupe a login")
            history.push("/login");
        }, 7000)
        return (
            <div>Cargando datos de usuario</div>
        )
    }}



export default Userlessons;