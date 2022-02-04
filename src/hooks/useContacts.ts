import { useState, useEffect, useCallback, useMemo } from "react";
import { collection, doc, onSnapshot, query, where, getDoc } from "firebase/firestore";
import { db } from '../firebase';
import { UserContact } from '../types';

const useContacts = (userId: string | undefined) => {
	const [contactUids, setContactUids] = useState<string[]>([]);
	const [contacts, setContacts] = useState<UserContact[]>([]);

  const userDocRef = useMemo(() => doc(db, `users/${userId}`), [userId]);

  const fetchContacts = useCallback(() => {
		const q = query(collection(db, "contacts"), where('owner', '==', userDocRef));

		let unsubscribeFrom = onSnapshot(q, (QuerySnapshot) => {
			const fetchedContacts: any = [];
			// eslint ignore
			QuerySnapshot.forEach((document) => {
        const segments = document.data().correspondent._key.path.segments;
        const uid = segments[segments.length-1];
        fetchedContacts.push(uid)

			});
			setContactUids(fetchedContacts);
		});

		return unsubscribeFrom;
	}, [userDocRef]);

  useEffect(() => {
		const unsubscribe = fetchContacts();
		
		return () => {
			unsubscribe();
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const fetchUsers = useCallback(async() => {
		const users = [] as any;
		for (const uid of contactUids) {
			const userSnap = await getDoc(doc(db, `users/${uid}`));
			users.push({
				...userSnap.data(),
				uid: uid,
			})
		}
		setContacts(users);
	}, [contactUids])

	useEffect(() => {
		fetchUsers()
	}, [contactUids, fetchUsers])

  return contacts;
}

export default useContacts;