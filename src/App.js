import "./App.css";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import SignUp from "./pages/SignUpPage";
// import LoginPage from "./pages/LoginPage";
import Navigation from "./pages/Navigation/Navigation";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/dashboard' component={Dashboard} />
          <Route path='tsk:id' component='' />
          <Route path='/navigation' component={Navigation} />
          <Route path='*'>404 no found</Route>
        </Switch>
      </Router>
    </div>
  );
}

//
//v2 routes
//
// <Route path='/signup' component={SignUp} />
// <Route path='/login' component={LoginPage} />
export default App;
