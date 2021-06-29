import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProfileModal from "./Profile-modal";


function App() {

  return (
    <ProfileModal />
  )
}


ReactDOM.render(
    <App/>,
  document.getElementById('root')
);
