import React, {useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import './Users.css';

const Profile = () => {

    let history = useHistory();

    //Hooks
    const [users,setUsers] = useState([]);

    //Equivalente a componentDidMount en componentes de Clase
    useEffect(()=> {
        getGyms();
    }, []);

    //Equivalente a componentDidUpdate en componentes de Clase
    useEffect(()=> {
        
    });

    const clickHandler = (gym) => {
        //Guardamos person en el localStorage
        localStorage.setItem('datosCliente', JSON.stringify(gym));

        history.push('/detail');
    }

    const getGyms = async () => {

        try{

            let res = await axios.get('http://localhost:3005/gym/all_gyms');

            setUsers(res.data.results);
        }catch (err){
            console.log({message: err.message});
        }
        
    }

    if(gym[0]?.id){
        return (<div>
            {users.map((gym, index) => (
                
                <div className="card" onClick={()=>clickHandler(gym)} key={index}>
                    <p>{gym.name}</p>
                    <img src={gym.image} alt="Gym Image" />
                </div>
                
            ))}
        </div>)
    } else {
        return (

            <div>Cargando Profile...</div>
        )
    }

    
}

export default Profile;