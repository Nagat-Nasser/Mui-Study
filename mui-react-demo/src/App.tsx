import React from 'react';
import logo from './logo.svg';
import './App.css';
import MuiRadioButton from './components/MuiRadioButton';
import { MuiSelect } from './components/MuiSelect';
import { MuiTextField } from './components/MuiTextField';


function App() {
  return (
    <div className="App">
      {/* <MuiToggleButton/> */}
      <MuiTextField />
      <MuiSelect />
      <MuiRadioButton />
    </div>
  );
}

export default App;
