import { useState, useEffect, useCallback, useMemo } from "react";
import { collection, addDoc, doc, deleteDoc, onSnapshot, query, orderBy, limit, where, serverTimestamp } from "firebase/firestore";
import { logEvent } from "firebase/analytics";
import { User as FirebaseUser } from "firebase/auth";
import { db, analytics } from '../firebase';
import { Message, UserContact } from '../types';

const useMessages = ({ currentUser, toUser }: { currentUser: FirebaseUser, toUser: UserContact }) => {
	const [allMessages, setAllMessages] = useState<{to: Message[], from: Message[]}>();

	const send = async(text: string) => {
		try {
			const docRef = await addDoc(collection(db, 'messages'), {
				from: currentUser.uid,
				to: toUser.uid,
				text: text,
				created: serverTimestamp() 
			});
			
			logEvent(analytics, 'send_message');

			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	}

	const clearAll = async() => {
		if (!messages) return;
		messages.forEach(message => {
			deleteDoc(doc(db, 'messages', message.id));
		})
		logEvent(analytics, 'clear_messages');
	}

	const queryFromMessages = useCallback(() => {
		const fromQuery = query(collection(db, "messages"), where('from', '==', currentUser.uid), where('to', '==', toUser.uid), orderBy("created"), limit(100));

		let unsubscribeFrom = onSnapshot(fromQuery, (FromQuerySnapshot) => {
			const fromMessages: any = [];
			// eslint ignore
			FromQuerySnapshot.forEach((doc) => {
				fromMessages.push({...doc.data(), id: doc.id});
			});

			setAllMessages(prev => ({
				to: prev?.to || [],
				from: fromMessages || []
			}));
		});

		return unsubscribeFrom;
	}, [currentUser.uid, toUser.uid]);

	const queryToMessages = useCallback(() => {
		const toQuery = query(collection(db, "messages"), where('to', '==', currentUser.uid), where('from', '==', toUser.uid), orderBy("created"), limit(100));
		
		const unsubscribeTo = onSnapshot(toQuery, (ToQuerySnapshot) => {
			const toMessages: any = [];
			// eslint ignore
			ToQuerySnapshot.forEach((doc) => {
				toMessages.push({...doc.data(), id: doc.id});
			});

			setAllMessages(prev => ({
				to: toMessages || [],
				from: prev?.from || []
			}));
		});

		return unsubscribeTo;
	}, [currentUser.uid, toUser.uid]);

	const messages = useMemo(() => {
		if (!allMessages) return null;

		const output = [...allMessages.from, ...allMessages.to];
		output.sort((a, b) => {
			if (!a.created) return 1;
			if (!b.created) return -1;

			let da = a.created.toDate().getTime(),
        	db = b.created.toDate().getTime();
			return da - db;
		});
	
		return output;
	}, [allMessages]);

	useEffect(() => {
		const unsubscribeFrom = queryFromMessages();
		const unsubscribeTo = queryToMessages();
		
		return () => {
			unsubscribeTo();
			unsubscribeFrom();
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	
	return { send, messages, clearAll };
}

export default useMessages;
