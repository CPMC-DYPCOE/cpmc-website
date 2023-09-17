import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import classes from './ImageToggler.module.css';

const ImageToggler = () => {
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const router = useRouter();

  const teams = ['2022-2023', '2023-2024'];
  const events = [
    { label: 'Master Talk', value: 'master_talk' },
    { label: 'Code Room', value: 'code_room' }
  ];

  useEffect(() => {
    if (selectedTeam) {
      router.push(`/images/teams/${selectedTeam}`);
    }
  }, [selectedTeam]);

  useEffect(() => {
    if (selectedEvent) {
      router.push(`/images/events/${selectedEvent}`);
    }
  }, [selectedEvent]);

  const handleTeamChange = (e) => {
    setSelectedTeam(e.target.value);
    setSelectedEvent('');
  };

  const handleEventChange = (e) => {
    setSelectedEvent(e.target.value);
    setSelectedTeam('');
  };

  return (
      <>
          <div className={classes.container}> 
      <div className={classes.team}>
        <select className={classes.input} value={selectedTeam} onChange={handleTeamChange}>
          <option value="">Select Team</option>
          {teams.map((team, index) => (
            <option key={index} value={team}>
              {team}
            </option>
          ))}
        </select>
      </div>
      <div className={classes.event}>
        <select className={classes.input} value={selectedEvent} onChange={handleEventChange}>
          <option value="">Select Event</option>
          {events.map((event, index) => (
            <option key={index} value={event.value}>
              {event.label}
            </option>
          ))}
        </select>
      </div>
          </div>
    </>
  );
};

export default ImageToggler;
