// IMPORT MOTORS
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
//IMPORT COMPONENTS
import Titlesection from '../../components/Titlesection/titlesection';
// IMPORT STYLE
import './coachdata.css';
import { ACTION } from '../../redux/types';


const Coachdata = (props) => {

    let history = useHistory();

    // HOOKS
    // const [adminData, setAdminData] = useState({
    //     token: localStorage.getItem('token'),
    //     user: JSON.parse(localStorage.getItem('user'))
    // });
    

    // useEffect(()=>{
    //     console.log(adminData?.token)
    //     console.log(adminData.user?.name)
    //     console.log(adminData.user?.isAdmin)

    // },[]);

    const Coachlessons = () => {

        props.dispatch({type:ACTION,payload:'coachlessons'})
        // setTimeout(()=>{
        //     history.push('/alllessons');
        // }, 1000);
    }

    // const Allcoachs = () => {

    //     props.dispatch({type:ACTION,payload:'allcoachs'})
    //     // setTimeout(()=>{
    //     //     history.push('/alllessons');
    //     // }, 1000);
    // }

    const Newlesson = () => {
        props.dispatch({type:ACTION,payload:'newlesson'})
        // setTimeout(()=>{
        //     history.push('/newcoach');
        // }, 1000);
    }
    
    if (props.logData.coach?.isCoach){
        
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
                        {/* <div className="optionsButtons bgGreen" onClick={()=>Alllessons()}>ALL LESSONS</div> */}
                        {/* <div className="optionsButtons bgGreen" onClick={()=>Allusers()}>ALL USERS</div> */}
                        
                        {/* <div className="optionsButtons bgGreen" onClick={()=>Logout()}>LOGOUT</div> */}
                    </div>
                </div>
    
            </div>
        )
    } else {
        // setTimeout(()=>{
        //     history.push("/login");
        // }, 1000)
        // return (
        //     <div>Cargando datos de usuario</div>
        // )
    }
}

export default connect((state)=>(
    {logData:state.credentials}
))(Coachdata);