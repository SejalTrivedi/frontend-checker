import { lazy } from 'react';
import Loadable from '../layout/loader/Loadable';
import { Home } from '@mui/icons-material';
import { Routes, Route, Navigate } from 'react-router-dom';

const LoginPageNew = Loadable(lazy(async () => await import('../components/pages/auth/Login')));
const CandidateList = Loadable(lazy(async () => await import('../components/pages/candidate/CandidateList')));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/candidate" element={<CandidateList />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

// const routes = [
//   {
//     path: '/auth',
//     children: [
//       { path: 'login', name: 'Login', element: <LoginPageNew /> },
//     ],
//   },
//   { path: 'candidate', name: 'Candidate', element: <CandidateList />}
// ];

export default AppRoutes;
