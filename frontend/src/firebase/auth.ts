import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, UserCredential, GoogleAuthProvider, Auth } from "firebase/auth";

// Type for the function parameters
type AuthCredentials = {
  email: string;
  password: string;
};

// Create user with email and password
export const doCreateUserWithEmailAndPassword = (email: string, password: string): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Sign in with email and password
export const doSignInWithEmailAndPassword = (email: string, password: string): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
}

// Sign in with Google
export const doSignInWithGoogle = async (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  // result.user can be accessed here, but it's not returned in this function
  return result;
}

// Sign out user
export const doSignOut = (): Promise<void> => {
  return auth.signOut();
}

// Uncomment and update the functions for password reset, update, and email verification if needed

// export const doPasswordReset = (email: string): Promise<void> => {
//     return sendPasswordResetEmail(auth, email);
// }

// export const doPasswordUpdate = (password: string): Promise<void> => {
//     return updatePassword(auth.currentUser, password);
// }

// export const doSendEmailVerification = (): Promise<void> => {
//     return sendEmailVerification(auth.currentUser, {
//         url: `${window.location.origin}/home`
//     });
// }
