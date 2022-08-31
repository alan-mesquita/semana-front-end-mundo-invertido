  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use 
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB-0qBwmM9kUZJsk3kKEaFpUsG7VAN1SGo",
    authDomain: "mundo-invertido-58fe7.firebaseapp.com",
    projectId: "mundo-invertido-58fe7",
    storageBucket: "mundo-invertido-58fe7.appspot.com",
    messagingSenderId: "818106931955",
    appId: "1:818106931955:web:c1327c5fff6f3dd651b586"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  export default app