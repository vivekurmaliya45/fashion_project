import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Navbar, Nav, Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
//layout
import LoginLayout from '../layouts/LoginLayout'
import MainLayout from '../layouts/MainLayout'


// views
import Signup from "../components/Signup"
import ForgotPassword from "../components/ForgotPassword"
import Dashboard from "../components/Dashboard"
import Outfits from "../components/Outfits"
import AddOutfit from "../components/AddOutfit"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"

import UpdateProfile from "../components/UpdateProfile"

export default () => {

  return (
    <Router>
     
    <AuthProvider>
    <Switch>
          <Route path='/login' exact>
            <LoginLayout>
              <Route path="/login" component={Login} />
            </LoginLayout>  
          </Route>
          {/* <Route path='/signup' exact>
            <LoginLayout>
              <Route path="/signup" component={Signup} />
            </LoginLayout>   
          </Route>
          <Route path='/forgot-password' exact>
            <LoginLayout>
              <Route path="/forgot-password" component={ForgotPassword} />
            </LoginLayout>   
          </Route> */}
       
          <MainLayout>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute exact path="/add" component={AddOutfit} />
              <PrivateRoute exact path="/outfits" component={Outfits} />
          </MainLayout>     
          <Redirect from="*" to="/" />
         
        
      </Switch>
    </AuthProvider>
  </Router>
  )


}

