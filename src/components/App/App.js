import './App.css';
// import withFirebaseAuth from 'react-with-firebase-auth'
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import firebaseConfig from '../../firebaseConfig';
import fire from '../../fire'
import Auth from '../Auth/Auth'

// const firebaseApp = firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App-header">
      <h1>Hello</h1>
      <Auth></Auth>
    </div>
  );
}


export default App

