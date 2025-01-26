import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyAWLJwCWbfrCpC07ZKUeLEd6FpXEfZKh3E",
  authDomain: "pagina-react-db.firebaseapp.com",
  projectId: "pagina-react-db",
  storageBucket: "pagina-react-db.firebasestorage.app",
  messagingSenderId: "363944775215",
  appId: "1:363944775215:web:84b5054a323f9a7b5b00da",
  measurementId: "G-6QNY3K21FB"
};

export const app = initializeApp(firebaseConfig)