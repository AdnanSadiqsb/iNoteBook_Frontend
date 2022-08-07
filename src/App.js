import Navbar from "./components/Navbar";
import About from './components/About'
import Home from './components/Home'
import Alert from './components/Alert'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AlertState from "./context/notes/AlertState";
function App() {
  return (
    <NoteState>
    <AlertState>


    <Router>
      <Navbar/> 
      <Alert/>
      <Routes>
        <Route exact path="/" element={<Home/>} />         
        <Route exact path="/About" element={<About/>}></Route>
        <Route exact path="/Login" element={<Login/>}> </Route>
        <Route exact path="/SignUp" element={<SignUp/>}></Route>
      
      </Routes>
      
    </Router>
    </AlertState> 
    </NoteState>
  );
}

export default App;
