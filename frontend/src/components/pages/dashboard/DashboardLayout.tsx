import { Sidebar } from './Sidebar';
import { MainContent } from './MainContent';

export function DashboardLayout() {
  return (
    <div className="flex h-screen bg-[#0A0A0B]">
      <Sidebar />
      <MainContent />
    </div>
  );
}