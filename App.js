import React from 'react';
import Navigation from './nav/Navigation';
import store from './store/index';
import {Provider} from 'mobx-react';

const App=()=>{
  return(
     <Provider {...store}>
      
        <Navigation/>
      
    </Provider>
  )
}

export default App;
