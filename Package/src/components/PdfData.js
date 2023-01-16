import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
const PdfData = () => {
  return (
    <Box sx={{left: "30%", height: 400,position: "relative", width: '50%',display:"flex", justifyContent:"center" }}>
    <Link to="/transactions">
                    <Button variant="contained" color="primary">
                      Transactions
                    </Button>
                  </Link>
                  <Link to="/payments">
                    <Button variant="contained" color="primary">
                      Payments
                    </Button>
                  </Link>
                  </Box>
  )
}

export default PdfData