import { BoltRounded, FormatBoldRounded } from '@mui/icons-material';
import { Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { MouseEvent, useState } from 'react'
export const MuiToggleButton = () => {
  const [arrayFormat ,setArrayFormat]=useState<string[]>([])
  const [Format ,setFormat]=useState<string|null>(null)
  const handleArrayToggleButtonChange =(event:React.MouseEvent<HTMLElement>,updatedValue:string[])=>{
    setArrayFormat(updatedValue)
  }
  const handleToggleButtonChange =(event:React.MouseEvent<HTMLElement>,updatedValue:string|null)=>{
    setFormat(updatedValue)
  }
  return (

  <Stack direction='row' spacing={4}>
      <Stack direction='row' spacing={2} >
        <ToggleButtonGroup size='small' orientation='vertical'  color='success' onChange={handleArrayToggleButtonChange} value={arrayFormat} exclusive>
          <ToggleButton value='Bold' aria-label='Mui-Bold'><FormatBoldIcon/></ToggleButton>
          <ToggleButton value='Italic' aria-label='Mui-Italic'><FormatItalicIcon/></ToggleButton>
          <ToggleButton value='UnderLine' aria-label='Mui-UnderLine'><FormatUnderlinedIcon/></ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Stack direction='row' spacing={2} >
        <ToggleButtonGroup size='small' orientation='vertical'  color='success' onChange={handleToggleButtonChange} value={Format} >
          <ToggleButton value='Bold' aria-label='Mui-Bold'><FormatBoldIcon/></ToggleButton>
          <ToggleButton value='Italic' aria-label='Mui-Italic'><FormatItalicIcon/></ToggleButton>
          <ToggleButton value='UnderLine' aria-label='Mui-UnderLine'><FormatUnderlinedIcon/></ToggleButton>
        </ToggleButtonGroup>
      </Stack>
  </Stack>
  )
}
