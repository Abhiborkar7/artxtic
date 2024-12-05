import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from './components/pages/dashboard/DashboardLayout';
import { LandingPageLayout } from "./components/pages/landingpage/LandingPageLayout";
import Signinpage from './components/pages/Signin/Signinpage';
import { MainContent } from './components/pages/dashboard/MainContent';
import { ImageCreation } from './components/pages/dashboard/pages/ImageCreation';
import Library from './components/pages/dashboard/pages/Library';
import VideoCreation from './components/pages/dashboard/pages/VideoCreation';
import CanvasEditor from './components/pages/dashboard/pages/CanvasEditor';
import AITools from './components/pages/dashboard/pages/AITools';
import Settings from './components/pages/dashboard/pages/Settings';
import HelpSupport from './components/pages/dashboard/pages/HelpSupport';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageLayout />} />
        <Route path="/signin" element={<Signinpage />} />
        <Route path="/home" element={<DashboardLayout />} />

        {/* Dashboard Routes - Protected */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<MainContent />} />
          <Route path="library" element={<Library />} />
          <Route path="image" element={<ImageCreation />} />
          <Route path="video" element={<VideoCreation />} />
          <Route path="canvas" element={<CanvasEditor />} />
          <Route path="ai" element={<AITools />} />
          <Route path="settings" element={<Settings />} />
          <Route path="help" element={<HelpSupport />} />

        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </Router>
  );
}