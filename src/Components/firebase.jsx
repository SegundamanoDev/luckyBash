// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDQgLTCb2mdz7SxrmjT68fSUFJ26IGmM8A",
	authDomain: "courier-app-993d5.firebaseapp.com",
	projectId: "courier-app-993d5",
	storageBucket: "courier-app-993d5.appspot.com",
	messagingSenderId: "1018906780215",
	appId: "1:1018906780215:web:8df6fa08d221ff2c4b55b2",
	measurementId: "G-DCCHJH0QHM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
