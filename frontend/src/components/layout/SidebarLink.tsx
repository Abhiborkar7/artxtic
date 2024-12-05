import { LucideIcon } from 'lucide-react';

interface SidebarLinkProps {
  icon: LucideIcon;
  label: string;
}

export function SidebarLink({ icon: Icon, label }: SidebarLinkProps) {
  return (
    <button className="flex items-center w-full px-3 py-2 text-sm text-gray-300 rounded-lg hover:bg-white/5 hover:text-white transition-colors">
      <Icon className="w-5 h-5 mr-3" />
      {label}
    </button>
  );
}