import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import Topjungle from '../../componentes/Topjungle/topjungle';
import Titlesection from '../../componentes/Titlesection/titlesection';

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
    const Back = () => {
        localStorage.clear();
        setUserData("");
        history.push("/logadmin")
    }
    const MyLessons = async () => {
        try{
            let res = await axios.get('http://localhost:3005/lesson/alllessons', {headers: {'Authorization': `Basic ${userData.token}`}});
            setLessonInfo(res.data)
        } catch (err) {
            console.log({message: err.message})
        }
    }

    console.log("esto es lessoninfo antes de if, ",lessonInfo)

    if (userData.user.isAdmin){
            return (
                <div className="lessonsContainer">

                <Topjungle id="hide" title="MANAGE LESSONS"/>
                <Titlesection title='ALL LESSONS'/>
                <div className="lessonsBox ">
                    {lessonInfo.map((lesson, index)=>(
                        <div className="lessonCard bgGreen">
                            <div className="lessonName">{lesson.title}</div>
                            <div className="lessonInfo">{lesson.coaches[0].name}</div>
                            <div className="lessonInfo">{lesson.date}</div>
                            <div className="lessonInfo">{lesson.members}</div>
                        </div>

                    ))}
                </div>
                    
                    <div className="Buttons" onClick={()=>Logout()}>LOGOUT</div>
                    <div className="Buttons" onClick={()=>Back()}>BACK</div>
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
export default Alllessons;