import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Track from "./components/Track";
import All from "./components/All";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const isAuth = Boolean(useSelector((state) => state.token));
  const isOfficer = Boolean(useSelector((state) => state.officer));
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path='/officer/:id/' element={ isAuth? <Profile/> : <Navigate to='/Login'/>}></Route>
          <Route path='/officer/:id/solve' element={ isAuth? <Track/> : <Navigate to='/Login'/>}></Route>
          <Route path='/officer/:id/all' element={ isAuth? <All/> : <Navigate to='/Login'/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
