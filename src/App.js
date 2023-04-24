
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/home.component'
import SignUp from './components/Sign-Up'
import ContactUs from './components/Contact-Us.js'
import Ourteam from './components/Ourteam'
import Ouroffering from './components/Ouroffering'
import PostBooking from './components/PostBooking'
import PostRegistration from './components/PostRegistration'
import Blogs from './components/Blogs'
import Blogsdetails from './components/Blogsdetails'

function App() {
  return (
    
    <Router>
      <div className="App">
 <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/ourteam" element={<Ourteam />} />
    <Route path="/ouroffering" element={<Ouroffering />} />
    <Route path="/postbooking" element={<PostBooking />} />
    <Route path="/postregistration" element={<PostRegistration />} />
    <Route path="/blogs" element={<Blogs />} />
    <Route path="/blogsdetails" element={<Blogsdetails />} />
       </Routes>
     </div>
 </Router>

  )
}
export default App;

