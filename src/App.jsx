import "./index.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch} from "react-redux";
import { fetchLoginMe } from "./redux/slices/auth";

import News from "./pages/News/News";
import Career from "./pages/Career/Career";
import Events from "./pages/Events/Events";
import HomePage from "./pages/HomePage/HomePage";
import Programs from "./pages/Programs/Programs";
import NewsText from "./pages/NewsText/NewsText";
import Course from "./pages/Course/Course";
import Test from "./pages/Test/Test";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import ProfilePage from './pages/ProfilePage/ProfilePage';
import PersonalPage from "./components/PersonalPage/PersonalPage";

import { useEffect } from "react";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      dispatch(fetchLoginMe());
    }
  }, []);


  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/programs" element={<Programs/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/career" element={<Career/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/newspage/:id" element={<NewsText/>}/> 
      <Route path="/course" element={<Course/>}/>
      <Route path="/test" element={<Test/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/me" element={<ProfilePage/>}/>
      <Route path="/reg" element={<Registration/>}/>
      <Route path="/personal" element={<PersonalPage/>}/>
    </Routes>
  );
}

export default App;
