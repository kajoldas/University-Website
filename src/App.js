
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



function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home"> 
              <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/admission">
            <Admission></Admission>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
        <Route exact path="*">
            <NotFound></NotFound>
        </Route>
        </Switch>
      </BrowserRouter>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
