import { useEffect, useState } from 'react';
import classes from './AdminPage.module.css';

const AdminPage = () => {
  const [students, setStudents] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    try {
      fetch('/api/admin')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setContacts(data.contacts);
          setStudents(data.students);
        });
    } catch (error) {
      console.log(error);
      alert('Something Went Wrong');
    }
  }, []);

  return (
    <div className={classes.container}>
      <h1 style={{ fontSize: '2rem' }}>Admin Page</h1>
      <hr />
      <h1 style={{ fontSize: '2rem' }}>Contacts</h1>
      <div className={classes.contactContainer}>
        {contacts.map((contact) => {
          return (
            <div key={contact._id} className={classes.contact}>
              <h1>Name: {contact.name}</h1>
              <h3>Email: {contact.email}</h3>
              <p>Message: {contact.message}</p>
            </div>
          );
        })}
      </div>

      <h1 style={{ fontSize: '2rem' }}>Students Interested to Join club</h1>
      <div className={classes.contactContainer}>
        {students.map((student) => {
          return (
            <div key={student._id} className={classes.contact}>
              <h1>Name: {student.firstName}</h1>
              <h3>Branch: {student.branch}</h3>
              <p>Phone Number: {student.phoneNumber}</p>
              <p>Academic Year: {student.academicYear}</p>
              <p>Division: {student.division}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminPage;
