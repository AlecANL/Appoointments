import React from 'react';
import PropTypes from 'prop-types';
const Appointment = ({ appointment, deleteAppointment }) => (
  <div className='cita'>
    <p>
      Pet: <span>{appointment.pet}</span>
    </p>
    <button
      onClick={() => deleteAppointment(appointment.id)}
      className='u-full-width eliminar button'
    >
      Delete &times;
    </button>
  </div>
);

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
  deleteAppointment: PropTypes.func.isRequired,
};

export default Appointment;
