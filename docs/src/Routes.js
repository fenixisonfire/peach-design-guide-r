import React from 'react';
import {IndexRoute, Route} from 'react-router';

import ComponentsPage from './ComponentsPage';
import HomePage from './HomePage';
import IntroductionPage from './IntroductionPage';
import NotFoundPage from './NotFoundPage';
import Root from './Root';
import DesignPage from './DesignsPage';
import Datavis from './Datavis';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={HomePage} />
    <Route path="introduction.html" component={IntroductionPage} />
    <Route path="components.html" component={ComponentsPage} />
    <Route path="designs.html" component={DesignPage} />
    <Route path="datavis.html" component={Datavis} />

    <Route path="*" component={NotFoundPage} />
  </Route>
);
