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
    const [photo, setPhoto] = useState(Smallpic01);

    // EQUIVALENTE AL COMPONENTDIDMOUNT en componentes de clase (sólo se ejecuta una vez)
    useEffect(()=>{
        
    },[]);

    // EQUIVALENTE AL COMPONENTDIDUPDATE en componentes de clase
    useEffect(()=>{

    });

    const PulsaFoto = (pic) => {
        console.log(pic);
        setPhoto(pic);
    }

    return (
        <div id="gallery01" className="galleryContainer">

				<div className="bigPic">
					<img className="bigPicture" src={photo} alt="Foto entrenamientos en Crosstraining"/>
				</div>
                <div id="smallPics">
                    <div className="picContainer">
                        <img alt="Foto entrenamientos en Crosstraining" title="Crosstraining" className="sPGallery01" onClick={()=>PulsaFoto(Smallpic01)} src={Smallpic01}/>
                        <img alt="Foto entrenamientos en Crosstraining" title="Crosstraining" className="sPGallery01" onClick={()=>PulsaFoto(Smallpic02)} src={Smallpic02}/>
                        <img alt="Foto entrenamientos en Crosstraining" title="Crosstraining" className="sPGallery01" onClick={()=>PulsaFoto(Smallpic03)} src={Smallpic03}/>
                        <img alt="Foto entrenamientos en Crosstraining" title="Crosstraining" className="sPGallery01" onClick={()=>PulsaFoto(Smallpic04)} src={Smallpic04}/>
                        <img alt="Foto entrenamientos en Crosstraining" title="Crosstraining" className="sPGallery01" onClick={()=>PulsaFoto(Smallpic05)} src={Smallpic05}/>
                        <img alt="Foto entrenamientos en Crosstraining" title="Crosstraining" className="sPGallery01" onClick={()=>PulsaFoto(Smallpic06)} src={Smallpic06}/>
                    </div>
                </div>

        </div>
    )
}

export default Gallery;