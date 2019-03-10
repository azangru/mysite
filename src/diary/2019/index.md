---
title: "2019"
---
## March 10
From a [test repo](https://github.com/intelcoder/imported-test) with heavy use of module aliases:

```javascript
// aliases.js

var path = require('path')
var CWD = process.cwd()

module.exports = {
  '@CSSVars': path.resolve(CWD, './config/styles/cssvars/' + 'property'),

  'Config': path.resolve(CWD, './config/'),
  'Components': path.resolve(CWD, './react/components/'),
  'Containers': path.resolve(CWD, './react/containers/'),
  'Defaults': path.resolve(CWD, './react/defaults/'),
  'Utils': path.resolve(CWD, './react/utils'),
  'Layout': path.resolve(CWD, './react/containers/layout/'),
  'Pages': path.resolve(CWD, './react/containers/pages'),
  'Root': path.resolve(CWD, './react/containers/root'),
  'HeroMap': path.resolve(CWD, './react/components/GoogleMaps/HeroMapV2/'),
  'Redux': path.resolve(CWD, './react/redux/'),
  'Actions': path.resolve(CWD, './react/redux/actions'),
  'Modules': path.resolve(CWD, './react/redux/modules'),
  'Services': path.resolve(CWD, './react/redux/services'),

  'Static': path.resolve(CWD, './static/'),
}
```

```javascript
// webpack.config.js

const aliases = require('../aliases/aliases.js')

export default {
  // various stuff
  resolve: {
    extensions: ['.js', '.json', '.css'],
    alias: aliases
  },
}
```

## March 4
- [Marble.js](https://docs.marblejs.com/), a JavaScript server-side framework based on RxJS is... interesting.
- [Another one](https://youtu.be/ZaUxIX_Q0R4) of Michael Hladky’s presentations on RxJS essentially implementing a kind of Redux

## February 24
- A [playlist with video recordings](https://www.youtube.com/playlist?list=PLTQ1nMZTXSUUpcRf1y4o2f6FJjx20EQM0) from Design Systems Virtual Summit.
- A [list](https://houssein.me/progressive-react) of practices for speeding up React apps’ load time, by Houssein Djirdeh. Mostly well-known, but still.
- Same, but as a [talk](https://youtu.be/zSECXuCB8wg)
- A valuable [reaction](https://www.reddit.com/r/reactjs/comments/at7uh4/a_brain_dump_of_all_the_things_you_can_do_to_make/) to it: "Rendering React synchronously on the server blocks the main thread, and it's tough to get streaming working properly in a big app. Make sure that you spawn multiple server processes to overcome that. Nginx and pm2 can help with that."

## January 31
Lea Verou’s [Even More CSS Secrets](https://youtu.be/vs34f9FiHps)

## January 26
Might be worth a look:
- [Typescript Deep Dive](https://basarat.gitbooks.io/typescript/) a gitbook about typescript
[reactive.how](https://reactive.how) may have some interesting content on RxJS.

## January 23
Matthew Gerstman’s [example](https://github.com/matthew-gerstman/redux-codesplit-typecheck-example) of codesplit and type-checked Redux store.

## January 21
Tried `npm link` and `npm pack` to test a React component about to be published to npm locally. Couldn't make it work with `npm link`, but the `npm pack` technique proved very reliable. The idea is:

- first, run `npm pack` in the directory of the npm package you are testing (this will produce a tar.gz archive of the package);
- second, change to the directory of the project in which you want to test this package, and run `npm install <path to the package>`.

Works like a charm!

## January 20
- A [video course](https://youtu.be/ifGeR-4mzSM) that someone copied from Egghead about using very hardcore (Haskell-inspired) functional javascript to write a guessing card game. There is a companion [repo](https://github.com/Hawk94/anger-the-bunny), also copied from somewhere. The creator of this course, Ian Hofmann-Hicks, has a [Youtube channel](https://www.youtube.com/playlist?list=PLjvgv-FpMo7XvlfO8YKiz4_onf8WonhiA) with more goodness.
- An [amazing talk](https://youtu.be/JsvElHDuqoA) by Adam Neary from Airbnb about graphQL-based frontend tooling that they use, with a live demo.
- [Videos](https://www.youtube.com/channel/UC8bRyfU7ycLXnEBfvdorpUg/videos) from JamStack conf (late October 2018) are online. Could be meh, or could be interesting.

## January 7
There’s a [graphql api design tutorial](https://github.com/Shopify/graphql-design-tutorial/blob/master/TUTORIAL.md) published by Shopify.

## January 6
- A great talk/workshop by Ben Lesh about [creating Observables from scratch](https://youtu.be/m40cF91F8_A).
- A [talk about RxJS schedulers](https://www.youtube.com/watch?v=S1eDh7MonbI) from AngularConnect 2018.

## January 4
Interesting personal promo-site: https://nick.vanexan.ca/

## January 2
[Repo](https://github.com/mattdesl/workshop-generative-art) for Matt DesLauriers’ workshop
on generative art (using canvas) containing links to useful tools as well as various
interesting techniques.