import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewsHeader from '../NewsHeader/NewsHeader';
import General from '../NewsComponents/General';
import Business from '../NewsComponents/Business';
import Entertainment from '../NewsComponents/Entertainment';
import Health from '../NewsComponents/Health';
import Science from '../NewsComponents/Science';
import Sports from '../NewsComponents/Sports';
import Technology from '../NewsComponents/Technology';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <NewsHeader />
        <Routes>
          <Route path="/" exact element={<General />} />
          <Route path="/business" element={<Business />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/health" element={<Health />} />
          <Route path="/science" element={<Science />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
