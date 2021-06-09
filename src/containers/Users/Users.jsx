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
        getUsers();
    }, []);

    //Equivalente a componentDidUpdate en componentes de Clase
    useEffect(()=> {
        
    });

    const clickHandler = (client) => {
        //Guardamos person en el localStorage
        localStorage.setItem('datosCliente', JSON.stringify(client));

        history.push('/detail');
    }

    const getUsers = async () => {

        try{

            let res = await axios.get('http://localhost:3005/user/allusers');

            setUsers(res.data.results);
        }catch (err){
            console.log({message: err.message});
        }
        
    }

    if(users[0]?.id){
        return (<div>
            {users.map((client, index) => (
                
                <div className="card" onClick={()=>clickHandler(client)} key={index}>
                    <p>{client.name}</p>
                    <img src={client.image} alt="Cliente" />
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