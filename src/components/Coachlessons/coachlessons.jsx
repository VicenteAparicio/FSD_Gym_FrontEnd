import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

import Titlesection from '../../components/Titlesection/titlesection';

import './coachlessons.css';

const Coachlessons = (props) => {
    let history = useHistory();
    // // HOOKS
    // const [userData, setUserData] = useState({
    //     token: localStorage.getItem('token'),
    //     user: JSON.parse(localStorage.getItem('user'))
    // });
    const [lessonInfo, setLessonInfo] = useState([]);

    useEffect(()=>{
        Allcoachlessons();
    },[]);

    useEffect(()=>{
        
    });

    const Delete = async (lessonId) => {
        
        try{
            let body = {
                "lessonId": lessonId
            }
            let res = await axios.post('http://localhost:3005/lesson/delete', body, {headers: {'Authorization': `Basic ${props.logData.token}`}})
            console.log(res)
        } catch (err) {
            console.log({message: err.message})
        }
        Allcoachlessons();
    }

    const Showmembers = () => {
    }

    const Allcoachlessons = async () => {
        try{
            let body = {
                "coachId" : props.logData.coach._id
            }
            console.log("Este es el body coachid", body.coachId)
            let res = await axios.post('http://localhost:3005/lesson/coachlessons', body, {headers: {'Authorization': `Basic ${props.logData.token}`}});
            console.log("son las lecciones, ", res)
            setLessonInfo(res.data)

        } catch (err) {
            console.log({message: err.message})
        }
    }
    if (props.logData.coach.isCoach){

            return (
                <div className="lessonsContainer">
                    <Titlesection title='ALL COACH LESSONS'/>
                    <div className="lessonsBox">
                        {lessonInfo.map((lesson, index)=>(
                            
                            <div className="lessonCard bgGreen txtWhite dinC" key={index}>
                                <div className="lessonData"> 
                                    <div className="lessonName">{lesson.title}</div>
                                    <div className="lessonInfo">ID: {lesson._id}</div>
                                    <div className="lessonInfo">Coach: {lesson.coaches[0].name}</div>
                                    <div className="lessonInfo">Date: {lesson.date}</div>
                                    <div className="lessonInfo">Description: {lesson.description}</div>
                                </div>

                                <div className="lessonMembers">
                                    {lesson.members.map((members, index)=>(
                                        <div className="lessonInfo dinC">Member: {members?.nick}</div>
                                    ))}
                                </div>

                                <div className="containerButtonsUsers">
                                    <div className="buttonsUsers dinC txtWhite" onClick={()=>Delete(lesson._id)}>DELETE</div>
                                    {/* <div className="buttonsUsers dinC txtWhite" onClick={()=>Showmembers()}>MEMBERS</div> */}
                                </div>

                                
                                
                            </div>

                        ))}
                    </div>
  
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
export default connect((state)=>(
    {logData:state.credentials}
))(Coachlessons);