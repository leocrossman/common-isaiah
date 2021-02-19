import './Auth.css';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app'


function Auth({user,
  signOut,
  signInWithGoogle,}) {
  return (
    <div>
        {
          user 
            ? <p>Hello, {user.displayName}</p>
            : <p>Please sign in.</p>
        }
        {
          user
            ? <button onClick={signOut}>Sign out</button>
            : <button onClick={signInWithGoogle}>Sign in with Google</button>
        }
    </div>
  );
}

const firebaseAppAuth = firebase.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(Auth);