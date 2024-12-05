import { Home, Library, Image, Video, Pencil, Wand2, Settings, HelpCircle } from 'lucide-react';
import { UserProfile } from '../../layout/UserProfile';
import { SidebarLink } from '../../layout/SidebarLink';

const mainLinks = [
  { icon: Home, label: 'Home' },
  { icon: Library, label: 'Library' },
];

const toolLinks = [
  { icon: Image, label: 'Image Creation' },
  { icon: Video, label: 'Video Creation' },
  { icon: Pencil, label: 'Canvas Editor' },
  { icon: Wand2, label: 'AI Tools' },
];

const bottomLinks = [
  { icon: Settings, label: 'Settings' },
  { icon: HelpCircle, label: 'Help & Support' },
];

export function Sidebar() {
  return (
    <div className="w-64 h-full bg-[#0A0A0B] border-r border-white/10 flex flex-col">
      <UserProfile />

      <div className="flex-1 px-3 py-4 space-y-6">
        <div className="space-y-1">
          {mainLinks.map((link) => (
            <SidebarLink key={link.label} icon={link.icon} label={link.label} />
          ))}
        </div>

        <div>
          <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            AI Tools
          </h3>
          <div className="mt-2 space-y-1">
            {toolLinks.map((link) => (
              <SidebarLink key={link.label} icon={link.icon} label={link.label} />
            ))}
          </div>
        </div>
      </div>

      <div className="p-3 border-t border-white/10">
        {bottomLinks.map((link) => (
          <SidebarLink key={link.label} icon={link.icon} label={link.label} />
        ))}
      </div>
    </div>
  );
}