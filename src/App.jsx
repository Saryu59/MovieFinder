import "./css/App.css"
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home"
import Favourites from "./pages/Favourites";
import {Routes,Route} from "react-router-dom";
import{MovieProvider} from"./contexts/MovieContext";
import NavBar from"./components/NavBar";

function App() {
  
 
  return (
   <MovieProvider>
      <NavBar/>
  <main className="main-content">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favourites" element={<Favourites/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      
    </Routes>
  </main>
  </MovieProvider>
  )
}

export default App
