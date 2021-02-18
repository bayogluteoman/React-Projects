import React from 'react';
import HomePage from './pages/homePage/home';
import ContactPage from './pages/contactPage/contact';
import AboutMePage from './pages/aboutPage/about';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';


class App extends React.Component{

  render(){
    return (
      <div>
        <Router>
            <AnimatePresence exitBeforeEnter>        
              <Switch >
                <Route exact path="/" component={HomePage}/>
                <Route path="/about" component={AboutMePage}/>
                <Route path="/contact" component={ContactPage}/>
              </Switch> 
              </AnimatePresence>  
        </Router>
      </div>
    );
  }
}

export default App;