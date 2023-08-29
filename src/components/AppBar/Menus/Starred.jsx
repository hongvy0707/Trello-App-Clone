import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function Starred() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <Box>
      <Button
        sx={{ color: 'white' }}
        id='basic-button-starred'
        aria-controls={open ? 'basic-menu-starred' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
      >
        Starred
      </Button>
      <Menu
        id='basic-menu-starred'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-starred'
        }}
      >
       
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <img src='https://trello.com/assets/cc47d0a8c646581ccd08.svg' 
                alt='Starred Image' 
                style={{ width: '100%', padding: 1}} 
            />
            <Typography variant="body1" >Star important boards to access them quickly </Typography>
            <Typography variant="body2">and easily</Typography>  
            </Box>
            <div>
              
              
              
              
            </div>
          </Box>

      </Menu>
    </Box>
  );
}

export default Starred;