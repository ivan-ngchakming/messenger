import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut as firebaseSignOut, User } from "firebase/auth";
import { app as firebaseApp } from '../firebase';

const auth = getAuth(firebaseApp);

const useAuth = () => {
	const [user, setUser] = useState<User|null>(null);
	
	const signIn = (email: string, password: string) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				setUser(user);
			})
			.catch((error) => {
				console.error('sign-in error', error);
			});
	}

	const signOut = () => {
		firebaseSignOut(auth).then(res => {
			console.log('signed-out', res);
		}).catch(error => {
			console.error('sign-out error', error);
		})
	}

	onAuthStateChanged(auth, (user) => {
		if (user) {
			setUser(user);
		} else {
			setUser(null);
		}
	});

	return { user, signOut, signIn }
}

export default useAuth;
