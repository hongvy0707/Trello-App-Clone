import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function Workspaces() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      <Button
        sx={{ color: 'white' }}
        id='basic-button-workspaces'
        aria-controls={open ? 'basic-menu-workspaces' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
      >
        Workspaces
      </Button>
      <Menu
        id='basic-menu-workspaces'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-workspaces'
        }}
      >
        <MenuItem>
          <ListItemText>Current Workspace</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Your Workspaces</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Guest Workspaces</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Workspaces
