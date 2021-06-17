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
        MyLessons();
    },[]);

    // const Logout = () => {
    //     localStorage.clear();
    //     // setUserData("");
    //     history.push("/login")
    // }

    // const Back = () => {
    //     history.push("/logadmin")
    // }

    const MyLessons = async () => {
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
                            <div className="lessonCard bgGreen txtWhite">
                                <div className="lessonName norwester">{users.name}</div>
                                <div className="lessonInfo dinC">ID: {users._id}</div>
                                <div className="lessonInfo dinC">Nick: {users.nick}</div>
                                <div className="lessonInfo dinC">Email: {users.email}</div>
                                <div className="lessonInfo dinC">Birthdate: {users.birthdate}</div>
                                <div className="lessonInfo dinC">Country: {users.country}</div>
                                <div className="lessonInfo dinC">City: {users.city}</div>
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