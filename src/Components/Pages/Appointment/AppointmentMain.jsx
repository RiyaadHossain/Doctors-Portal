import React, {useState} from 'react';
import Footer from '../Shared/Footer/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';
import BookingModal from './BookingModal';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    const [treatment, setTreatment] = useState([])

    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}/>
            <AvailableAppointments date={date} setTreatment={setTreatment}/>
            <BookingModal treatment= {treatment}/>
            <Footer/>
        </div>
    );
};

export default Appointment;