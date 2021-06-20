// IMPORT MOTORS
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
//IMPORT COMPONENTS
import Titlesection from '../../components/Titlesection/titlesection';
// IMPORT STYLE
import './coachdata.css';
import { ACTION } from '../../redux/types';


const Coachdata = (props) => {

    let history = useHistory();

    useEffect(()=>{
        
    },[]);

    useEffect(()=>{
    });


    // HOOKS
    const [coachEdit, setCoachEdit] = useState({name:props.logData.coach?.name, instagram:props?.logData.coach?.instagram,email:props.logData.coach?.email, birthdate:props.logData.coach?.birthdate, level:props.logData.coach?.level, position:props.logData.coach?.position, tasks:props.logData.coach?.tasks, special:props.logData.coach?.special,country:props.logData.coach?.country,city:props.logData.coach?.city});
    const [allowEdit, setAllowEdit] = useState(false);

    // Handler
    const updateCoach = (e) => {
        setCoachEdit({...coachEdit, [e.target.name]: e.target.value});
    }
    // useEffect(()=>{
    //     console.log(adminData?.token)
    //     console.log(adminData.user?.name)
    //     console.log(adminData.user?.isAdmin)

    // },[]);

    const Coachlessons = () => {


        setTimeout(()=>{
            props.dispatch({type:ACTION,payload:'coachlessons'})
        }, 500);
    }

    const Edit = () => {

        setAllowEdit(true)
        console.log("permito editar, ",allowEdit)

        // props.dispatch({type:ACTION,payload:'allcoachs'})
        // setTimeout(()=>{
        //     history.push('/alllessons');
        // }, 1000);
    }
    const CancelEdit = () => {
        setAllowEdit(false)

    }

    const Newlesson = () => {
        props.dispatch({type:ACTION,payload:'newlesson'})
        // setTimeout(()=>{
        //     history.push('/newcoach');
        // }, 1000);
    }

    const SaveEdit = async () => {
        console.log("le paso este coach id", props.logData.coach._id)
        let body = {
            "id": props.logData.coach._id,
            "name": coachEdit.name,
            "email": coachEdit.email,
            "birthdate": coachEdit.birthdate,
            "instagram": coachEdit.instagram,
            "level": coachEdit.level,
            "position": coachEdit.position,
            "tasks": coachEdit.tasks,
            "special": coachEdit.special,
            "country": coachEdit.country,
            "city": coachEdit.city,
            "__v": 0,
        }

        axios
        .put('http://localhost:3005/coach/modify', body, {headers: {'Authorization': `Basic ${props.logData.token}`}})
        .then((res)=>{
            if (res){
                console.log("este es el res", res)
                // setTimeout(()=>{
                //     history.push("/");
                // }, 1000)
            }
        })
        .catch((error)=>{
            console.log(error);
        });

        setAllowEdit(false)
    }

    if (props.logData.coach?.isCoach && allowEdit === false){

        return (
            <div className="containerData">
                <Titlesection title='MANAGER'/>
                <div className="containerProfile">
                    <div className="adminLog bgGreen txtWhite dinC">
                        <div className="nameInfo">{props.logData.coach.name}</div>
                        <div className="dataInfo">{props.logData.coach.level}</div>
                        <div className="dataInfo">{props.logData.coach.tasks}</div>
                        <div className="dataInfo">{props.logData.coach.instagram}</div>
                        <div className="dataInfo">{props.logData.coach.birthdate}</div>
                    </div>
                    <div className="boxButton txtWhite dinC">
                        <div className="optionsButtons bgGreen" onClick={()=>Coachlessons()}>ACTIVE LESSONS</div>
                        <div className="optionsButtons bgGreen" onClick={()=>Newlesson()}>NEW LESSON</div>
                        <div className="optionsButtons bgGreen" onClick={()=>Edit()}>EDIT ACCOUNT</div>
                        {/* <div className="optionsButtons bgGreen" onClick={()=>Allusers()}>ALL USERS</div> */}

                        {/* <div className="optionsButtons bgGreen" onClick={()=>Logout()}>LOGOUT</div> */}
                    </div>
                </div>

            </div>
        )
    } else if (props.logData.coach?.isCoach && allowEdit === true){
        return (
            <div className="containerData">
                <Titlesection title='EDIT MANAGER'/>
                <div className="containerProfile">
                    <div className="adminLog bgGreen txtWhite dinC">
                        <input className="upDataInfo" onChange={updateCoach} type="text" name="name" placeholder={props.logData.coach.name}></input>
                        <input className="upDataInfo" onChange={updateCoach} type="text" name="email" placeholder={props.logData.coach.email}></input>
                        <input className="upDataInfo" onChange={updateCoach} type="password" name="password" placeholder={props.logData.coach.password}></input>
                        <input className="upDataInfo" onChange={updateCoach} type="text" name="level" placeholder={props.logData.coach.level}></input>
                        <input className="upDataInfo" onChange={updateCoach} type="text" name="tasks" placeholder={props.logData.coach.tasks}></input>
                        <input className="upDataInfo" onChange={updateCoach} type="text" name="special" placeholder={props.logData.coach.special}></input>
                        <input className="upDataInfo" onChange={updateCoach} type="text" name="country" placeholder={props.logData.coach.country}></input>
                        <input className="upDataInfo" onChange={updateCoach} type="text" name="city" placeholder={props.logData.coach.city}></input>
                        <input className="upDataInfo" onChange={updateCoach} type="text" name="instagram" placeholder={props.logData.coach.instagram}></input>
                    </div>
                    <div className="boxButton txtWhite dinC">
                        <div className="optionsButtons bgGreen" onClick={()=>SaveEdit()}>SAVE</div>
                        <div className="optionsButtons bgGreen" onClick={()=>CancelEdit()}>CANCEL</div>
                        {/* <div className="optionsButtons bgGreen" onClick={()=>Modifyacc()}>MODIFY ACCOUNT</div> */}
                        {/* <div className="optionsButtons bgGreen" onClick={()=>Allusers()}>ALL USERS</div> */}

                        {/* <div className="optionsButtons bgGreen" onClick={()=>Logout()}>LOGOUT</div> */}
                    </div>
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
))(Coachdata);