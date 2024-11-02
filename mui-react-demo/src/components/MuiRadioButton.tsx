import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from "@mui/material";
import { type SetStateAction, useState } from "react";
const MuiRadioButton = () => {
  const [RadioButtonValue, setRadioButtonValue] = useState('')
  const handleRadioButtonChange=(e: { target: { value: SetStateAction<string>; }; })=>{
    setRadioButtonValue(e.target.value)
  }
	return (
		<Box>
			<FormControl error>
				<FormLabel>Years of experience</FormLabel>
      <RadioGroup  row  value={RadioButtonValue} onChange={handleRadioButtonChange} >
        <FormControlLabel  control={<Radio color="warning" size="small"/>} label='0-2' value='0-2'/>
        <FormControlLabel  control={<Radio/>} label='3-5' value='3-5' />
        <FormControlLabel  control={<Radio/>} label='6-10' value='6-10'/>
      </RadioGroup>
      <FormHelperText>Invalid Selection</FormHelperText>
			</FormControl>
		</Box>
	);
};

export default MuiRadioButton;
