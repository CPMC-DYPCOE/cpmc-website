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
          const {
            _id,
            firstName,
            branch,
            phoneNumber,
            academicYear,
            division,
            leetCodeId,
            codeChefId,
            codeForcesId,
            atCoderId,
            hackerRankId,
            hackerEarthId
          } = student;
          return (
            <div key={_id} className={classes.contact}>
              <h1>Name: {firstName}</h1>
              <h3>Branch: {branch}</h3>
              <p>Phone Number: {phoneNumber}</p>
              <p>Academic Year: {academicYear}</p>
              <p>Division: {division}</p>
              {leetCodeId && <a href={leetCodeId}>LeetCode</a>}
              {codeChefId && <a href={codeChefId}>CodeChef</a>}
              {codeForcesId && <a href={codeForcesId}>CodeForces</a>}
              {atCoderId && <a href={atCoderId}>AtCoder</a>}
              {hackerRankId && <a href={hackerRankId}>HackerRank</a>}
              {hackerEarthId && <a href={hackerEarthId}>HackerEarth</a>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminPage;
