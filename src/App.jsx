import { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Browse from "./pages/Browse";

function App() {
  return (
 <BrowserRouter>
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/browse" element={<Browse/>}/>
     <Route path="/list" element={<List/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/signup" element={<SignUp/>}/>

   </Routes>
 </BrowserRouter>
  )
}

export default App
