import { Route, Routes } from "react-router";
import SignUp from "../src/signup/Signup";
import LogIn from "../src/login/Login";
import Home from "../src/Homee/Home";
import {useAuthState} from 'react-firebase-hooks/auth'
import { getAuth} from "../src/firebase/Firebase";

function App() {
  // const [user] = useAuthState(getAuth)
  return (
    // {user ? <Home /> : <LogIn />}
    <Routes>
      {/* {user ? <Home /> : <LogIn />} */}
    <Route path='/' element={<LogIn />} />
    <Route path='/home' element={<Home />} />
    <Route path='/signup' element={< SignUp />} />
    </Routes>    
  );
}

export default App;
