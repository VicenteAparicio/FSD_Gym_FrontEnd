import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import Titlesection from '../../components/Titlesection/titlesection';

import '../../assets/fontcolors.css';
import './newcoach.css';

const Newcoach = (props) => {

    let history = useHistory();

    // Hooks
    const [credentials, setCredentials] = useState({name:'', nick:'', instagram:'',email:'',password:'',birthdate:'', level:'', position:'', tasks:'', special:'',country:'',city:'', isCoach:'true', isAdmin:'false',isActive:'true',lessons:''});
    const [errors, setErrors] = useState({eName:'', eNick:'', eInstagram:'',eEmail:'',ePassword:'',eBirthdate:'', eLevel:'', ePosition:'', eTasks:'', eSpecial:'',eCountry:'',eCity:''});

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
            name: credentials.name,
            nick: credentials.nick,
            email: credentials.email,
            instagram: credentials.instagram,
            password: credentials.password,
            birthdate: credentials.birthdate,
            level: credentials.level,
            position: credentials.position,
            tasks: credentials.tasks,
            special: credentials.special,
            country: credentials.country,
            city: credentials.city,
            isCoach: credentials.isCoach,
            isAdmin: credentials.isAdmin,
            isActive: credentials.isActive,
            lessons: credentials.lessons
        }

        let tokenization = props.logData.token;
        
        axios
            .post('http://localhost:3005/coach/newcoach', body, {headers: {'Authorization': `Basic ${tokenization}`}})
            .then((res)=>{
                if (res){
                    console.log("este es el res", res)
                    setTimeout(()=>{
                        history.push("/");
                    }, 1000)
                }
            })
            .catch((error)=>{
                console.log(error);
            });
            
            
    }
    

    
    if (props.logData.user.isAdmin == true){
        return (

            <div className="containerRegister">
                <Titlesection title='NEW COACH'/>

                {/* <pre>{JSON.stringify(credentials,null,2)}</pre> */}
                <div className="boxLogin bgGreen">
                    
                    <label className="labelsLogin" for="name">NAME</label>
                    <input require="true" className="inputsLogin" type="text" name="name" onChange={updateCredentials} onBlur={()=>checkError("name")} placeholder="Name"/>
                    <div>{errors.eName}</div>
                    <label className="labelsLogin" for="nick">NICK</label>
                    <input require="true" className="inputsLogin" type="text" name="nick" onChange={updateCredentials} onBlur={()=>checkError("nick")} placeholder="Nick"/>
                    <div>{errors.eNick}</div>
                    <label className="labelsLogin" for="email">EMAIL</label>
                    <input require="true" className="inputsLogin" type="email" name="email" onChange={updateCredentials} onBlur={()=>checkError("email")} placeholder="Email"/>
                    <div>{errors.eEmail}</div>
                    <label className="labelsLogin" for="instagram">INSTAGRAM</label>
                    <input require="true" className="inputsLogin" type="text" name="instagram" onChange={updateCredentials} onBlur={()=>checkError("instagram")} placeholder="Instagram"/>
                    <div>{errors.eEmail}</div>
                    <label className="labelsLogin" for="password">PASSWORD</label>
                    <input require="true" className="inputsLogin" type="password" name="password" onChange={updateCredentials} onBlur={()=>checkError("password")} placeholder="Password"/>
                    <div>{errors.ePassword}</div>
                    <label className="labelsLogin" for="level">LEVEL</label>
                    <input require="true" className="inputsLogin" type="text" name="level" onChange={updateCredentials} onBlur={()=>checkError("level")} placeholder="Level"/>
                    <div>{errors.eLevel}</div>
                    <label className="labelsLogin" for="position">POSITION</label>
                    <input require="true" className="inputsLogin" type="text" name="position" onChange={updateCredentials} onBlur={()=>checkError("position")} placeholder="Position"/>
                    <div>{errors.ePosition}</div>
                    <label className="labelsLogin" for="tasks">TASKS</label>
                    <input require="true" className="inputsLogin" type="text" name="tasks" onChange={updateCredentials} onBlur={()=>checkError("tasks")} placeholder="Tasks"/>
                    <div>{errors.ePosition}</div>
                    <label className="labelsLogin" for="special">SPECIAL</label>
                    <input require="true" className="inputsLogin" type="text" name="special" onChange={updateCredentials} onBlur={()=>checkError("special")} placeholder="Special"/>
                    <div>{errors.ePosition}</div>
                    <label className="labelsLogin" for="birthdate">BIRTHDATE</label>
                    <input className="inputsLogin" type="date" name="birthdate" onChange={updateCredentials} onBlur={()=>checkError("birthdate")} placeholder="Birth date"/>
                    <div>{errors.eBirthdate}</div>
                    <label className="labelsLogin" for="country">COUNTRY</label>
                    <input className="inputsLogin" type="text" name="country" onChange={updateCredentials} onBlur={()=>checkError("country")} placeholder="Country"/>
                    <div>{errors.eCountry}</div>
                    <label className="labelsLogin" for="city">CITY</label>
                    <input className="inputsLogin" type="text" name="city" onChange={updateCredentials} onBlur={()=>checkError("city")} placeholder="City"/>
                    <div>{errors.eCity}</div>
        
                    

                    <div className="sendButton txtGreen" onClick={()=>Registercoach()}>Register</div>
                    <div>{msgError}</div>
                </div>
            </div>
        )
        }

}

export default connect((state)=>(
    {logData:state.credentials}
))(Newcoach);