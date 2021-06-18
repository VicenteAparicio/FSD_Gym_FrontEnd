import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

import Titlesection from '../../components/Titlesection/titlesection';

import './allusers.css';

const Allusers = (props) => {
    let history = useHistory();
    // // HOOKS
    // const [userData, setUserData] = useState({
    //     token: localStorage.getItem('token'),
    //     user: JSON.parse(localStorage.getItem('user'))
    // });
    const [userInfo, setUserInfo] = useState([]);

    useEffect(()=>{
        Allusers();
    },[]);

    // const Logout = () => {
    //     localStorage.clear();
    //     // setUserData("");
    //     history.push("/login")
    // }

    // const Back = () => {
    //     history.push("/logadmin")
    // }

    const Delete = async (userId) => {
        
        try{
            console.log("userid ", userId)
            let body = {
                "userId": userId
            }
            console.log("Pasamos por body ",body.userId)
            let res = await axios.post('http://localhost:3005/user/delete', body, {headers: {'Authorization': `Basic ${props.logData.token}`}})
            console.log(res)
        } catch (err) {
            console.log({message: err.message})
        }
        Allusers();
    }

    const Modify = () => {
        
    }

    const Allusers = async () => {
        try{
            let res = await axios.get('http://localhost:3005/user/allusers', {headers: {'Authorization': `Basic ${props.logData.token}`}});
            setUserInfo(res.data)
        } catch (err) {
            console.log({message: err.message})
        }
    }
    if (props.logData.user.isAdmin){

            return (
                <div className="usersContainer">
                    <Titlesection title='ALL USERS'/>
                    <div className="usersBox">
                        {userInfo.map((users, index)=>(
                            <div className="userCard bgGreen txtWhite dinC">
                                <div className="userData">
                                    <div className="userName ">{users.name}</div>
                                    <div className="userInfo">ID: {users._id}</div>
                                    <div className="userInfo">Nick: {users.nick}</div>
                                    <div className="userInfo">Email: {users.email}</div>
                                    <div className="userInfo">Birthdate: {users.birthdate}</div>
                                    <div className="userInfo">Country: {users.country}</div>
                                    <div className="userInfo">City: {users.city}</div>
                                </div>
                                <div className="containerButtonsUsers">
                                    <div className="buttonsUsers dinC" onClick={()=>Delete(users._id)}>DELETE</div>
                                    <div className="buttonsUsers dinC" onClick={()=>Modify()}>MODIFY</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="bLessonsBox">
                        <div className="bLessons bgGreen dinC" onClick={()=>Logout()}>Logout</div>
                        <div className="bLessons bgGreen dinC" onClick={()=>Back()}>Back</div>
                    </div> */}
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
))(Allusers);