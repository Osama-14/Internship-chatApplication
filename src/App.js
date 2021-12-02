import { Route, Routes } from "react-router";
import SignUp from "../src/signup/Signup";
import LogIn from "../src/login/Login";
import Home from "../src/Homee/Home";

function App() {
  return (
    <Routes>
    <Route path='/' element={<LogIn />} />
    <Route path='/home' element={<Home />} />
    <Route path='/signup' element={< SignUp />} />
    </Routes>    
  );
}

export default App;
