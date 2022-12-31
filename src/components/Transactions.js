import React from 'react'
import Grid from '@mui/material/Grid';
import CommonButton from '../components/common/CommonButton';
import { Box } from '@mui/material';
import { Padding } from '@mui/icons-material';
import Datatable from '../components/common/Datatable';
import UserTable from '../components/UserTable';
const Transactions = () => {
  const buttonStyles = {
    frontSize: '0.875rem',
    fontWeight: 700,
    textTransform: 'capitalize',
    borderRadius: 2.5,
    '&.MuiButton-contained': {
      backgroundColor: '#009be5',
      '&:hover': {
        backgroundColor: 'yellow',
      }
    }
  };
  return (
  
    <Grid item xs={8}>
      <Box display="flex" justifyContent="center" marginTop="-10px" padding="40px" backgroundColor="#009be5">
            This is authentication page.
            <CommonButton
                sx={buttonStyles}
                variant="contained"
            >
                Add user
            </CommonButton>
            <CommonButton
                sx={buttonStyles}
                variant="outlined"
            >
                Add user
            </CommonButton>
            </Box>
            <UserTable />
        </Grid>
       
    )
    
}

export default Transactions