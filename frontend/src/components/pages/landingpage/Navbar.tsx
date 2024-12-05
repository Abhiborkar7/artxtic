import { Users, Code, Phone } from 'lucide-react';
import { Button } from '../../ui/button';
import { NavbarLink } from '../../layout/NavbarLink';
import { useNavigate } from 'react-router-dom';

export function Navbar() {

  const navigate = useNavigate();

  const handleLaunchAppClick = () => {
    //change this to /signup
    navigate('/dashboard');
  };  
  const navigateToHomepage = () => {
    navigate('/');
  }



  return (
    <nav className="fixed top-0 w-full bg-black/10 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-white flex items-center gap-2">
                <div className='inline-flex text-white items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors focus-visible:outline-none  focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary underline-offset-4 hover:underline h-9 px-4 py-2 text-2xl font-semibold md:text-3xl lg:text-4xl' style={{ fontFamily: 'PolySans, sans-serif' }} onClick={navigateToHomepage}  >
                  artxtic
                </div>
              </div>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <NavbarLink hasDropdown>Features</NavbarLink>
                <NavbarLink hasDropdown>Solutions</NavbarLink>
                <NavbarLink hasDropdown>Resources</NavbarLink>
                <NavbarLink icon={<Users className="h-4 w-4" />}>For Teams</NavbarLink>
                <NavbarLink icon={<Code className="h-4 w-4" />}>For Developers</NavbarLink>
                <NavbarLink icon={<Phone className="h-4 w-4" />}>Contact</NavbarLink>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Button variant="primary" className="bg-purple-600 hover:bg-purple-700" onClick={handleLaunchAppClick}>
              Launch App
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}