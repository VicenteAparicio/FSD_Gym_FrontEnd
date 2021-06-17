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
        MyLessons();
    },[]);

    const Logout = () => {
        localStorage.clear();
        // setUserData("");
        history.push("/login")
    }

    const Back = () => {
        history.push("/logadmin")
    }

    const MyLessons = async () => {
        try{
            let res = await axios.get('http://localhost:3005/lesson/alllessons', {headers: {'Authorization': `Basic ${props.logData.token}`}});
            console.log("Este es el resultado ",res.data)
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
                            <div className="lessonCard bgGreen txtWhite">
                                <div className="lessonName norwester">{lesson.title}</div>
                                <div className="lessonInfo dinC">ID: {lesson._id}</div>
                                <div className="lessonInfo dinC">Coach: {lesson.coaches[0].name}</div>
                                <div className="lessonInfo dinC">Date: {lesson.date}</div>
                                <div className="lessonInfo dinC">Description: {lesson.description}</div>
                                {/* <div className="lessonInfo dinC">Members: {lesson.members}</div> */}
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