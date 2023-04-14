importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js')
console.log('firebase-messaging-sw.js')
firebase.initializeApp({
  apiKey: "AIzaSyCHRlBfVpbMX7gz0VC0JqAXPRheqKkxZ4U",
  authDomain: "test-ab53c.firebaseapp.com",
  projectId: "test-ab53c",
  storageBucket: "test-ab53c.appspot.com",
  messagingSenderId: "533163968738",
  appId: "1:533163968738:web:c35d4f56b79859597936bb",
  measurementId: "G-JGX3K2QE30",
})

const messaging = firebase.messaging()
