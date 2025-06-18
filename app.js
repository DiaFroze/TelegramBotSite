import { auth } from './firebase-config.js';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Показ/скрытие
window.toggleAuthBox = function() {
  const box = document.getElementById('authBox');
  box.style.display = box.style.display === 'none' ? 'block' : 'none';
}

window.showRegister = function() {
  document.getElementById('registerForm').style.display = 'block';
  document.getElementById('authBox').style.display = 'none';
}

window.register = function() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      sendEmailVerification(user).then(() => {
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('emailSentMessage').style.display = 'block';
      });
    })
    .catch((error) => {
      alert("Ошибка: " + error.message);
    });
}
