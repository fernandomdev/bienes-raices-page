import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './Residencies.css';
import { sliderSettings } from '../../utils/common';

const data = [
    {
        "name": "Aliva Priva Jardin",
        "price": "47,043",
        "detail": "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
        "image": "./r1.png"
    },
    {
        "name": "Asatti Garden City",
        "price": "66,353",
        "detail": "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
        "image": "./r2.png"
    },
    {
        "name": "Citralan Puri Serang",
        "price": "35,853",
        "detail": "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
        "image": "./r3.png"
    },
    {
        "name": "Aliva Priva Jardin",
        "price": "47,043",
        "detail": "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
        "image": "./r1.png"
    },
    {
        "name": "Asatti Garden City",
        "price": "66,353",
        "detail": "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
        "image": "./r2.png"
    },
    {
        "name": "Citralan Puri Serang",
        "price": "35,853",
        "detail": "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
        "image": "./r3.png"
    }
];

const Residencies = () => {
    return (
        <section id='residencies'>
            <div className='innerWidth'>
                <div className="r-header">
                    <div className="title">
                        <span>Las mejores opciones</span>
                        <h4>Más Populares</h4>
                    </div>
                </div>
                <Swiper {...sliderSettings}>
                    <SliderButtons/>
                    {
                        data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="r-card">
                                    <img className="r-card__image" src={card.image} alt="home" />
                                    <span className="r-card__price"><span>$</span>{card.price}</span>
                                    <h4 className="r-card__title">{card.name}</h4>
                                    <p className="r-card__description">{card.detail}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Residencies

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="r-button">
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )
}