import { Home, Library, Image, Video, Pencil, Wand2, LogOut, HelpCircle } from 'lucide-react';
import { UserProfile } from '../../layout/UserProfile';
import { SidebarLink } from '../../layout/SidebarLink';

const mainLinks = [
  { icon: Home, label: 'Home', path: '/dashboard/home' },
  { icon: Library, label: 'Library', path: '/dashboard/library' },
];

const toolLinks = [
  { icon: Image, label: 'Image Creation', path: '/dashboard/image' },
  { icon: Video, label: 'Video Creation', path: '/dashboard/video' },
  { icon: Pencil, label: 'Canvas Editor', path: '/dashboard/canvas' },
  { icon: Wand2, label: 'AI Tools', path: '/dashboard/ai' },
];

const bottomLinks = [
  { icon: LogOut, label: 'Logout', path: '/landingpage' },
  { icon: HelpCircle, label: 'Help & Support', path: '/dashboard/help' },
];

export function Sidebar() {
  return (
    <div className="w-64 h-full bg-[#0A0A0B] border-r border-white/10 flex flex-col">
      <UserProfile />

      <div className="flex-1 px-3 py-4 space-y-6">
        <div className="space-y-1">
          {mainLinks.map((link) => (
            <SidebarLink to={link.path} key={link.label} icon={link.icon} label={link.label} />
          ))}
        </div>

        <div>
          <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            AI Tools
          </h3>
          <div className="mt-2 space-y-1">
            {toolLinks.map((link) => (
              <SidebarLink  to={link.path} key={link.label} icon={link.icon} label={link.label} />
            ))}
          </div>
        </div>
      </div>

      <div className="p-3 border-t border-white/10">
        {bottomLinks.map((link) => (
          <SidebarLink  to={link.path} key={link.label} icon={link.icon} label={link.label} />
        ))}
      </div>
    </div>
  );
}