import { useState, useEffect } from "react";
import { collection, addDoc, onSnapshot, query } from "firebase/firestore";
import { db } from '../firebase';
import { User, Message } from '../types';

const useMessages = ({ currentUser, toUser }: { currentUser: User, toUser: User }) => {
	const [messages, setMessages] = useState<Message[]>();

	const send = async(text: string) => {
		try {
			const docRef = await addDoc(collection(db, 'messages'), {
				from: currentUser.id,
				to: toUser.id,
				text: text,
			});
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	}

	useEffect(() => {
		const q = query(collection(db, "messages"));

		onSnapshot(q, (querySnapshot) => {
			const _messages: any = [];
			// eslint ignore
			querySnapshot.forEach((doc) => {
				_messages.push(doc.data());
			});

			console.log("Current messages: ", _messages);
			setMessages(_messages);
		});
	}, [])
	
	return { send, messages: messages || [] as Message[] };
}

export default useMessages;
