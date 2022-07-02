import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import User from './components/User/User';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import MessageList from './components/MessageList/MessageList';
import ContainerAdmin from './components/ContainerAdmin/ContainerAdmin';



function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Routes>
          <Route path="/" element={<Login></Login>}> </Route>
            <Route path={'header'} element={<Header></Header>}>
              <Route path={'home'} element={<Home></Home>}>
                <Route path={":user_id"} element={<MessageList></MessageList>}></Route>
              </Route>
              <Route path={'admin'} element={<ContainerAdmin></ContainerAdmin>}></Route>
              <Route path={'user'} element={<User></User>}></Route>
              <Route path={'about'} element={<About></About>}></Route>
              
              <Route path={'message-list'} element={<MessageList></MessageList>}></Route>

            </Route>
            <Route path="*" element={<NotFound></NotFound>} ></Route>
         </Routes>
      </header>
     
    </div>
  );
}

export default App;
