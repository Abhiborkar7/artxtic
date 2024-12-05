import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';

interface NavbarLinkProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  hasDropdown?: boolean;
}

export function NavbarLink({ icon, children, hasDropdown = false }: NavbarLinkProps) {
  return (
    <Button variant="ghost" className="text-white hover:bg-purple-800">
      {icon && <span className="mr-2">{icon}</span>}
      {children}
      {hasDropdown && <ChevronDown className="ml-2 h-4 w-4" />}
    </Button>
  );
}