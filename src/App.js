import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';
import PropTypes from 'prop-types';

const App = () => {
  let appointmentInit = JSON.parse(localStorage.getItem('Appointment'));
  if (!appointmentInit) {
    appointmentInit = [];
  }
  const [listAppointments, setChangeAppointment] = useState(appointmentInit);

  useEffect(() => {
    let appointmentInit = JSON.parse(localStorage.getItem('Appointment'));

    if (appointmentInit) {
      localStorage.setItem('Appointment', JSON.stringify(listAppointments));
    } else {
      localStorage.setItem('Appointment', JSON.stringify([]));
    }
  }, [appointmentInit, listAppointments]);

  const addListAppointment = (appointments) => {
    setChangeAppointment([...listAppointments, appointments]);
  };

  const deleteAppointment = (id) => {
    const newAppointment = listAppointments.filter((item) => item.id !== id);
    setChangeAppointment(newAppointment);
  };
  const title =
    listAppointments.length === 0 ? 'Add new Appointment' : 'Administrate Your Appointments';
  return (
    <Fragment>
      <h1>Administration to Guess</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Form addListAppointment={addListAppointment} />
          </div>
          <div className='one-half column'>
            <h2>{title}</h2>
            {listAppointments.map((appointment) => (
              <Appointment
                key={appointment.id}
                appointment={appointment}
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Form.propTypes = {
  addListAppointment: PropTypes.func.isRequired,
};
export default App;
