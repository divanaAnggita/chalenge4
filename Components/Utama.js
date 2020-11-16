import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';
import DaftarBelanja from './DaftarBelanja';

const Utama = () => (
    <Switch>
        <Route exact path = "/" component = {Home} />
        <Route path = "/DaftarBelanja" component = {DaftarBelanja} />
    </Switch>
)

export default Utama;
