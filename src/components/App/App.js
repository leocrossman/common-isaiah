import './App.css';
// import withFirebaseAuth from 'react-with-firebase-auth'
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import firebaseConfig from '../../firebaseConfig';
import fire from '../../fire'
import Auth from '../Auth/Auth'
import {Button} from '@material-ui/core'
import SignIn from '../SignIn/SignIn'
import { EcoTwoTone } from '@material-ui/icons';
import {useEffect, useState} from 'react'

function App() {
  const [isApplicantClicked,setApplicantClicked] = useState(false);
  
  const handleApplicantClick = (e) => {
    e.preventDefault();

    setApplicantClicked(true); // change state
  }

  return (
    <div className="App-header">
      <h1>The Common App for Tech</h1>
      <h3>I am an...</h3>
      <Button onClick={handleApplicantClick} variant="contained" color="primary">Applicant</Button>
      <Button variant="contained" color="primary">Employer</Button>
      {/* <Auth></Auth> */}
      {isApplicantClicked && <SignIn />}
    </div>
  );
}


export default App

