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

    const [coachesInfo, setCoachesInfo] = useState([]);

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
            token: props.logData.user.token
        }

        try{
            let res = await axios.get('http://localhost:3005/user/allcoachs',{headers: {'Authorization': `Basic ${props.logData.token}`}} );
            console.log("Este es el resultado ",res.data)
            setCoachesInfo(res.data)
        } catch (err) {
            console.log({message: err.message})
        }
    }


    if (props.logData.user){
            return (
                <div className="lessonsContainer">
                    <Topjungle id="hide" title="DISPLAY COACHES"/>
                    <Titlesection title='OUR COACHES'/>
                    <div className="lessonsBox">
                        {coachesInfo.map((coach, index)=>(     
                        <div className="lessonCard bgGreen txtWhite">
                            TEST TEXT
                            <div className="lessonName norwester">Name: {{coach}}</div> 
                            <div className="lessonInfo dinC">Task: {/* {lesson.coaches[0].name || "No hay ningún entrenador asociado"} */}</div>
                            <div className="lessonInfo dinC">Valoration:{/*  {lesson.date} */}</div>
                            {/* <div className="lessonInfo dinC">{lesson.members.map((members, index)=>(
                                <div className="lessonInfo dinC">Member: {members.nick ||  "No hay usuarios apuntados"}</div>))}
                            </div> */}
                           
                        </div>

                     ))}
                    </div>
                    <div className="bLessonsBox">
                        <div className="lessonCard bgGreen txtWhite" onClick={()=>Logout()}>Logout</div>
                        <div className="lessonCard bgGreen txtWhite" onClick={()=>Back()}>Back</div>
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