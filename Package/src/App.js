import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Transactions from './components/Transactions'


const App = () => {
  return (
    <div>
    
      <BrowserRouter>
      <Switch>
      
      <Route exact path="/" component={Transactions} />
      </Switch>
      </BrowserRouter>
    
    </div>
  )
}

export default App