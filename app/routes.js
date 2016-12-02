import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components
import Landing from './components/Landing.jsx';
import AboutBook from './components/AboutBook';
import MissingRoute from './components/MissingRoute';

// import rsdb from './fixtures/rsdb.js';

// Route Config
export default (
  <Route path="/" component={Landing}>
    <IndexRoute component={AboutBook} />
    <Route path="/test" component={AboutBook} />
    {/*
    <Route path="/book" component={AboutBook} />
    <Route path="/charts" component={AboutCharts} />
    <Route path="/embeds" component={AboutEmbeds} />
    <Route path="/forms" component={AboutForms} />
    <Route path="/custom" component={AboutCustom} />
    <Route path="/workflow"
      rsdb={rsdb}
      component={AboutWorkflow} />
    <Route path="/buttons" component={AboutButtons} />
    <Route path="/ajax" component={AboutAjax} />
    <Route path="/infographics"
      component={AboutInfographics} />
    */}
    <Route path="*" component={MissingRoute} />
  </Route>
);