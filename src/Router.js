import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContentsDetail from './pages/ContentsDetail/ContentsDetail';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContentsDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
