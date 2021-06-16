// IMPORT MOTORS
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
// IMPORT COMPONENTS
import Titlesection from '../../../components/Titlesection/titlesection';
import Modifycoach from '../../../components/options/modify/Modifycoach/modifycoach';
// IMPORT STYLE
import './logcoach.css';

const Logcoach = (props) => {

    let history = useHistory();

    // HOOKS
    const [credentials, setCredentials] = useState({name:'',email:'',password:'',birthdate:'',country:'',city:'',isActive:''});

    // const [coachData, setCoachData] = useState({
    //     token: localStorage.getItem('tokencoach'),
    //     coach: JSON.parse(localStorage.getItem('coach'))
    // });
   
    // const [visual, setVisual] = useState('');

    // useEffect(()=>{
    //     console.log(coachData.token)
    //     console.log(coachData.coach.name)

    // },[]);

    
    // Handler
    const updateCredentials = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }
    
    // FUNCTIONS (OPTIONS)
    const Logout = () => {
        localStorage.clear();
        // setCoachData("");
        history.push("/login")
    }

    const Modify = (show) => {
        
        // let body = {
        //     name: credentials.name,
        //     email: credentials.email,
        //     password: credentials.password,
        //     birthdate: credentials.birthdate,
        //     country: credentials.country,
        //     city: credentials.city,
        //     isActive: credentials.isActive
        // }

        // axios
        // .post('http://localhost:3005/coach/modify', body)
        // .then((res)=>{})
        // .catch((error)=>{
        //     console.log(error);
        // });  
    }

    if (props.logData.token){
        return (
            <div className="containerLog">
                <Titlesection title='COACH'/>
                
                <div className="infoLog bgGreen txtWhite dinC">
                    <div className="nameInfo norwester">{props.logData.coach.name}</div>                    
                    <div className="dataInfo">{props.logData.coach.level}</div>
                    <div className="dataInfo">{props.logData.coach.tasks}</div>
                    <div className="dataInfo">{props.logData.coach.instagram}</div>
                    <div className="dataInfo">{props.logData.coach.birthdate}</div>
                </div>
                <div className="infoLog txtWhite dinC">
                    <div className="optionsButtons bgGreen" onClick={()=>Modifycoach()}>Modify</div>
                    <div className="optionsButtons bgGreen" onClick={()=>Logout()}>LogOut!!</div>
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
))(Logcoach);