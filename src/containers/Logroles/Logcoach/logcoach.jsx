// IMPORT MOTORS
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
// IMPORT COMPONENTS
import Coachdata from '../../../components/Coachdata/coachdata';
import Loginnav from '../../../components/Loginnav/loginnav';
import Visualcoach from '../../../components/Visualcoach/visualcoach';
// IMPORT STYLE
import './logcoach.css';


const Logcoach = (props) => {

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

    // const Alllessons = () => {
    //     setTimeout(()=>{
    //         history.push('/alllessons');
    //     }, 1000);
    // }

    // const Newcoach = () => {
    //     setTimeout(()=>{
    //         history.push('/newcoach');
    //     }, 1000);
    // }
    
    // const Logout = () => {
    //     localStorage.clear();
    //     setAdminData("");
    //     history.push("/login")
    // }
    if (props.logData){
        return (
            <div className="containerLog">

                <div className="adminMenu">
                    <Coachdata/>
                    <Visualcoach/>
                </div>
                

                {/* <Loginnav/> */}
                
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
))(Logcoach);