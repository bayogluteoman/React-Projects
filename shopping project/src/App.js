import React from 'react';
import { Switch,Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sing-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';


class App extends React.Component {
constructor(){
  super();
  this.state={
    currentUser:null
  }
}

componentDidMount(){
  this.unsubscribeFromAuth=auth.onAuthStateChanged( async userAuth => {
 if(userAuth){
    const userRef = await createUserProfileDocument(userAuth);

    userRef.onSnapshot(snapShot =>{
      this.setState({
        currentUser:{
          id:snapShot.id,
          ...snapShot.data()
        }      
    }); 
  });
 }
 else{
  this.setState({currentUser: userAuth});
     }   
  });
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route  path='/shop' component={ShopPage}/>
          <Route  path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }  
}

export default App;
