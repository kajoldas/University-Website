
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';
import Admission from './Admission/Admission';
// import { useState,  useEffect } from 'react';


function App() {
//   const [courses, setCourses] = useState([]);

// useEffect( () => {
//     fetch('./data.JSON')
//     .then(res => res.json())
//     .then(data => setCourses(data));
// }, [])
// {
//     courses.map( courses =>  courses={courses})
// }

//     const {img, subject_title, course_fee, course_duration} = courses;
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home"> 
              <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/admission">
            <Admission></Admission>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
        <Route path="*">
            <NotFound></NotFound>
        </Route>
        </Switch>
      </BrowserRouter>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
