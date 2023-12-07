import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';
import EditProfile from './pages/profile/edit';
import ViewProfile from './pages/profile/view';

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/profile/create' element={<EditProfile type={'create'} />} />
        <Route path={`/profile/:email`} element={<ViewProfile />} />
        <Route path='/profile/edit' element={<EditProfile type={'edit'} />} />
      </Routes>
    </>
  )
}

export default App
