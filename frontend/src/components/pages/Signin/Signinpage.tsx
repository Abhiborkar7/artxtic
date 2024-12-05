import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { SignupForm } from "@/components/ui/SignupForm";

const Signinpage = () => {
    return (
        <BackgroundBeamsWithCollision>

            <div className="min-h-screen dark bg-black text-white relative bg-gradient-to-br from-blue-950 via-gray-900 to-black w-full">
                <div className="absolute inset-0 bg-grid-white/10 bg-grid-8 pointer-events-none" />
                <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg" />
                <div className="flex items-center justify-center min-h-screen">
                    <div className="flex flex-col md:flex-row bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg overflow-hidden w-full">
                        
                        <div className="hidden md:block w-1/2">
                            <img
                                src="/images/signup.png"
                                alt="Sign In"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="w-full md:w-1/2 p-8">
                            <SignupForm />
                        </div>
                    </div>
                </div>
            </div>
        </BackgroundBeamsWithCollision>
    );
};

export default Signinpage;