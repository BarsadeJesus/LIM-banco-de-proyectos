import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MenuAndModal from './Components/menu';
/* import DownLoadView from './Views/download'; */


//import Link from 'react-router-dom'

const Routes = () => {
    return (
      <Switch>
          <Route exact path='/' component={MenuAndModal} />
          <Route exact path='/menuView' component={MenuAndModal} />
         {/*  <Route exact path='/DownLoadView' component={DownLoadView} /> */}
      </Switch>
    )
}
export default Routes;