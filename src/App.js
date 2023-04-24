import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (

  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={ <SignUp/>}/>
  </Routes>
  </BrowserRouter>

  );
}

export default App;
