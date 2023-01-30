import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from '../pages/HomePages/HomePages';
import { EventPage } from '../pages/HomePages/EventPage/EventPage';
import { EventSubPage } from './EventSubPage/EventSubPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="event" element={<EventPage />}>
          <Route path="eventId" element={<EventSubPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
