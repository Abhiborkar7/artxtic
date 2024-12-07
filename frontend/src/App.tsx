import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from './components/pages/dashboard/DashboardLayout';
import { LandingPageLayout } from "./components/pages/landingpage/LandingPageLayout";
import Signinpage from './components/pages/auth/Signinpage';
import { MainContent } from './components/pages/dashboard/MainContent';
import { ImageCreation } from './components/pages/dashboard/pages/imageCreation/ImageCreation';
import Library from './components/pages/dashboard/pages/Library';
import VideoCreation from './components/pages/dashboard/pages/VideoCreation';
import CanvasEditor from './components/pages/dashboard/pages/CanvasEditor';
import AITools from './components/pages/dashboard/pages/AITools';
import Settings from './components/pages/dashboard/pages/Settings';
import HelpSupport from './components/pages/dashboard/pages/HelpSupport';
import ProtectedRoute from './components/ProtectedRoute';
import { useLoading } from './contexts/loadingContext';

export default function App() {
  const { isLoading } = useLoading();

  return (
    <>
      {
        isLoading &&
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      }

      <Router>
        <Routes>
          <Route path="/" element={<LandingPageLayout />} />
          <Route path="/auth" element={<Signinpage />} />
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
    </>

  );
}