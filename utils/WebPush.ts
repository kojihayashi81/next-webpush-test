import 'firebase/compat/messaging'
import firebase from 'firebase/compat/app'
import localforage from 'localforage'

const firebaseCloudMessaging = {
  //checking whether token is available in indexed DB
  tokenInlocalforage: async () => {
    console.log('localforage get item')
    return localforage.getItem('fcm_token')
  },
  //initializing firebase app
  init: async function () {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyCHRlBfVpbMX7gz0VC0JqAXPRheqKkxZ4U",
        authDomain: "test-ab53c.firebaseapp.com",
        projectId: "test-ab53c",
        storageBucket: "test-ab53c.appspot.com",
        messagingSenderId: "533163968738",
        appId: "1:533163968738:web:c35d4f56b79859597936bb",
        measurementId: "G-JGX3K2QE30",
      })

      try {
        const messaging = firebase.messaging()
        const tokenInLocalForage = await this.tokenInlocalforage()
        //if FCM token is already there just return the token
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage
        }
        //requesting notification permission from browser
        const status = await Notification.requestPermission()
        if (status && status === 'granted') {
          //getting token from FCM
          const fcm_token = await messaging.getToken({
            vapidKey: 'BAqr3b9WGLLDFF8esK0TNv1P_fmLrJ0vJhpu9yvj6o-\_1Zjym18kE8n2FwYR6daV1qgBNarxXm54MqXdDEY5DxQ'
          })
          if (fcm_token) {
            //setting FCM token in indexed db using localforage
            localforage.setItem('fcm_token', fcm_token)
            console.log('fcm token', fcm_token)
            //return the FCM token after saving it
            return fcm_token
          }
        }
      } catch (error) {
        console.error(error)
        return null
      }
    }
  }
}
export { firebaseCloudMessaging }