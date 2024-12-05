import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom';

export function DashboardLayout() {
  return (
    <div className="flex h-screen bg-[#0A0A0B]">
      <Sidebar />
      <div className="flex-1 overflow-auto text-white">
        <Outlet />
      </div>
    </div>
  );
}