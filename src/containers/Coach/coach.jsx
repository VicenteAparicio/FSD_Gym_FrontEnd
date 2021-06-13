import React, {useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';
import './coach.css';
import axios from 'axios';

const Coachprofiles = () => {
    //HOOKS
    const [characters,setCharacters] = useState([]);

    // EQUIVALENTE AL COMPONENTDIDMOUNT en componentes de clase (sólo se ejecuta una vez)
    useEffect(()=>{
            getCharacters();
    },[]);

    // EQUIVALENTE AL COMPONENTDIDUPDATE en componentes de clase
    useEffect(()=>{
        console.log("bingo",characters);
    });

    // FUNCTIONS
    const getCharacters = async () => {
        try{
            let res = await axios.get("http://localhost:3005/coach/allcoachs");
            console.log(res.data)
            setCharacters(res.data);
        } catch (err) {
            console.log({message: err.message})
        }
    }

    let history = useHistory();
    const clickHandler = async (person) => {
        localStorage.setItem('dataChar', JSON.stringify(person));
        history.push('./detail');
    }

    if(characters[0]?._id){
        return (
            <div>
                {characters.map((person,index)=>(
                <div className="card" onClick={()=>clickHandler(person)} key={index}>
                    <p>{person.name}</p>
                </div>
                ))}
            </div>
        )
    } else {
        return (
            <div>No los tengo</div>
        )
    }


}

export default Coachprofiles;