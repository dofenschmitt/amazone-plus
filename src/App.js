
import './App.css';
import react, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout.js";
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";




function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // [] means that the app will only run once when the app loads

    auth.onAuthStateChanged(authUser => {
      console.log('the user is >>>>> ', authUser);

      if(authUser){
          // the user is logged In / was signed In
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
      }else{
          // the user is logged Out 
          dispatch({
            type: 'SET_USER',
            user: null
          })
      }
    })

  }, [])


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
  </Router>
  );
}

export default App;
