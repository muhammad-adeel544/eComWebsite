import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Pages/Login';
import { ToastContainer } from "react-toastify";
import SignUp from "./Pages/SignUp";

function App() {

  return (
    <Router>
      <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="*" element={<Login />}></Route>
        
        
      
      </Routes>
      <ToastContainer />
    </Router>
  );
}



export default App;
