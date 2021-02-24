import React from 'react';
import Sidebar from './Components/Sidebar'
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Chat from './Chat';
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <div className="app">
       <Router>
      <>
        
<Header />
<AppBody>
  <Sidebar/>
<Switch>
          
           <Route path="/" exact>
            <Chat/>
          </Route>
        </Switch>
</AppBody>
        
      </>
    </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
display:flex;
height:100vh;
`;