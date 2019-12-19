import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import history from '../helpers/history';

import Login from "../components/Login";
import SignUp from '../components/SignUp';
import Home from '../components/Home';
import SettingAccount from '../components/SettingAccount';
import TeacherHome from './Teacher/TeacherHome';
import TeacherProfile from './Teacher/TeacherProfile';
import TeacherUpdate from './Teacher/TeacherUpdate';
import ClassDetail from './ClassDetail';
import StudentHome from './Student/StudentHome';

import '../styles/App.css';

class App extends React.Component{

  render(){

    const {data} = this.props;

    return (
      <Router history={history}>
        <Switch>
          {data ?
          <div>
            <Route exact path="/"> <TeacherHome/> </Route>
            <Route exact path="/profile" > <TeacherProfile/> </Route>
            <Route exact path="/update-profile"> <TeacherUpdate/> </Route>
          </div>
          :
          <div>
            <Route exact path="/login"> <Login/> </Route>
            <Route exact path="/sign-up"> <SignUp/> </Route>
            <Route exact path="/setting-account"> <SettingAccount/> </Route>
            <Route exact path="/class-detail" > <ClassDetail/> </Route>
            
            <Route exact path="/student"> <StudentHome/> </Route>
            <Route exact path="/"> <Home /> </Route>
          </div>
          }
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  data: state.login.data
})

export default connect(mapStateToProps)(App);
