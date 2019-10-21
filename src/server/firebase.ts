import fire from 'firebase'

const config = {
  apiKey: 'AIzaSyAij_C3kZXtHbFbNyCyfQTaOIEk4EhYUVA',
  authDomain: 'minhasacola-app.firebaseapp.com',
  databaseURL: 'https://minhasacola-app.firebaseio.com',
  projectId: 'minhasacola-app',
  storageBucket: 'minhasacola-app.appspot.com',
  messagingSenderId: '808040346116',
  appId: '1:808040346116:web:0fab5011d332592b103b51',
  measurementId: 'G-N0B4816HPZ'
}

export const firebase = fire.initializeApp(config)
