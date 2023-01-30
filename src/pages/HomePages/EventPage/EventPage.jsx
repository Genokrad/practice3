import { useEffect } from 'react';
import { useState } from 'react';
import { fetchEvents } from 'services/services';
import { Link } from 'react-router-dom';

export const EventPage = () => {
  const [events, setEvents] = useState({});

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  return events.map(({ name, id }) => (
    <li key={id}>
      <Link to={id}>{name}</Link>
    </li>
  ));
};
