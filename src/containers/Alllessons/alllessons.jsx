import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import Titlesection from '../../components/Titlesection/titlesection';

import './alllessons.css';
const Alllessons = () => {
    let history = useHistory();
    // HOOKS
    const [userData, setUserData] = useState({
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user'))
    });
    const [lessonInfo, setLessonInfo] = useState([]);

    useEffect(()=>{
        console.log(userData.token)
        console.log(userData.user.nick)
        MyLessons();
    },[]);
    const Logout = () => {
        localStorage.clear();
        setUserData("");
        history.push("/login")
    }
    const Back = () => {
        history.push("/logadmin")
    }
    const MyLessons = async () => {
        try{
            let res = await axios.get('http://localhost:3005/lesson/alllessons', {headers: {'Authorization': `Basic ${userData.token}`}});
            console.log("Este es el resultado ",res.data)
            setLessonInfo(res.data)
        } catch (err) {
            console.log({message: err.message})
        }
    }
    if (userData.user.isAdmin){

            return (
                <div className="lessonsContainer">
                    <Titlesection title='ALL LESSONS'/>
                    <div className="lessonsBox">
                        {lessonInfo.map((lesson, index)=>(
                            <div className="lessonCard bgGreen txtWhite">
                                <div className="lessonName norwester">{lesson.title}</div>
                                <div className="lessonInfo dinC">ID: {lesson._id}</div>
                                <div className="lessonInfo dinC">Coach: {lesson.coaches[0].name}</div>
                                <div className="lessonInfo dinC">Date: {lesson.date}</div>
                                <div className="lessonInfo dinC">Description: {lesson.description}</div>
                                {/* <div className="lessonInfo dinC">Members: {lesson.members}</div> */}
                            </div>
                        ))}
                    </div>
                    <div className="bLessonsBox">
                        <div className="bLessons bgGreen dinC" onClick={()=>Logout()}>Logout</div>
                        <div className="bLessons bgGreen dinC" onClick={()=>Back()}>Back</div>
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
export default Alllessons;

// import React, {useEffect, useState} from 'react';
// import {useHistory} from 'react-router-dom';
// import axios from 'axios';

// import Topjungle from '../../componentes/Topjungle/topjungle';
// import Titlesection from '../../componentes/Titlesection/titlesection';

// import './alllessons.css';
// const Alllessons = () => {
//     let history = useHistory();
//     // HOOKS
//     const [userData, setUserData] = useState({
//         token: localStorage.getItem('token'),
//         user: JSON.parse(localStorage.getItem('user'))
        
//     });
//     const [lessonInfo, setLessonInfo] = useState()
//     useEffect(()=>{
//         console.log(userData.token)
//         console.log(userData.user.nick)
//         Alllessons();
        
//     },[]);
//     const Logout = () => {
//         localStorage.clear();
//         setUserData("");
//         history.push("/login");
//     }
//     const Back = () => {
//         localStorage.clear();
//         setUserData("");
//         history.push("/logadmin");
//     }
//     const Alllessons = async () => {
//         // try{
//         //     let res = await axios.get('http://localhost:3005/lesson/alllessons', {headers: {'Authorization': `Basic ${userData.token}`}});
//         //     setLessonInfo(res.data)
//         // } catch (err) {
//         //     console.log({message: err.message})
//         // }

//         let tokenization = userData.token;
//         axios
//         .post('http://localhost:3005/lesson/alllessons', {headers: {'Authorization': `Basic ${tokenization}`}})
//         .then((res)=>{
//             console.log(res.data[0].title)
//             console.log(res.data[1].title)
//             setLessonInfo(res.data)
//         })
//         .catch((error)=>{
//             console.log("No entra a res");
//         });  
//     }

//     console.log("esto es lessoninfo antes de if, ",lessonInfo)

//     if (userData.user.isAdmin){
//             return (
//                 <div className="lessonsContainer">

//                 <Topjungle id="hide" title="MANAGE LESSONS"/>
//                 <Titlesection title='ALL LESSONS'/>
//                 <div className="lessonsBox">
//                     {lessonInfo.map((lesson, index)=>(
//                         <div className="lessonCard bgGreen">
//                             <div className="lessonName">{lesson.title}</div>
//                             <div className="lessonInfo">{lesson.coaches[0].name}</div>
//                             <div className="lessonInfo">{lesson.date}</div>
//                             <div className="lessonInfo">{lesson.members}</div>
//                         </div>
//                     ))}
//                 </div>
                    
//                     <div className="Buttons" onClick={()=>Logout()}>LOGOUT</div>
//                     <div className="Buttons" onClick={()=>Back()}>BACK</div>
//                 </div>
//             )
        
//     } else {
//         setTimeout(()=>{
//             history.push("/login");
//         }, 1000)
//         return (
//             <div>Cargando datos de usuario</div>
//         )
//     }
// }
// export default Alllessons;