// IMPORT MOTORS
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
// IMPORT STYLE
import './admindata.css';


const Admindata = (props) => {

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

    const Alllessons = () => {
        setTimeout(()=>{
            history.push('/alllessons');
        }, 1000);
    }

    const Newcoach = () => {
        setTimeout(()=>{
            history.push('/newcoach');
        }, 1000);
    }
    
    // const Logout = () => {
    //     localStorage.clear();
    //     setAdminData("");
    //     history.push("/login")
    // }
    if (props.logData.user?.isAdmin){
        return (
            <div className="containerLog">

                <div className="infoLog bgGreen txtWhite dinC">
                    <div className="nameInfo">{props.logData.user.name}</div>                    
                    <div className="dataInfo">{props.logData.user.email}</div>
                    <div className="dataInfo">{props.logData.user.country}</div>
                    <div className="dataInfo">{props.logData.user.city}</div>
                    <div className="dataInfo">{props.logData.user.birthdate}</div>
                </div>
                <div className="infoLog txtWhite dinC">
                    <div className="optionsButtons bgGreen" onClick={()=>Newcoach()}>NEW COACH</div>
                    <div className="optionsButtons bgGreen" onClick={()=>Alllessons()}>ALL LESSONS</div>
                    {/* <div className="optionsButtons bgGreen" onClick={()=>Logout()}>LOGOUT</div> */}
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
))(Admindata);