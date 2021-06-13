import React, {useEffect, useState} from 'react';

import Smallpic01 from '../../assets/imgs/gallery01/crosstraining01.jpg';
import Smallpic02 from '../../assets/imgs/gallery01/crosstraining02.jpg';
import Smallpic03 from '../../assets/imgs/gallery01/crosstraining03.jpg';
import Smallpic04 from '../../assets/imgs/gallery01/crosstraining04.jpg';
import Smallpic05 from '../../assets/imgs/gallery01/crosstraining05.jpg';
import Smallpic06 from '../../assets/imgs/gallery01/crosstraining06.jpg';

import './gallery.css';

const Gallery = () => {

    // HOOKS
    const [pic, setPic] = useState();

    // EQUIVALENTE AL COMPONENTDIDMOUNT en componentes de clase (sólo se ejecuta una vez)
    useEffect(()=>{
        
    },[]);

    // EQUIVALENTE AL COMPONENTDIDUPDATE en componentes de clase
    useEffect(()=>{

    });

    const showBig = () => {

    }

    return (
        <div id="gallery01" className="galleryContainer">
            <div id="bigPic">
                <img className="bigPicture" src={Smallpic01}/>
            </div>

            <div id="smallPics">
                <div className="picContainer">
                    <img alt="Foto entrenamientos en Crosstraining" title="Crosstraining" className="sPGallery01" src={Smallpic01} onClick={showBig(this)}/>
                    <img alt="Foto entrenamientos en Crosstraining" title="Crosstraining" className="sPGallery01" src={Smallpic02} onClick={showBig(this)}/>
                    <img alt="Foto entrenamientos en Crosstraining" title="Crosstraining" className="sPGallery01" src={Smallpic03} onClick={showBig(this)}/>
                    <img alt="Foto entrenamientos en Crosstraining" title="Crosstraining" className="sPGallery01" src={Smallpic04} onClick={showBig(this)}/>
                    <img alt="Foto entrenamientos en Crosstraining" title="Crosstraining" className="sPGallery01" src={Smallpic05} onClick={showBig(this)}/>
                    <img alt="Foto entrenamientos en Crosstraining" title="Crosstraining" className="sPGallery01" src={Smallpic06} onClick={showBig(this)}/>
                </div>
            </div>

        </div>
    )
}

export default Gallery;