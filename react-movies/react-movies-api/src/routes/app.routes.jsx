import { Routes, Route, Navigate } from 'react-router-dom';

import { Details } from '../pages/Details';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { NewNote } from '../pages/NewNote';

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/details/:id" element={<Details/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/newnote" element={<NewNote/>} />

      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}