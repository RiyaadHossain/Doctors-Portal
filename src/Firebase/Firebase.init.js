
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLRwoTWtC7QDx8wYnS5sPIKRmOqIHWD2I",
  authDomain: "doctors-portal-003.firebaseapp.com",
  projectId: "doctors-portal-003",
  storageBucket: "doctors-portal-003.appspot.com",
  messagingSenderId: "412347347059",
  appId: "1:412347347059:web:c72cc411e351118b227a06"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth