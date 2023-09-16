import React from 'react'
import { useRouter } from 'next/router';
import classes from "./AdminEditEvent.module.css"; 

const AdminEditEvent = () => {
    const router = useRouter();
    const { event_id } = router.query;

    if(event_id==null) {
        return <div>Invalid event id: {event_id}</div>
    }

  return (
    <div className={classes.adminEditEvent}>
      AdminEditEvent:  {event_id}
    </div>
  )
}

export default AdminEditEvent
