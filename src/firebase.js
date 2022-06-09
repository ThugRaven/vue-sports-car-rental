import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyCcXEaHHLQsZnk8Zm1xFKxQ75XxKSVD4Jw',
	authDomain: 'vue-sports-car-rental.firebaseapp.com',
	projectId: 'vue-sports-car-rental',
	storageBucket: 'vue-sports-car-rental.appspot.com',
	messagingSenderId: '233423236620',
	appId: '1:233423236620:web:a1d8dd700b40ddca2f4829',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage();
