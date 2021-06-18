import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

import Titlesection from '../../components/Titlesection/titlesection';

import './allcoachs.css';

const Allcoachs = (props) => {
    let history = useHistory();
    // // HOOKS
    // const [userData, setUserData] = useState({
    //     token: localStorage.getItem('token'),
    //     user: JSON.parse(localStorage.getItem('user'))
    // });
    const [coachInfo, setCoachInfo] = useState([]);

    useEffect(()=>{
        Allcoach();
    },[]);

    const Delete = async (coachId) => {
        
        try{
            console.log("coachid ", coachId)
            let body = {
                "coachId": coachId
            }
            console.log("Pasamos por body ",body.coachId)
            let res = await axios.post('http://localhost:3005/coach/delete', body, {headers: {'Authorization': `Basic ${props.logData.token}`}})
            console.log("este es el resultado", res)
        } catch (err) {
            console.log({message: err.message})
        }
        Allcoach();
    }

    const Showmembers = () => {
    }

    const Allcoach = async () => {
        try{
            let res = await axios.get('http://localhost:3005/coach/allcoachs', {headers: {'Authorization': `Basic ${props.logData.token}`}});
            console.log("son las lecciones, ", res)
            setCoachInfo(res.data)

        } catch (err) {
            console.log({message: err.message})
        }
    }
    if (props.logData.user.isAdmin){

            return (
                <div className="lessonsContainer">
                    <Titlesection title='ALL COACHS'/>
                    <div className="lessonsBox">
                        {coachInfo.map((coach, index)=>(
                            
                            <div className="lessonCard bgGreen txtWhite dinC" key={index}>
                                <div className="lessonData"> 
                                    <div className="lessonName">{coach.name}</div>
                                    <div className="lessonInfo">ID: {coach._id}</div>
                                    
                                    <div className="lessonInfo">Email: {coach.email}</div>
                                    <div className="lessonInfo">Instagram: {coach.instagram}</div>
                                </div>


                                <div className="containerButtonsUsers">
                                    <div className="buttonsUsers dinC txtWhite" onClick={()=>Delete(coach._id)}>DELETE</div>
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
))(Allcoachs);