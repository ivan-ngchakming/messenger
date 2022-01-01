import { Timestamp } from "firebase/firestore";
import { User } from "firebase/auth";

export type UserContact = Pick<User, 'uid' | 'email' | 'displayName'>;

export type Message = { 
	id: string;
	text: string;
	from: string;
	to: string; 
	created: Timestamp;
};
