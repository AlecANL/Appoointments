import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const Form = ({ addListAppointment }) => {
  const [addToForm, setAddToForm] = useState({
    pet: '',
    owner: '',
    date: '',
    time: '',
    symptoms: '',
  });

  const [wrong, updateWrong] = useState(false);

  const handleChange = (e) => {
    setAddToForm({
      ...addToForm,
      [e.target.name]: e.target.value,
    });
  };
  const { pet, owner, date, time, symptoms } = addToForm;

  const sendData = (e) => {
    e.preventDefault();
    if (
      pet.trim() === '' ||
      owner.trim() === '' ||
      date.trim() === '' ||
      time.trim() === '' ||
      symptoms.trim() === ''
    ) {
      updateWrong(true);
      return;
    }
    //delete message wrong
    updateWrong(false);
    // create Id
    addToForm.id = uuidv4();
    // create Appointment
    addListAppointment(addToForm);
    // restart fom
    setAddToForm({
      pet: '',
      owner: '',
      date: '',
      time: '',
      symptoms: '',
    });
  };

  return (
    <Fragment>
      <h2>Create appointment</h2>
      {wrong ? (
        <p className='alerta-error'>Opps, A wrong in the form, please all camp is required</p>
      ) : null}
      <form onSubmit={sendData}>
        <label>Name Your Pet</label>
        <input
          type='text'
          name='pet'
          className='u-full-width'
          placeholder='Name your Pet'
          onChange={handleChange}
          value={pet}
        />
        <label>Your Name</label>
        <input
          type='text'
          name='owner'
          className='u-full-width'
          placeholder='Your name'
          onChange={handleChange}
          value={owner}
        />
        <label>Date</label>
        <input
          type='date'
          name='date'
          className='u-full-width'
          onChange={handleChange}
          value={date}
        />
        <label>Hour</label>
        <input
          type='time'
          name='time'
          className='u-full-width'
          placeholder='Name your Pet'
          onChange={handleChange}
          value={time}
        />
        <label>symptoms your Pet</label>
        <textarea
          className='u-full-width'
          name='symptoms'
          onChange={handleChange}
          value={symptoms}
        ></textarea>
        <button type='submit' className='u-full-width button-primary'>
          Add Appointment
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
