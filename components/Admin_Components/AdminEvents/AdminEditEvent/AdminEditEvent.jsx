import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import classes from './AdminEditEvent.module.css';
import { API_HOST } from '../../../../utils/utils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UploadImage from '../../../UploadImage/UploadImage';
import copy from 'copy-text-to-clipboard';
const AdminEditEvent = () => {
  const router = useRouter();
  const { event_id } = router.query;
  const [compToShow, setCompToShow] = useState('edit');
  const [isLoading, setIsLoading] = useState(false);

  const [eventDetails, setEventDetails] = useState({
    event_id: '',
    event_name: '',
    caption: '',
    description: '',
    event_date: '',
    event_time: '',
    venue: '',
    is_completed: false,
    is_competition_form: false
  });
  const [formChanged, setFormChanged] = useState(false);

  const [RegisteredStudendData, setRegisteredStudendData] = useState([]);

  const getRegisteredStudents = async () => {
    try {
      fetch(`${API_HOST}/api/events/registration`, {
        method: 'POST',
        body: JSON.stringify({ event_id: event_id }),
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': ''
        }
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data.students);
          setRegisteredStudendData(data.students);
        });
    } catch (error) {
      toast.error(error.message);
    }
    setIsLoading(false);
  };

  const getEvents = async () => {
    try {
      fetch(`${API_HOST}/api/events/eventDetails`, {
        method: 'POST',
        body: JSON.stringify({ event_id: event_id }),
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': ''
        }
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setEventDetails(data.event_details[0]);
        });
    } catch (error) {
      console.log(error);
      alert('Something Went Wrong');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    if (event_id) {
      getEvents();
      getRegisteredStudents();
    }
  }, [event_id]);

  // Handle changes in the form inputs
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === 'checkbox' ? checked : value
    }));
    setFormChanged(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormChanged(false);
    let updated_value = eventDetails;
    updated_value['event_id'] = event_id;
    delete updated_value.images;
    fetch(`${API_HOST}/api/events/eventDetails`, {
      method: 'PUT',
      body: JSON.stringify(updated_value),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success('Updated successfully');
      })
      .catch((error) => {
        toast.success(error.message);
      });
  };

  const handleToggle = (section) => {
    setCompToShow(section);
  };

  if (event_id == null) {
    return <div>Invalid event id: {event_id}</div>;
  }

  if (eventDetails == null) {
    return <div>No event details</div>;
  }

  const RegisteredStudent = ({ RegisteredStudendData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('name'); // Default sorting by name

    const filteredStudents = RegisteredStudendData.filter((student) => {
      // Filter based on the search term
      return (
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.phoneNumber.includes(searchTerm) ||
        student.academicYear.includes(searchTerm) ||
        student.branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.division.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    const sortedStudents = filteredStudents.slice().sort((a, b) => {
      // Sort based on the selected criteria
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'email') {
        return a.email.localeCompare(b.email);
      } else if (sortBy === 'phoneNumber') {
        return a.phoneNumber.localeCompare(b.phoneNumber);
      } else if (sortBy === 'academicYear') {
        return a.academicYear.localeCompare(b.academicYear);
      } else if (sortBy === 'branch') {
        return a.branch.localeCompare(b.branch);
      } else if (sortBy === 'division') {
        return a.division.localeCompare(b.division);
      }
    });

    const [copied, setCopied] = useState(false);

    const extractEmails = (data ) => {
      const emails = data.map((item) => item.email).join(', ');
      // copy(emails);

      setCopied(true);
    };

    const Card = ({ student }) => {
      const additionalFields = [
        'atCoderId',
        'codeForcesId',
        'codeChefId',
        'leetCodeId',
        'hackerRankId',
        'hackerEarthId'
      ];
      const studentDetails = [
        {
          label: 'Name:',
          value: student.name
        },
        {
          label: 'Email:',
          value: student.email
        },
        {
          label: 'Phone Number:',
          value: student.phoneNumber
        },
        {
          label: 'Academic Year:',
          value: student.academicYear
        },
        {
          label: 'Branch:',
          value: student.branch
        },
        {
          label: 'Division:',
          value: student.division
        },
        // Add additional fields dynamically
        ...additionalFields.map((field) => ({
          label: `${field.charAt(0).toUpperCase() + field.slice(1)}:`, // Capitalize the field name
          value: student[field]
        }))
      ];

      return (
        <div className={classes.card}>
          {studentDetails.map((detail, index) => {
            if (additionalFields.includes(detail.label.replace(':', '').toLowerCase())) {
              return null;
            }
            if (detail.value == '') {
              return null;
            }
            return (
              <div key={index} className={classes.cardItemDetail}>
                <h1>{detail.label}</h1>
                <p>{detail.value}</p>
              </div>
            );
          })}
        </div>
      );
    };
    return (
      <div>
        <div className={classes.registerUesrComp}>
          <input
            type="text"
            placeholder="Search by keyword"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={classes.input}
            style={{ width: '300px' }}
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={classes.input}
            style={{ width: '300px' }}
          >
            <option value="name">Sort by Name</option>
            <option value="email">Sort by Email</option>
            <option value="phoneNumber">Sort by Phone Number</option>
            <option value="academicYear">Sort by Academic Year</option>
            <option value="branch">Sort by Branch</option>
            <option value="division">Sort by Division</option>
          </select>
        </div>
        <h1 style={{ margin: '2em 0', textAlign: 'center' }}>
          Total Registration: {sortedStudents?.length}
        </h1>
        <div className={classes.copyClipboard}>
          <button onClick={()=>extractEmails(sortedStudents)}>{copied ? 'Copied!' : 'Copy Below Emails to Clipboard'}</button>
        </div>
        <div className={classes.registeredStudentCard}>
          {sortedStudents.map((student) => {
            return <Card student={student} key={student.email} />;
          })}
        </div>  
          {sortedStudents.map((student, idx) => {
            return <h1 style={{maxWidth:"100vw", textAlign:"center"}} key={idx}>{student.email}</h1>
          })}
      </div>
    );
  };

  return (
    <div className={classes.adminEditEvent}>
      <ToastContainer />
      <div className={classes.options}>
        <button
          className={`${compToShow === 'edit' ? classes.selectedButton : ''}`}
          onClick={() => handleToggle('edit')}
        >
          Edit
        </button>
        <button
          className={` ${compToShow === 'register' ? classes.selectedButton : ''}`}
          onClick={() => handleToggle('register')}
        >
          Register
        </button>
        <button
          className={` ${compToShow === 'image' ? classes.selectedButton : ''}`}
          onClick={() => handleToggle('image')}
        >
          Image
        </button>
      </div>
      {compToShow === 'edit' && (
        <div>
          <h1 className={classes.heading}>Edit event details</h1>
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
              Save
            </button>
          </form>
        </div>
      )}

      {compToShow === 'register' && (
        <div>
          <h1 className={classes.heading}>Registered Students</h1>

          <RegisteredStudent RegisteredStudendData={RegisteredStudendData} />
        </div>
      )}

      {compToShow === 'image' && (
        <div>
          <h1 className={classes.heading}>Registered Students</h1>
          <UploadImage event_id={event_id} />
        </div>
      )}
    </div>
  );
};

export default AdminEditEvent;
