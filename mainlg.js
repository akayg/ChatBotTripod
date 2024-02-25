
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD7elnXg1elw7OLio0CiPGTn9gdcWVR4Lw",
    authDomain: "chatbotgit.firebaseapp.com",
    projectId: "chatbotgit",
    storageBucket: "chatbotgit.appspot.com",
    messagingSenderId: "364437865580",
    appId: "1:364437865580:web:5b70790c6f072531f3c449",
    measurementId: "G-RM5XK3XSV6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const provider = new GoogleAuthProvider();