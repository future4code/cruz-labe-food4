
import React from 'react'
import Router from './routes/router'
import GlobalState from './globalState/globalState'

const  App = () => {
  return (
      <GlobalState>
        <Router />
      </GlobalState>
  );
}

export default App;
