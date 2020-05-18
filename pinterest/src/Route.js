import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Menu from './Components/menu';
import ListImages from './Components/listImages';
import ModalImage from './Components/modalImage';
import DownLoadImg from './Components/downloadimg';
//import Link from 'react-router-dom'

const Routes = () => {
    return (
      <Switch>
          <Route exact path='/' component={Menu} />
          <Route exact path='/ListImages' component={ListImages} />
          <Route exact path='/ModalImage' component={ModalImage} />
          <Route exact path='/downloadimg' component={DownLoadImg} />
      </Switch>
    )
}
export default Routes;