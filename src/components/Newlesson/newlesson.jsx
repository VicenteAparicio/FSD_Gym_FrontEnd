import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import Titlesection from '../Titlesection/titlesection';

import '../../assets/fontcolors.css';
import './newlesson.css';
import { ACTION } from '../../redux/types';

const Newlesson = (props) => {

    let history = useHistory();

    // Hooks
    const [credentials, setCredentials] = useState({title:'', description:'', coaches:'', date:'',creationDate:'',members:[], messages:[],isActive:'true'});
    const [errors, setErrors] = useState({eTitle:'', eDescription:'', eCoaches:'', eDate:'', eCreationDate:'',isActive:'true'});


    const [msgError, setMensajeError] = useState('');

    // const [adminData, setAdminData] = useState({
    //     token: localStorage.getItem('token'),
    //     user: JSON.parse(localStorage.getItem('user'))
    // });
    

    useEffect(()=>{
        // console.log(adminData.token)
        // console.log(adminData.user.name)
        // console.log(adminData.user.isAdmin)

    },[]);


    // Handler
    const updateCredentials = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    // FUNCTION ERROR CHECK
    const checkError = (arg) => {
        // switch (arg){
        //     case 'name':
        //         if(credentials.name.length < 4){
        //             setErrors({...errors, eName: 'El nombre debe de tener 4 caracteres'});
        //         }else{
        //             setErrors({...errors, eName: ''});
        //         }
        //     break;
        //     case 'email':
        //     break;
        // }
    }

    const Registercoach = async () => {
        //Primero  testeamos los datos
        if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/){
            setMensajeError("Introduce un email válido");
        } 

        //A continuación genearmos el body de datos
        let body = {
            title: credentials.title,
            description: credentials.description,
            coaches: props.logData.coach._id,
            date: credentials.date,
            members: credentials.members,
            messages: credentials.messages,
            isActive: credentials.isActive,
        }

        let tokenization = props.logData.token;
        
        axios
            .post('http://localhost:3005/lesson/newlesson', body, {headers: {'Authorization': `Basic ${tokenization}`}})
            .then((res)=>{
                if (res){
                    setTimeout(()=>{
                        props.dispatch({type:ACTION,payload:'alllessons'})
                    }, 1000)

                }
            })
            .catch((error)=>{
                console.log(error);
            });
            
            
    }
    

    
    if (props.logData.coach?.isCoach){
        return (

            <div className="containerRegister">
                <Titlesection title='NEW LESSON'/>

                {/* <pre>{JSON.stringify(credentials,null,2)}</pre> */}
                <div className="containerNewCoach bgGreen dinC txtWhite">
                    <div className="infoDataContainer">
                        <div className="infoDataBox">
                            <label className="labelNewCoach" for="title">TITLE</label>
                            <input require="true" className="inNewCoach" type="text" name="title" onChange={updateCredentials} onBlur={()=>checkError("title")} placeholder="Title"/>
                            <div>{errors.eTitle}</div>
                            <label className="labelNewCoach" for="date">DATE</label>
                            <input require="true" className="inNewCoach" type="date" name="date" onChange={updateCredentials} onBlur={()=>checkError("eDate")} placeholder="Date"/>
                            <div>{errors.eDate}</div>
                        </div>
                        <div className="infoDataBox">
                            <label className="labelNewCoach" for="description">DESCRIPTION</label>
                            <textarea require="true" className="newLessonArea" type="text" name="description" onChange={updateCredentials} onBlur={()=>checkError("eDescription")} placeholder="Description"/>
                            <div>{errors.eDescription}</div>
                            

                        </div>
                    </div>
        
                    
                    <div className="buttonBox">
                        <div className="sendButtonNC txtGreen" onClick={()=>Registercoach()}>CREATE</div>
                    <div>{msgError}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state)=>(
    {logData:state.credentials}
))(Newlesson);