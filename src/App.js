import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/checkout/Checkout';
import Login from './components/Login/Login';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import { useEffect } from 'react';
import { useCartState } from './components/context/cartState';

function App() {
  const [{ user }, dispatch] = useCartState()
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      //   user logged in
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        dispatch({
          type: 'SET_USER',
          user: user
        })
      }
      // user logged out
      else {
        // User is signed out
        // ...
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });
    return ()=>{
      // Anycleanup done here
      unSubscribe()
    }
  }, [])
console.log(user);
  return (
    <>
      <RouterProvider router={
        createBrowserRouter([
          {
            path: "/",
            element:
              <div>
                <Header />
                <Home />
              </div>
            ,
          },
          {
            path: "/login",
            element:
              <Login />
          },
          {
            path: "/checkout",
            element:
              <div>
                <Header />
                <Checkout />
              </div>,
          },
        ])
      } />
    </>
  );
}

export default App;
