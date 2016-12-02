import express from 'express';
import compression from 'compression';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './app/routes';
import html from './build/app.html';

const PORT = process.env.PORT || 7777;
const STATIC = './build';

const app = express();

app.use(compression());

// serve our static stuff like index.css
app.use(express.static(STATIC));

// send all requests to app.html so browserHistory works
app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      const appHtml = renderToString(<RouterContext {...props} />);
      const document = html.replace('<div id="root">', `<div id="root">${appHtml}`);
      res.send(document);
    } else {
      res.status(404).send('Not Found');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Production Express server running at localhost: ${PORT}`); // eslint-disable-line no-console, max-len
});
