import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { AuthProvider } from './contexts/authContext';
import { LoadingProvider } from './contexts/loadingContext';
import { Toaster } from './components/ui/toaster';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <StrictMode>
    <LoadingProvider>
      <AuthProvider>
        <App />
        <Toaster />
      </AuthProvider>
    </LoadingProvider>
  </StrictMode>
);