import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyAEeMUbSbK0yJs_6pnerHpa0YvWUQr7IOA",
    authDomain: "denison-yacht-sales.firebaseapp.com",
    databaseURL: "https://denison-yacht-sales.firebaseio.com",
});


const base = Rebase.createClass(firebaseApp.database());

// named
export { firebaseApp };

// default
export default base;