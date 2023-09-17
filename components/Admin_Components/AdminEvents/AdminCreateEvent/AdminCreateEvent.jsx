import React, { useState } from 'react'
import classes from './AdminCreateEvent.module.css'
import { toast } from 'react-toastify';
import { API_HOST } from '../../../../utils/utils';

const AdminCreateEvent = () => {
  const [formChanged, setFormChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [eventDetails, setEventDetails] = useState({
    event_name: '',
    caption: '',
    description: '',
    event_date: '',
    event_time: '',
    venue: '',
    is_completed: false,
    is_competition_form: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Update the eventDetails state based on the input type
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Mark the form as changed
    setFormChanged(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormChanged(false);
    try {
      const res = await fetch(`${API_HOST}/api/events`, {
        method: 'POST',
        body: JSON.stringify(eventDetails),
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': ''
        }
      });
      if (!res.ok) {
        toast.error('Something Went Wrong');
      }
      if (res.ok) {
        alert('Created successfully')
        window.location.href = '/admin/events'
      }
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className={classes.adminCreateEvent}>
          <h1 className={classes.heading}>Create a new event</h1>
          <form onSubmit={handleSubmit} className={classes.form}>
            <div className={classes.input_container}>
              <label className={classes.input_label}>Event Name:</label>
              <input
                className={classes.input}
                type="text"
                name="event_name"
                value={eventDetails.event_name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className={classes.input_label}>Caption:</label>
              <input
                type="text"
                name="caption"
                value={eventDetails.caption}
                onChange={handleInputChange}
                className={classes.input}
              />
            </div>
            <div>
              <label className={classes.input_label}>Event Dates:</label>
              <input
                className={classes.input}
                type="text"
                name="event_date"
                value={eventDetails.event_date}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className={classes.input_label}>Event Time:</label>
              <input
                className={classes.input}
                type="text"
                name="event_time"
                value={eventDetails.event_time}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className={classes.input_label}>Venue:</label>
              <input
                className={classes.input}
                type="text"
                name="venue"
                value={eventDetails.venue}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className={classes.input_label}>Description:</label>
              <textarea
                name="description"
                value={eventDetails.description}
                onChange={handleInputChange}
                className={classes.input}
                style={{ minHeight: '200px' }}
              />
            </div>
            <div className={classes.checkboxDiv}>
              <label className={classes.input_label}>Is Completed:</label>
              <input
                type="checkbox"
                name="is_completed"
                checked={eventDetails.is_completed}
                onChange={handleInputChange}
                className={classes.checkbox}
              />
            </div>
            <div className={classes.checkboxDiv}>
              <label className={classes.input_label}>Is competition form:</label>
              <input
                type="checkbox"
                name="is_competition_form"
                checked={eventDetails.is_competition_form}
                onChange={handleInputChange}
                className={classes.checkbox}
              />
            </div>
            <button
              type="submit"
              disabled={!formChanged}
              className={formChanged ? classes.btn : classes.disBtn}
            >
              Submit
            </button>
          </form>
        </div>
  )
}

export default AdminCreateEvent
