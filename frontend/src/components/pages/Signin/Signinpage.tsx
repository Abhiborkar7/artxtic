import { Navbar } from "@/components/pages/landingpage/Navbar";
import { SignupForm } from "@/components/ui/SignupForm";

const Signinpage = () => {
    return (
        <div className="min-h-screen bg-black text-white relative bg-gradient-to-br from-blue-950 via-gray-900 to-black">
            <div className="absolute inset-0 bg-grid-white/10 bg-grid-8 pointer-events-none" />
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen">
                <SignupForm />
            </div>
        </div>
    );
};

export default Signinpage;