import { Box, MenuItem, TextField } from "@mui/material"
import { type ChangeEvent, ChangeEventHandler, SetStateAction, useState } from "react"

export const MuiSelect = () => {
  const [value, setValue] = useState<string>('')
  const [multiValue, setMultiValue] = useState<string[]>([])
  const handleSelectChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const handleMultiSelectChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setMultiValue(typeof value === 'string' ? value.split(',') : value)
  }
  return (
    <Box width='250px' >
      <TextField label='select country' select fullWidth sx={{ m: 2 }} value={value} onChange={handleSelectChange}>
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='US'>USA</MenuItem>
        <MenuItem value='AS'>Australia</MenuItem>
      </TextField>
      <TextField label='multi select country' select fullWidth sx={{ m: 2 }} value={multiValue} onChange={handleMultiSelectChange} slotProps={{
        select: {
          multiple: true
        }
      }}
        size="small"
        color="secondary"
        helperText='Please select your country'
      // error
      >
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='US'>USA</MenuItem>
        <MenuItem value='AS'>Australia</MenuItem>
      </TextField>
    </Box>
  )
}
