import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';

import Topjungle from '../../../components/Topjungle/topjungle';
import Titlesection from '../../../components/Titlesection/titlesection';

import './modifyprofile.css';
import '../Loguser/loguser';

const ModifyMyProfile = (props) => {

    let history = useHistory();

   /*  const [userData, setUserData] = useState({
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user'))
    }); */

    const [profileInfo, setProfileInfo] = useState([]);

    useEffect(()=>{
        ModifyProfile();
        
    },[]);

    const Logout = () => {
        localStorage.clear();
        history.push("/login")
    }

    const Back = () => {
        history.push("/loguser")
    }

    const ModifyProfile = async () => {


        let body = {
          /*  userId: props.logData.user._id,
             _id: body.id 
            nick : props.logData.user.nick,
            name : props.logData.user.name,
            birthdate : props.logData.user.birthdate,
            password : props.logData.user.password,
            city : props.logData.user.city,
            country : props.logData.user.country,
            idAdmin : props.logData.user.isAdmin,
            email : props.logData.user.email, */ 
        }
        

        try{
            let res = await axios.put('http://localhost:3005/user/modify', body, {headers: {'Authorization': `Basic ${props.logData.token}`}});
            console.log("Este es el resultado ",res.data)
            setProfileInfo(res.data)
        } catch (err) {
            console.log({message: err.message})
        }
    }


    if (props.logData.user){
            return (
                <div className="lessonsContainer">
                    <Titlesection title='MODIFY MY PROFILE'/>
                    <div className="lessonsBox">
                        {profileInfo.map((lesson, index)=>(     
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
))(ModifyMyProfile);