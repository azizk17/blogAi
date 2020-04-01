import firebase from 'firebase'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: `${process.env.PROJECTID}`,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
// export date
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

export default function({ store, redirect }) {
  // firebase.auth().onAuthStateChanged((user) => {
  //   console.log('user has changed @@@', user)
  //   if (user) {
  //     db.collection('metadata').doc(`${user.uid}`).onSnapshot((snapshot) => {
  //       // store.dispatch('auth/getIdTokenResult')
  //       store.dispatch('auth/getIdToken').then(() => store.dispatch('auth/getIdTokenResult'))
  //     }, (error) => {
  //       console.log('metadata data snapshot error', error)
  //     })
  //     store.commit('auth/SET_USER', JSON.parse(JSON.stringify(user)))
  //   } else {
  //     store.commit('auth/REST_USER', {})
  //   }
  // })
}
