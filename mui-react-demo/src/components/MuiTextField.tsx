import { InputAdornment, Stack, TextField } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";
export const MuiTextField = () => {
  const [value, setValue] = useState<string>('')
  return (
    <Stack spacing={4} >
      <Stack spacing={2} direction='row'>
        <TextField label='Name' />
        <TextField label='Name' variant="filled" />
        <TextField label='Name' variant="standard" />
      </Stack>
      <Stack spacing={2} direction='row'>
        <TextField label='Small Secondary' color='secondary' size="small" />
      </Stack>
      <Stack spacing={2} direction='row'>
        <TextField label='Form Input' required error />
        <TextField label='Password' type="password" value={value} onChange={(e) => setValue(e.target.value)} error={!value} helperText={!value ? 'Required' : 'Do not share your password with anyone'} />
        <TextField label='Read Only' slotProps={{
          input: {
            readOnly: true
          }
        }} />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField label='Amount' slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">$</InputAdornment>
          }
        }} />
        <TextField label='Weight'
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">kg</InputAdornment>
            }
          }}
        />
        <TextField label='Password' type="password" slotProps={{
          input: {
            endAdornment: <InputAdornment position="end" > <VisibilityIcon /></InputAdornment>
          }
        }} />
      </Stack>
    </Stack>

  )
}
