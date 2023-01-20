import React, { useState, useEffect } from 'react';
import './styles/index.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Entrance from './components/Entrance';
import Layout from './components/Layout';
import Calendar from './components/Calendar';
import CalendarDay from './components/CalendarDay';

function App() {
  return (
    <>
      <Routes>
        {localStorage.authorized === 'false' &&
          <>
            <Route path='/entrance' element={<Entrance />} />
            <Route path='*' element={<Navigate to='/entrance' replace={true} />} />
          </>}
        {localStorage.authorized === 'true' &&
          <>
            <Route path="/" element={<Layout />}>
              <Route path='calendar' element={<Calendar />} />
              <Route path='calendar/date/:day/:month/:year' element={<CalendarDay />} />
            </Route>
            <Route path='*' element={<Navigate to='/calendar' replace={true} />} />
          </>
        }
      </Routes>
    </>
  );
}

export default App;
