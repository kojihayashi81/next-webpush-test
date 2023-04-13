import Link from 'next/link'
import React, { useEffect, useMemo } from 'react'
import * as firebase from 'firebase/compat/app'
import 'firebase/compat/messaging'
import { firebaseCloudMessaging } from '../utils/WebPush'

function App() {
  useEffect(() => {
    setToken()
    // this is working
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('message', (event) => console.log('event for the service worker', event))
    }
    async function setToken() {
      try {
        const token = await firebaseCloudMessaging.init()
        if (token) {
          console.log('token', token)
          // not working
          // getMessage()
        }
      } catch (error) {
        console.log(error)
      }
    }
  })

  function getMessage() {
    console.log('message functions')
    const messaging = firebase.messaging()
    messaging.onMessage((message) => console.log('foreground', message))
  }

  return (<main>
    <div>Woah! wait let me get it right</div>
    <Link href="/toast">toast</Link>
  </main>)
}
export default App