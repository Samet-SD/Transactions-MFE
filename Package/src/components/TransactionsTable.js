import React, { useEffect, useState} from 'react'
import Datatable from './common/Datatable';
import { Box } from '@mui/system';


const columns = [
    {field: 'id', headerName: 'User ID', width: 150},
    {field: 'cardType', headerName: 'CardType', width: 150},
    {field: 'currency', headerName: 'Currency', width: 150},
    {field: 'date', headerName: 'Date', width: 150},
    {field: 'terminalID', headerName: 'Terminal-ID', width: 150},
    {field: 'transactionNr', headerName: 'Tran. No. ', width: 150},
    {field: 'status', headerName: 'Status', width: 150},

];


const TransactionsTable = () => {
    

    useEffect(() => {
        fetch('http://localhost:8085/transactions')
        .then((response) => response.json())
        .then((json) => setTransactions(json));
    }, [])

    const [transactions, setTransactions] = useState([]);
    return (
     
     <Box sx={{left: "30%", height: 400,position: "relative", width: '50%',display:"flex", justifyContent:"center" }}>
    
    <Datatable 
       rows={transactions}
       columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
     />
     
    </Box>
  )
}

export default TransactionsTable