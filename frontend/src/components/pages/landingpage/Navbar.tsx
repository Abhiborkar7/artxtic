import { Phone } from 'lucide-react';
import { Button } from '../../ui/button';
import { NavbarLink } from '../../layout/NavbarLink';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/authContext';

export function Navbar() {

  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();


  const handleLaunchAppClick = () => {
    navigate('/auth');
  };
  const navigateToHomepage = () => {
    navigate('/');
  }



  return (
    <nav className="fixed top-0 w-full bg-black/10 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div onClick={navigateToHomepage}>
            <div className="font-normal text-white flex items-center gap-2">
              <div className='text-4xl'>
                artxtic
              </div>
            </div>
          </div>


          <div className='flex items-center' >
            {/* <div className="hidden md:block flex-1 ml-10 items-baseline mr-10"> */}
              {/* <div className="flex items-center space-x-4"> */}
                <NavbarLink hasDropdown>Features</NavbarLink>
                <NavbarLink hasDropdown>Solutions</NavbarLink>
                <NavbarLink icon={<Phone className="h-4 w-4" />}>Contact</NavbarLink>
              {/* </div> */}
            {/* </div> */}
          </div>
            <div className="hidden md:block">
              <Button variant="primary" className="bg-purple-600 hover:bg-purple-700" onClick={handleLaunchAppClick}>
                {userLoggedIn ? "Get Started" : "Signin/Signup"}
              </Button>
            </div>
        </div>
      </div>
    </nav>
  );
}