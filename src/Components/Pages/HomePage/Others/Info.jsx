import React from 'react';
import InfoCard from './InfoCard';
import Clock from '../../../../Assets/Icons/clock.svg'
import Marker from '../../../../Assets/Icons/marker.svg'
import Phone from '../../../../Assets/Icons/phone.svg'

const Info = () => {
    return (
        <div className='grid my-8 grid-cols-1 lg:grid-cols-3 gap-5 '>
            <InfoCard header={'Opening Hours'} text={`Lorem Ipsum is simply dummy text of the pri`} gradient={true} img={Clock}/>
            <InfoCard header={'Visit our location'} text={`Brooklyn, NY 10036, United States`} gradient={false} img={Marker}/>
            <InfoCard header={'Contact us now'} text={`+000 123 456789`} gradient={true} img={Phone}/>
        </div>
    );
};

export default Info;