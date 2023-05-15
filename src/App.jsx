import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Spinner  from 'react-spinkit';
import Header from './components/Header';
import styled from 'styled-components';
import Sidebar from './components/SideBar';
import Chat from  "./components/Chat"
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from './firebase';
import Login from './components/Login';
import slackimg from "./components/image/slack.png"
const App = () => {
  const [user, loading] = useAuthState(auth)
  // let Spinner = require('react-spinkit');
  if(loading){
    return(
      <AppLoading>
        <AppLoadingContents>
          <img src={slackimg} alt="" />
          <Spinner name='ball-spin-fade-loader'
          color='purple'
          fadeIn='none'
          />
        </AppLoadingContents>
      </AppLoading>
    )
  }
  return (
    <div className='app'>
   
    <Router>
      {!user ? (
        <Login/>
      ):(
         <>
     <Header />
      <AppBody>
        <Sidebar/>
      <Switch>
         <Route exact path="/">
          <Chat/>
        </Route>
        </Switch>
      </AppBody>
      </>
      )}
      </Router>
    </div>
  )
}

export default App
const AppBody = styled.div`
  display: flex;
  height: 100vh;
`
const AppLoading =styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`
const AppLoadingContents =styled.div`
 text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  >img{
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`