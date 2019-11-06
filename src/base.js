import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyBrT5PsSZ6MukkxjCkAe7_gzw6FpDHWi00",
	authDomain: "catch-of-the-day-cac5f.firebaseapp.com",
	databaseURL: "https://catch-of-the-day-cac5f.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
