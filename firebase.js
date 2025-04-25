 
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

    const firebaseConfig = {
      apiKey: "AIzaSyDEBpiKwKaFz3QDTfuvwZEvvIJhAmMx3mk",
      authDomain: "tourxsagar.firebaseapp.com",
      projectId: "tourxsagar",
      storageBucket: "tourxsagar.firebasestorage.app",
      messagingSenderId: "948168875764",
      appId: "1:948168875764:web:d371b146db691d7f0808a1",
      measurementId: "G-N6J5BXZBZB"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    document.getElementById("signupForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          alert("SignUp successful!");
          window.location.href = "login.html";
        })
        .catch((error) => {
          alert(error.message);
        });
    });
 