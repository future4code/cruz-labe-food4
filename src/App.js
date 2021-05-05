
import React from 'react'
import Router from './routes/router'
import GlobalState from './globalState/GlobalState'

const  App = () => {
  return (
      <GlobalState>
        <Router />
      </GlobalState>
  );
}

export default App;
