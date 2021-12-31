import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut as firebaseSignOut } from "firebase/auth";
import { app as firebaseApp } from '../firebase';

const auth = getAuth(firebaseApp);

const useAuth = () => {
	const [signedIn, setSignedIn] = useState(false);
	
	const signIn = () => {
		const email = 'test@gmail.com';
		const password = 'test1234';

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
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
			const uid = user.uid;
			console.log('User logged-in', user)
			setSignedIn(true);
		} else {
			console.log('User logged-out')
			setSignedIn(false);
		}
	});

	return { signedIn, signOut, signIn }
}

export default useAuth;
