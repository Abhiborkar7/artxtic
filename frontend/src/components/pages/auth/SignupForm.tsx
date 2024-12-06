"use client";
import React, { useEffect, useState } from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { BackgroundBeamsWithCollision } from "../../ui/background-beams-with-collision";
import { cn } from "@/lib/utils";
import { useAuth } from '../../../contexts/authContext';
import { Navigate } from "react-router-dom";
import { useLoading } from "@/contexts/loadingContext";
import { useToast } from "@/hooks/use-toast";
import { auth } from "@/firebase/firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export function SignupForm() {

  const { userLoggedIn } = useAuth();
  const { setLoading } = useLoading();
  const { toast } = useToast()

  const [isNewUser, setIsNewUser] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isSigningIn, setIsSigningIn] = useState(false);
  const { currentUser } = useAuth();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!isSigningIn) {

      setIsSigningIn(true);
      setLoading(true);

      if (isNewUser)
        createUser();
      else
        signIn();
    }
  };

  const createUser = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setIsSigningIn(false);
      console.log("Sign up with Email and Password successfull");
      console.log("currentUser", currentUser);
      console.log("User signed up:", userCredential.user);

      toast({
        title: "Sign Up Succesful",
        // description: "",
      })
    } catch (error: any) {
      setIsSigningIn(false);

      if (error.code === "auth/email-already-in-use") {
        toast({
          variant: "destructive",
          title: "This email is already in use.",
          // description: "",
        })
      } else {
        console.error("Error creating user:", error.message);
        toast({
          variant: "destructive",
          title: "An error occurred during signup. Please try again.",
          // description: "",
        })
      }



    } finally {
      setLoading(false);
    }
  }

  const signIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      setIsSigningIn(false);
      console.log("Sign in with Email and Password successfull");
      console.log("currentUser: ", currentUser);
      console.log("User logged in:", userCredential.user);

      toast({
        title: "Sign In Succesful",
        // description: "",
      })
    } catch (error: any) {
      setIsSigningIn(false);
      console.log("Error signing in with Email and Password", error);

      toast({
        variant: "destructive",
        title: "Sign In Unsuccesful",
        // description: "",
      })
    }
    finally {
      setLoading(false);

    }
  }

  const onGoogleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isSigningIn) {
      setLoading(true);
      setIsSigningIn(true);

      try {
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth, provider);
        setIsSigningIn(false);
        console.log("Sign in with Google successful");
        console.log("User logged in with Google:", userCredential.user);
        toast({
          title: "Google Sign In Succesful",
          // description: "",
        })
      }
      catch (error: any) {
        setIsSigningIn(false);
        console.log("Error signing in with Google", error);

        toast({
          variant: "destructive",
          title: "Google Sign In Unsuccesful",
          // description: "",
        })
      }
      finally {
        setLoading(false);

      }

    }
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in:", user);
      } else {
        console.log("No user is logged in");
      }
    });

    return () => unsubscribe();
  }, []);


  return (
    <BackgroundBeamsWithCollision>
      {userLoggedIn && (<Navigate to="/dashboard" replace />)}
      <div className="max-w-full w-full sm:p-24 mx-auto p-4 md:p-12 xl:p-36">
        <h2 className="font-bold text-xl text-neutral-200">
          Welcome to artxtic
        </h2>
        <p className="text-sm max-w-sm mt-2 text-neutral-300">
          Elevate Your Product Showcase with Engaging Videos & images!
        </p>
        <div className="flex flex-col space-y-4 mt-5">
          <button
            className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="button"
            onClick={onGoogleSignIn}
          >
            <div className="h-4 w-4 text-neutral-300" ><img src="/images/google-logo.png" alt="" /></div>
            <span className="text-neutral-300 text-sm">Google</span>
            <BottomGradient />
          </button>
        </div>

        <div className="relative my-2 flex items-center">
          <div className="flex-grow  bg-gradient-to-r from-transparent  to-neutral-700  my-8 h-[1px] "></div>
          <span className="mx-1 text-neutral-300 text-xs">or continue with email</span>
          <div className="flex-grow  bg-gradient-to-r from-neutral-700  to-transparent  my-8 h-[1px] "></div>
        </div>


        {
          isNewUser ? (
            <>
              <form className="my-8">
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                  <LabelInputContainer>
                    <Label htmlFor="firstname" className="text-neutral-200">
                      First name
                    </Label>
                    <Input
                      id="firstname"
                      placeholder="Tyler"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </LabelInputContainer>
                  <LabelInputContainer>
                    <Label htmlFor="lastname" className="text-neutral-200">
                      Last name
                    </Label>
                    <Input
                      id="lastname"
                      placeholder="Durden"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="email" className="text-neutral-200">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    placeholder="taylerdurden@gmail.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="password" className="text-neutral-200">
                    Password
                  </Label>
                  <Input
                    id="password"
                    placeholder="••••••••"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </LabelInputContainer>

                <button
                  className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                  type="button"
                  onClick={handleSubmit}
                >
                  Sign up &rarr;
                  <BottomGradient />
                </button>
              </form>

              <div className="text-center text-neutral-300">
                Already have an account?{' '}
                <span className="text-blue-500 cursor-pointer " onClick={() => { setIsNewUser(false) }}>
                  Sign in
                </span>
              </div>
            </>

          )
            :
            (
              <>
                <form className="my-8">
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="email" className="text-neutral-200">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      placeholder="taylerdurden@gmail.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </LabelInputContainer>

                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="password" className="text-neutral-200">
                      Password
                    </Label>
                    <Input
                      id="password"
                      placeholder="••••••••"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </LabelInputContainer>

                  <button
                    className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Sign in &rarr;
                    <BottomGradient />
                  </button>
                </form>

                <div className="text-center text-neutral-300">
                  Don't have an account?{' '}
                  <span className="text-blue-500 cursor-pointer" onClick={() => { setIsNewUser(true) }} >
                    Sign up
                  </span>
                </div>
              </>


            )
        }



      </div>
    </BackgroundBeamsWithCollision>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
