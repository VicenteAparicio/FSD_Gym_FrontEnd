import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

import Titlesection from '../../components/Titlesection/titlesection';

import './alllessons.css';

const Alllessons = (props) => {
    let history = useHistory();
    // // HOOKS
    // const [userData, setUserData] = useState({
    //     token: localStorage.getItem('token'),
    //     user: JSON.parse(localStorage.getItem('user'))
    // });
    const [lessonInfo, setLessonInfo] = useState([]);

    useEffect(()=>{
        Alllessons();
    },[]);

    const Delete = async (lessonId) => {
        
        try{
            console.log("userid ", lessonId)
            let body = {
                "lessonId": lessonId
            }
            console.log("Pasamos por body ",body.lessonId)
            let res = await axios.post('http://localhost:3005/lesson/delete', body, {headers: {'Authorization': `Basic ${props.logData.token}`}})
            console.log(res)
        } catch (err) {
            console.log({message: err.message})
        }
        Alllessons();
    }

    const Showmembers = () => {
    }

    const Alllessons = async () => {
        try{
            let res = await axios.get('http://localhost:3005/lesson/alllessons', {headers: {'Authorization': `Basic ${props.logData.token}`}});
            setLessonInfo(res.data)
        } catch (err) {
            console.log({message: err.message})
        }
    }
    if (props.logData.user.isAdmin){

            return (
                <div className="lessonsContainer">
                    <Titlesection title='ALL LESSONS'/>
                    <div className="lessonsBox">
                        {lessonInfo.map((lesson, index)=>(
                            
                            <div className="lessonCard bgGreen txtWhite dinC">
                                <div className="lessonData"> 
                                    <div className="lessonName">{lesson.title}</div>
                                    <div className="lessonInfo">ID: {lesson._id}</div>
                                    <div className="lessonInfo">Coach: {lesson.coaches[0].name}</div>
                                    <div className="lessonInfo">Date: {lesson.date}</div>
                                    <div className="lessonInfo">Description: {lesson.description}</div>
                                </div>

                                <div className="lessonMembers">
                                    {lesson.members.map((members, index)=>(
                                        <div className="lessonInfo dinC">Member: {members}</div>
                                    ))}
                                </div>

                                <div className="containerButtonsUsers">
                                    <div className="buttonsUsers dinC txtWhite" onClick={()=>Delete(lesson._id)}>DELETE</div>
                                    <div className="buttonsUsers dinC txtWhite" onClick={()=>Showmembers()}>MEMBERS</div>
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
))(Alllessons);