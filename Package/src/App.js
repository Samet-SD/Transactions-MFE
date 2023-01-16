import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'

import Transactions from './components/Transactions'
import PdfData from './components/PdfData'

const App = ({ history }) => {
  return (
    <div>
    
      <Router history={history}>
      <Switch>
      <Route exact path="/" component={Transactions} />
      <Route exact path="/" component={PdfData} />
      </Switch>
      </Router>
    
    </div>
  )
}

export default App