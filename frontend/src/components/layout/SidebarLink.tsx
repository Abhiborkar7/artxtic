import { LucideIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

interface SidebarLinkProps {
  to: string;
  icon: LucideIcon;
  label: string;
}

export function SidebarLink({ to, icon: Icon, label }: SidebarLinkProps) {

  const handleOnClick = () => {
    if (label === 'Logout') {
      const auth = getAuth();
      signOut(auth).then(() => {
        console.log('User signed out');
      }).catch((error) => {
        console.error('Sign out error', error);
      });
    }
  }



  return (
    <NavLink onClick={handleOnClick} to={to} className="flex items-center w-full px-3 py-2 text-sm text-gray-300 rounded-lg hover:bg-white/5 hover:text-white transition-colors">
      <Icon className="w-5 h-5 mr-3" />
      {label}
    </NavLink>
  );
}