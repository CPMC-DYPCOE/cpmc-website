import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import classes from './AdminEditEvent.module.css';
import { API_HOST } from '../../../../utils/utils';

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
  });
  const [formChanged, setFormChanged] = useState(false);

  const RegisteredStudendData = [
    {
      name: 'John',
      email: 'john@gsda',
      phoneNumber: '341234',
      academicYear: '2015',
      branch: 'master',
      division: 'A'
    },
    {
      name: 'aryan',
      email: 'john@gsda',
      phoneNumber: '341234',
      academicYear: '2017',
      branch: 'master',
      division: 'B'
    },
    {
      name: 'John',
      email: 'john@gsda',
      phoneNumber: '341234',
      academicYear: '2016',
      branch: 'comp',
      division: 'A'
    },
    {
      name: 'prince',
      email: 'john@gsda',
      phoneNumber: '341234',
      academicYear: '2015',
      branch: 'master',
      division: 'B'
    },
    {
        name: 'John',
        email: 'john@gsda',
        phoneNumber: '341234',
        academicYear: '2015',
        branch: 'master',
        division: 'A'
      },
      {
        name: 'aryan',
        email: 'john@gsda',
        phoneNumber: '341234',
        academicYear: '2017',
        branch: 'master',
        division: 'B'
      },
      {
        name: 'John',
        email: 'john@gsda',
        phoneNumber: '341234',
        academicYear: '2016',
        branch: 'comp',
        division: 'A'
      },
      {
        name: 'John',
        email: 'john@gsda',
        phoneNumber: '341234',
        academicYear: '2015',
        branch: 'master',
        division: 'A'
      },
      {
        name: 'aryan',
        email: 'john@gsda',
        phoneNumber: '341234',
        academicYear: '2017',
        branch: 'master',
        division: 'B'
      },
      {
        name: 'John',
        email: 'john@gsda',
        phoneNumber: '341234',
        academicYear: '2016',
        branch: 'comp',
        division: 'A'
      },
      {
        name: 'John',
        email: 'john@gsda',
        phoneNumber: '341234',
        academicYear: '2015',
        branch: 'master',
        division: 'A'
      },
      {
        name: 'aryan',
        email: 'john@gsda',
        phoneNumber: '341234',
        academicYear: '2017',
        branch: 'master',
        division: 'B'
      },
      {
        name: 'John',
        email: 'john@gsda',
        phoneNumber: '341234',
        academicYear: '2016',
        branch: 'comp',
        division: 'A'
      },
      {
        name: 'John',
        email: 'john@gsda',
        phoneNumber: '341234',
        academicYear: '2015',
        branch: 'master',
        division: 'A'
      },
      {
        name: 'aryan',
        email: 'john@gsda',
        phoneNumber: '341234',
        academicYear: '2017',
        branch: 'master',
        division: 'B'
      },
      {
        name: 'John',
        email: 'john@gsda',
        phoneNumber: '341234',
        academicYear: '2016',
        branch: 'comp',
        division: 'A'
      },
      {
        name: 'John',
        email: 'john@gsda',
        phoneNumber: '341234',
        academicYear: '2015',
        branch: 'master',
        division: 'A'
      },
      {
        name: 'aryan',
        email: 'john@gsda',
        phoneNumber: '341234',
        academicYear: '2017',
        branch: 'master',
        division: 'B'
      },
      {
        name: 'John',
        email: 'john@gsda',
        phoneNumber: '341234',
        academicYear: '2016',
        branch: 'comp',
        division: 'A'
      },
  ];

  const getEvents = async () => {
    console.log(event_id)
    try {
      fetch(`${API_HOST}/api/events/eventDetails`, {
        method: 'POST',
        body: JSON.stringify({"event_id":event_id}),
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': ''}
        })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setEventDetails(data.event_details[0])
        });
    } catch (error) {
      console.log(error);
      alert('Something Went Wrong');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    if(event_id){
      getEvents();
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
    updated_value["event_id"]=event_id
    fetch('/api/events/eventDetails', {
      method: 'PUT',
      body: JSON.stringify(updated_value),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert('Updated successfully')
      })
      .catch((error) => {
        console.error(error);
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

    const Card = ({ student }) => {
      return (
        <div className={classes.card}>
          <div className={classes.cardItemDetail}>
            <h1>Name:</h1>
            <p>{student.name}</p>
          </div>
          <div className={classes.cardItemDetail}>
            <h1>Email:</h1>
            <p>{student.email}</p>
          </div>
          <div className={classes.cardItemDetail}>
            <h1>Phone Number:</h1>
            <p>{student.phoneNumber}</p>
          </div>
          <div className={classes.cardItemDetail}>
            <h1>Academic Year:</h1>
            <p>{student.academicYear}</p>
          </div>
          <div className={classes.cardItemDetail}>
            <h1>Branch:</h1>
            <p>{student.branch}</p>
          </div>
          <div className={classes.cardItemDetail}>
            <h1>Division:</h1>
            <p>{student.division}</p>
          </div>
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
            style={{width:"300px"}}
          />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className={classes.input} style={{width:"300px"}}>
            <option value="name">Sort by Name</option>
            <option value="email">Sort by Email</option>
            <option value="phoneNumber">Sort by Phone Number</option>
            <option value="academicYear">Sort by Academic Year</option>
            <option value="branch">Sort by Branch</option>
            <option value="division">Sort by Division</option>
          </select>
        </div>
        <h1 style={{ margin: '2em 0', textAlign:"center" }}>Total Registration: {sortedStudents?.length}</h1>
        <div className={classes.registeredStudentCard}>
          {sortedStudents.map((student) => {
            return <Card student={student} key={student.email}/>;
          })}
        </div>
      </div>
    );
  };

  return (
    <div className={classes.adminEditEvent}>
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
    </div>
  );
};

export default AdminEditEvent;
