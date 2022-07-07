import { useEffect, useState } from 'react';
import classes from './AdminPage.module.css';

const AdminPage = () => {
  const [students, setStudents] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [event1, setEvent1] = useState([]);

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
          setEvent1(data.event1);
        });
    } catch (error) {
      console.log(error);
      alert('Something Went Wrong');
    }
  }, []);
  let a = 0;
  return (
    <>
      <h1 className={classes.admin}>Admin</h1>
      <div className={classes.outer_container}>
        <div className={classes.inner_block}>
          <h1 className={classes.heading}>
            Contact<span className={classes.red}> Us</span>
          </h1>
          <div className={classes.data_items}>
            {contacts.map((contact) => {
              return (
                <div key={contact._id} className={classes.data_item}>
                  <h1>Name: {contact.name}</h1>
                  <h3>Email: {contact.email}</h3>
                  <p>Message: {contact.message}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.inner_block}>
          <h1 className={classes.heading}>
            Students Interested to<span className={classes.red}> Join Club</span>
          </h1>
          <div className={classes.data_item2}>
            {students.map((student) => {
              const {
                _id,
                firstName,
                branch,
                email,
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
                <div key={_id} className={classes.data_items2}>
                  <h1>Name: {firstName}</h1>
                  <h3>Branch: {branch}</h3>
                  <h3>Email: {email}</h3>
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
        {/* <div className={classes.inner_block}>
          <h1 className={classes.heading}>
            Masters<span className={classes.red}> Talk</span>
          </h1>
          <div className={classes.data_item2}>
            {event1.map((student) => {
              const {
                _id,
                name,
                branch,
                email,
                phoneNumber,
                academicYear,
                question,
                question2,
                gre,
                tofel,
                gate,
                ielts,
                duolingo,
                aim
              } = student;
              a += 1;
              return (
                <div key={_id} className={classes.data_items2}>
                  <h1>Name: {name}</h1>
                  <h3>Branch: {branch}</h3>
                  <h3>Email: {email}</h3>
                  <p>Phone Number: {phoneNumber}</p>
                  <p>Academic Year: {academicYear}</p>
                  <p>Question: {question}</p>
                  <p>Question2: {question2}</p>
                  <p>Aim: {aim}</p>
                  <p>GRE: {gre}</p>
                  <p>TOFEL: {tofel}</p>
                  <p>GATE: {gate}</p>
                  <p>IELTS: {ielts}</p>
                  <p>DUOLINGO: {duolingo}</p>
                </div>
              );
            })}
          </div>
          <div>
            {event1.map((student) => {
              const { question, question2 } = student;
              return (
                <>
                  <div>Abroad studies {question}</div>
                  <div>GATE {question2}</div>
                </>
              );
            })}
          </div>
          <div>
            <h1>FE</h1>
            {event1.map((student) => {
              const { name, phoneNumber, email, academicYear, question, question2 } = student;
              return (
                <>
                  {academicYear === 'FE' && (
                    <div>
                      :{name} : {email} :{phoneNumber}:
                    </div>
                  )}
                </>
              );
            })}
            <h1>SE</h1>
            {event1.map((student) => {
              const { name, phoneNumber, email, academicYear, question, question2 } = student;
              return (
                <>
                  {academicYear === 'SE' && (
                    <div>
                      :{name} : {email} :{phoneNumber}:
                    </div>
                  )}
                </>
              );
            })}
            <h1>TE</h1>
            {event1.map((student) => {
              const { name, email, phoneNumber, academicYear, question, question2 } = student;
              return (
                <>
                  {academicYear === 'TE' && (
                    <div>
                      :{name} : {email} :{phoneNumber}:
                    </div>
                  )}
                </>
              );
            })}
            <h1>BE</h1>
            {event1.map((student) => {
              const { name, email, phoneNumber, academicYear, question, question2 } = student;
              return (
                <>
                  {academicYear === 'BE' && (
                    <div>
                      :{name} : {email} :{phoneNumber}:
                    </div>
                  )}
                </>
              );
            })}

            <h1>mails</h1>
            {event1.map((student) => {
              const { email } = student;
              return (
                <>
                  <div>{email}</div>
                </>
              );
            })}
          </div>
        </div> */}
      </div>
      <h1>{a}</h1>
    </>
  );
};

export default AdminPage;

//Yoo
