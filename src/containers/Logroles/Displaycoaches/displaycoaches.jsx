import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';

import Topjungle from '../../../components/Topjungle/topjungle';
import Titlesection from '../../../components/Titlesection/titlesection';

import './displaycoaches.css';
import '../Loguser/loguser';

const DisplayAllCoaches = (props) => {

    let history = useHistory();

   /*  const [userData, setUserData] = useState({
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user'))
    }); */

    const [lessonInfo, setLessonInfo] = useState([]);

    useEffect(()=>{
        Displaycoaches();
        
    },[]);

    const Logout = () => {
        localStorage.clear();
        history.push("/login")
    }

    const Back = () => {
        history.push("/loguser")
    }

    const Displaycoaches = async () => {


        let body = {
            userId: props.logData.user._id
        }

        try{
            let res = await axios.get('http://localhost:3005/user/allcoachs');
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
                            <div className="lessonInfo dinC">Entrenador: {lesson.coaches[0].name || "No hay ningún entrenador asociado"}</div>
                            <div className="lessonInfo dinC">Fecha: {lesson.date}</div>
                            <div className="lessonInfo dinC">{lesson.members.map((members, index)=>(
                                <div className="lessonInfo dinC">Member: {members.nick ||  "No hay usuarios apuntados"}</div>))}
                            </div>
                           
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
))(DisplayAllCoaches);