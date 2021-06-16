import React from 'react';

import ruzafaGreen from '../../assets/logos/ruzafaGreen.png';
import avPuertoGreen from '../../assets/logos/avPuertoGreen.png';

import './mapshome.css';

const Mapshome = () => {

    return (
        <div id="gMapContainer" className="homeContainer01">
            <div id="titleWhere" className="title02 norwester">¿DÓNDE ESTAMOS?</div>
            <div id="gallery02" className="galleryContainer dinC">
                <div id="leftMapContainer" className="mapContainers">
                    <div className="gMap">
                        <iframe title="Google Map Ruzafa" className="styleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385.0357289588217!2d-0.368475585182815!3d39.46287096001625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6048c7e674327b%3A0x73fade1664140f07!2sCrossTraining%20Valencia!5e0!3m2!1ses!2ses!4v1621851383112!5m2!1ses!2ses" allowFullscreen="" loading="lazy"/>
                    </div>
                    <div className="gMapDirection">
                        <img alt="Logo Ruzafa" id="ruzafaFooter" className="imgLocalGMap" src={ruzafaGreen}/>
                        <div className="gMapText">
                            <div className="subInfoGMap">C/ PERE III EL GRAN, 32, BAJO</div>
                            <div className="subInfoGMap">46005 - VALENCIA</div>
                        </div>
                    </div>
                </div>

                <div id="rightMapContainer" className="mapContainers">
                    <div className="gMap">
                        <iframe title="Google Map Av. Puerto" className="styleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d323.7571816715746!2d-0.3553265131759706!3d39.46673624656762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e7c0c996be0045!2sCrossTrainig%20Valencia%20-%20Av.%20Puerto!5e0!3m2!1ses!2ses!4v1621851513571!5m2!1ses!2ses" allowFullscreen="" loading="lazy"/>
                    </div>

                    <div className="gMapDirection">
                        <img alt="Logo Av. Puerto" id="avpuertoFooter" className="imgLocalGMap" src={avPuertoGreen}/>
                        <div className="gMapText">
                            <div className="subInfoGMap">AVENIDA DEL PUERTO, 47</div>
                            <div className="subInfoGMap">46021 - VALENCIA</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Mapshome;





<div id="gMapContainer" className="homeContainer01">
                    <div id="titleWhere" className="title02 norwester">¿DÓNDE ESTAMOS?</div>
                    <div id="gallery02" className="galleryContainer dinC">
                        <div id="leftMapContainer" className="mapContainers"></div>
                        <div id="rightMapContainer" className="mapContainers"></div>
                    </div>
                </div>