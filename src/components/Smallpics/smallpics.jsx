import React from 'react';

import Smallpic01 from '../../assets/imgs/gallery01/crosstraining01.jpg';
import Smallpic02 from '../../assets/imgs/gallery01/crosstraining02.jpg';
import Smallpic03 from '../../assets/imgs/gallery01/crosstraining03.jpg';
import Smallpic04 from '../../assets/imgs/gallery01/crosstraining04.jpg';
import Smallpic05 from '../../assets/imgs/gallery01/crosstraining05.jpg';
import Smallpic06 from '../../assets/imgs/gallery01/crosstraining06.jpg';

import './smallpics.css';

const Smallpics = (props) => {

    return (
            <div id="smallPics">
                <div className="picContainer">
                    <img alt="Foto entrenamientos en Crosstraining" title="Crosstraining" className="sPGallery01" src={Smallpic01}/>
                    <img alt="Foto entrenamientos en Crosstraining" title="Crosstraining" className="sPGallery01" src={Smallpic02}/>
                    <img alt="Foto entrenamientos en Crosstraining" title="Crosstraining" className="sPGallery01" src={Smallpic03}/>
                    <img alt="Foto entrenamientos en Crosstraining" title="Crosstraining" className="sPGallery01" src={Smallpic04}/>
                    <img alt="Foto entrenamientos en Crosstraining" title="Crosstraining" className="sPGallery01" src={Smallpic05}/>
                    <img alt="Foto entrenamientos en Crosstraining" title="Crosstraining" className="sPGallery01" src={Smallpic06}/>
                </div>
            </div>
    )
}

export default Smallpics;