import React from 'react'
import Grid from '@mui/material/Grid';
import CommonButton from '../components/common/CommonButton';
import { Box } from '@mui/material';
import { Padding } from '@mui/icons-material';
import Datatable from '../components/common/Datatable';
import { Link } from 'react-router-dom';
import TransactionsTable from './TransactionsTable';

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
            <h1>Transactions</h1>.
            
            <Link to ="/pdf-data">
            <CommonButton
                sx={buttonStyles}
                variant="contained"
            >
                Download PDF
            </CommonButton>
            </Link>
            </Box>
            <TransactionsTable />
        </Grid>
       
    )
    
}

export default Transactions