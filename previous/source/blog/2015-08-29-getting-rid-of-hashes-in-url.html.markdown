---
title: Getting rid of hashes in url when using frontend frameworks
date: 2015-08-29 21:06 UTC
tags:
---

In the days of yore, javascript-based frontend frameworks used hash urls for routing. So if the root url for the application were `www.myapp.com`, then the url to render the About page would be something like `www.myapp.com/#about`.

As a user, I would find this hash symbol annoying. Hash urls are noticeably different from urls used on other websites, and from the user’s perspective, this hash sign in urls is just a superfluous character that doesn’t serve any purpose. From the developer’s perspective it is a sign proclaiming that this particular web app has a frontend framework — a completely unnecesary knowledge to give to the user.

And it’s not just me. Developers of React router, for example, [suggest](https://rackt.github.io/react-router/#HistoryLocation) to avoid such urls and prefer the “normal”-looking urls instead. “We recommend you use this...” say the React router’s devs about their solution. “It has better looking URLs...”

Well, I couldn’t agree more.

So how to get rid of this hash?

The solution relies on [HTML5 History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) and requires some tweaks on the server side and client side.

## Server Side

The server has to respond to all GET requests (apart from those that need some special server-side logic) by rendering the main view of the app and letting the frontend framework take over from there. In Express, for example, which uses `ejs` templating engine, this is achieved like this:

```javascript
app.get('*', (req, res) => {
  res.render('index.ejs');
});
```

## Client Side

### Angular

1) Add <base href="/" /> to the head of `index.html`.

2) Add the following to the `.config` property of the `angular` module:

```javascript
.config(function($locationProvider){
    $locationProvider.html5Mode(true);
```

That’s it.

### React
React router has a `HistoryLocation` component, which needs to be provided to React’s [`Router.run`](https://rackt.github.io/react-router/#Router.run) API. This is as simple as:

```javascript
import React from 'react/addons';
import Router from 'react-router';
import routes from './routes.jsx';

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler/>, document.getElementById('app'));
});
```

