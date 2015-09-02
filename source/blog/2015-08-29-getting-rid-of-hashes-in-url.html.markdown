---
title: Getting rid of hashes in url when using frontend frameworks
date: 2015-08-29 21:06 UTC
tags:
---

By default, frontend frameworks typically require a hash (`#`) in the url for correct routing. This is a noticeable contrast with urls used by the rest of web applications, which do routing on the backend. From the user’s perspective, this hash in the url is just an annoying superfluous character that doesn’t serve any purpose. So how to get rid of it?

## Angular
1) Add <base href="/" /> to the head of index.html

2) Add the following to the `.config` property of the `angular` module:

```javascript
.config(function($locationProvider){
    $locationProvider.html5Mode(true);
```

3) Now Angular will be able to deal with routing without any hashes in the url. Next thing to do is to serve Angular on every `get` request and to let it figure out the routing itself. Here is an example from the server based on Node.js and Express. After defining all routes that the server needs to process on the backend, add:

```javascript
app.get('/*',  function(req, res) {
    res.render('index.ejs');
});
```

The snippet above will always render the same template file (`index.ejs`) regardless of the url of requests. So, if this index.ejs will contain a reference to Angular, it means that every time a request is made to the server, the page with Angular will be rendered, and Angular will take care of routing..

## React
React router has a `HistoryLocation` component, which the documentation actually [suggests](https://rackt.github.io/react-router/#HistoryLocation) to prefer to the alternative that uses hashes in the url. “We recommend you use this location,” say the React router’s authors. “It has better looking URLs...”

I couldn’t agree more.

Setting up `HistoryLocation` requires small modifications both on the cliend and server side.

On the client side, React’s [`Router.run`](https://rackt.github.io/react-router/#Router.run) API needs to be provided with `HistoryLocation`, which is as simple as:

```javascript
import React from 'react/addons';
import Router from 'react-router';
import routes from './routes.jsx';

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler/>, document.getElementById('app'));
});
```

On the server side, the server (as in the example above for Angular) has to respond to all GET requests by rendering the main view and letting React router take over:

```javascript
app.get('*', (req, res) => {
  res.render('index.ejs');
});
```
