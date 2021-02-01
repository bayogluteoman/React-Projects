import React from 'react';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ContactPage from './pages/contact/contact.component';

import Header from './components/header/header.component';

import { Switch,Route, Redirect } from 'react-router-dom';
import SignInAndSignUpPage from './pages/sign-in-and-sing-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import { GlobalStyle } from './global.styles';

class App extends React.Component {
  unsubscribeFromAuth=null;

componentDidMount(){
  const {setCurrentUser} = this.props;

  this.unsubscribeFromAuth=auth.onAuthStateChanged( async userAuth => {
 if(userAuth){
    const userRef = await createUserProfileDocument(userAuth);

    userRef.onSnapshot(snapShot =>{
     setCurrentUser({       
          id:snapShot.id,
          ...snapShot.data()       
    }); 
  });
 }

 else{
  setCurrentUser(userAuth);
     }   
  });
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
    return (
      <div>
        <GlobalStyle/>
        <Header/>
        <Switch>
          <Route  exact path='/' component={HomePage}/>
          <Route  path='/shop' component={ShopPage}/>
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route 
           exact 
           path='/signin' 
           render = { ()=> 
            this.props.currentUser 
            ? (<Redirect to='/'/>)
              :
               (<SignInAndSignUpPage/>) } />
        </Switch>
      </div>
    );
  }  
}
const mapStateToProps = ({user})  =>({
  currentUser:user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
