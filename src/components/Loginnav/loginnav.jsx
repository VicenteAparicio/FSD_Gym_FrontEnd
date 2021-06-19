// IMPORT MOTORS
import React from 'react';
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux';
// IMPORT COMPONENTS
// IMPORT ACTIONS
import {ACTION, LOGOUT} from '../../redux/types';
// IMPORT STYLE
import "./loginnav.css";

const Loginnav = (props) => {

    let history = useHistory();

    const takeMe = (where) => {
        history.push(where);
    }

    const logOut = () => {
        props.dispatch({type:LOGOUT})
        props.dispatch({type:ACTION,payload:'login'})

        setTimeout(()=> {
            history.push('/');
        },500)
        
    }

    if(props.credentials?.token){
        return (
            <div className="vistaHeader">
                <div className="nav">
                    <div className="tapHeader" onClick={()=>takeMe("/logadmin")}>{props.credentials?.user.name}</div>
                    <div className="tapHeader" onClick={()=>logOut()}>Log Out</div>
                </div>
            </div>
        )

    }else{
        return (
            <div className="vistaHeader">
                <div className="nav">
                    <div className="tapHeader" onClick={()=>takeMe("/login")}>Login</div>
                    <div className="tapHeader" onClick={()=>takeMe("/register")}>Register</div>
                </div>
            </div>
        )
    }

    
}

export default connect((state)=>({
    // Este "credentials:" es el que usamos arriba para cargar los datos que le hemos pasado desde redux con state.credentials.
    credentials:state.credentials

}))(Loginnav);