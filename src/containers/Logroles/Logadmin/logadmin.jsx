// IMPORT MOTORS
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
// IMPORT COMPONENTS
import Titlesection from '../../../components/Titlesection/titlesection';
import Admindata from '../../../components/Admindata/admindata';
import Loginnav from '../../../components/Loginnav/loginnav';
// IMPORT STYLE
import './logadmin.css';


const Logadmin = (props) => {

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

                <Titlesection title="ADMIN"/>
                <div className="adminMenu">
                    <Admindata/>
                </div>
                

                <Loginnav/>
                
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
))(Logadmin);