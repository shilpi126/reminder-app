import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AuthWrapper from "./context/auth";
import PrivateRoute from "./components/PrivateRoute";


  function App() {


return (
  <>

  <BrowserRouter>
  <AuthWrapper>
  <Routes>
    <Route path="/signup" element={ <SignUp/>}/>
    <Route path="/login" element={<Login/>}/>
    
    <Route element={<PrivateRoute/>}>
      <Route path="/" element={<Home/>} exact/>
    </Route>
  </Routes>
  </AuthWrapper>
  </BrowserRouter>
  </>

  );
}

export default App;
