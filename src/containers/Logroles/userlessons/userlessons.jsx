import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';

import Topjungle from '../../../components/Topjungle/topjungle';
import Titlesection from '../../../components/Titlesection/titlesection';

import './userlessons.css';
import '../Loguser/loguser';

const Userlessons = (props) => {

    let history = useHistory();

   /*  const [userData, setUserData] = useState({
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user'))
    }); */

    const [lessonInfo, setLessonInfo] = useState([]);

    useEffect(()=>{
        MyLessons();
        
    },[]);

    const Logout = () => {
        localStorage.clear();
        history.push("/login")
    }

    const Back = () => {
        history.push("/loguser")
    }

    const MyLessons = async () => {


        let body = {
            userId: props.logData.user._id
        }

        try{
            let res = await axios.post('http://localhost:3005/user/all_my_lessons', body, {headers: {'Authorization': `Basic ${props.logData.user.token}`}});
            console.log("Este es el resultado ",res.data)
            setLessonInfo(res.data)
        } catch (err) {
            console.log({message: err.message})
        }
    }


    if (props.logData.user){

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



export default connect((state)=>(
    {logData:state.credentials}
))(Userlessons);