// hooks/useLogin.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getFirebaseAuth } from '../utils/firebase';

export async function login(email, password) {
    const auth = getFirebaseAuth();
    if (!auth) {
      throw new Error('Firebase Auth is not available (maybe running on server)');
    }
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Logged in user:', user);
      return user;
    } catch (error) {
      console.error('Login error:', error.message);
      throw error;
    }
  }

export async function logout() {
  try {
    await auth.signOut();
    console.log('User logged out');
  } catch (error) {
    console.error('Logout error:', error.message);
    throw error;
  }
}

export async function register(email, password, displayName='') {
  const auth = getFirebaseAuth();
  if (!auth) {
    throw new Error('Firebase Auth is not available (maybe running on server)');
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    if (displayName.length > 0) {
      await updateProfile(userCredential.user, displayName);
      console.log('Display name updated:', displayName);
    }
    const user = userCredential.user;
    console.log('Registered user:', user);
    return user;
  } catch (error) {
    console.error('Registration error:', error.message);
    throw error;
  }
}
