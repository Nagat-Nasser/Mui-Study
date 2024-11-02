import React from 'react';
import logo from './logo.svg';
import './App.css';
import MuiRadioButton from './components/MuiRadioButton';
import { MuiSelect } from './components/MuiSelect';
import { MuiTextField } from './components/MuiTextField';
import MuiButton from './components/MuiButton';
import { MuiToggleButton } from './components/MuiToggleButton';
import { Stack } from '@mui/material';
import { MuiTypography } from './components/MuiTypography';


function App() {
  return (
    <Stack spacing={3} className="App">
      <MuiTypography/>
      <MuiToggleButton/>
      <MuiButton/>
      <MuiTextField />
      <MuiSelect />
      <MuiRadioButton />
    </Stack >
  );
}

export default App;
