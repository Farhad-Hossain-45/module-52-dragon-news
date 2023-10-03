
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlZ2J-3jQcwbt6zA7iO4slhbBHyA2S4kg",
  authDomain: "module-52-dragon-news-11ef1.firebaseapp.com",
  projectId: "module-52-dragon-news-11ef1",
  storageBucket: "module-52-dragon-news-11ef1.appspot.com",
  messagingSenderId: "224712782503",
  appId: "1:224712782503:web:a48f4b59b9b52ea66fe182"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;