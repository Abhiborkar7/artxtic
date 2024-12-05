import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { DashboardLayout } from './components/pages/dashboard/DashboardLayout';
import { LandingPageLayout } from "./components/pages/landingpage/LandingPageLayout";
import Signinpage from './components/pages/Signin/Signinpage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageLayout />} />
        <Route path="/home" element={<DashboardLayout />} />
        <Route path="/signin" element={<Signinpage />} />

      </Routes>
    </Router>
  );
}