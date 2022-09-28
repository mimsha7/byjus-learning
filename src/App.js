import React, { createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Haeder/Header';
import NotFound from './Components/NotFound/NotFound';
import About from './HomePages/About/About';
import BookTab from './HomePages/BookTab/BookTab';
import Course from './HomePages/Course/Course';
import DetailsCourse from './HomePages/DetailsCourse/DetailsCourse';
import Home from './HomePages/Home/Home';
import { Books, CourseData } from './myData/db';
export const CourseContext = createContext();

function App() {
  return (
    <CourseContext.Provider value={[CourseData, Books]}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="*"> 
            <Route index element={<NotFound />}/>
          </Route>
          <Route exact path="/">
            <Route index element={<Home />}/>
          </Route>
          <Route path="courses">
            <Route index element={<Course />}/>
          <Route path=":id" element={<DetailsCourse />}/>
          </Route>
          <Route path="books">
            <Route index element={<BookTab />} />
          </Route>
          <Route path="about">
            <Route index element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CourseContext.Provider>
  );
}

export default App;
