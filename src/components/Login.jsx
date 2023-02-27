import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBhKtoDkEyjLPmg9v-XikkMzcgNCINTQQg",
  authDomain: "fb-jwt-if.firebaseapp.com",
  projectId: "fb-jwt-if",
  storageBucket: "fb-jwt-if.appspot.com",
  messagingSenderId: "183852282809",
  appId: "1:183852282809:web:db83a61cbcba0938037c68"
};

export default function Login({setIsLoggedIn}) {


  const handleSignin = () => {
    // connect to firebase project
    const app = initializeApp(firebaseConfig)
    // connect to auth
    const auth = getAuth(app)
    // create a provider
    const provider = new GoogleAuthProvider()
    // popup signin window
    signInWithPopup(auth, provider)
    // handle .then and .catch
    .then(() => setIsLoggedIn(true))
    .catch(alert)
  }

  return(
    <>
      <h1>Login</h1>
      <button onClick={handleSignin}>Sign In With Google</button>
    </>
  )
}
