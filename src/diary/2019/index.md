---
title: "2019"
---
## October 13
- Paul Lewis's [talk](https://vimeo.com/364370506) from Fronteers conference 2019
- A really good [talk](https://vimeo.com/362260166) by Philip Walton about service workers, from SmashingConf Freiburg, 2019
- [Talks](https://www.youtube.com/channel/UCmvhqGbbqkhJ63V3g-l-5Gg/videos) from RxJS Live conference (not yet all of them; but hopefully others will be added as well).

## September 29
[Repository](https://github.com/jen4web/fem-adv-css-layout) for Jen Kramer’s Advanced CSS Layout course.

## September 7
Someone’s [YouTube channel](https://www.youtube.com/user/cjgammon/videos) with tutorials on pixi.js and three.js.

## August 20
Estelle Weyl’s [repo](https://github.com/estelle/CSS) with presentations for her four-day CSS workshop.

## August 4
GraphQL conf 2019 had surprisingly many talks about server-side concerns (videos — [part 1](https://youtu.be/VjP0T4CzAHk), [part 2](https://youtu.be/5qvvs0cz73k), [part 3](https://youtu.be/zSzn1f1TjRc)).

## August 3
- [Videos from CSS Day 2019](https://www.youtube.com/playlist?list=PLjnstNlepBvNTimR5FhD5tdbbQr57o1Oh)
- [Videos from an Event Apart](https://www.youtube.com/channel/UCGmeG7HfRRrF6_svGyS3BqQ/videos)

## July 30
[Github repo](https://github.com/marcysutton/js-a11y-workshop/) from Marcy Sutton’s course on accessibility of javascript-driven sites.

## July 23
Someone put together a [starter](https://github.com/christophediprima/razzle-react-redux-observable-found) that uses redux-observable and the Found router with server-side rendering (courtesy of Razzle).

## June 30
[Recordings of some talks](https://www.youtube.com/playlist?list=PLSmH2HL6l9pw47J-xWZSIH7HpEgqlGiXD) from Perfmatters 2019.

## June 23
Useful links from Kyle Simpson’s course on service workers:
- [https://serviceworke.rs/](https://serviceworke.rs/)
- [https://developers.google.com/web/fundamentals/primers/service-workers/](https://developers.google.com/web/fundamentals/primers/service-workers/)
- [https://developers.google.com/web/ilt/pwa/introduction-to-service-worker](https://developers.google.com/web/ilt/pwa/introduction-to-service-worker)
- [https://developers.google.com/web/tools/workbox/](https://developers.google.com/web/tools/workbox/)
- [https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [https://abookapart.com/products/going-offline](https://abookapart.com/products/going-offline)
- [https://adactio.com/journal/15122](https://adactio.com/journal/15122)

## June 16
The [Relearn CSS layout](https://every-layout.dev/) site is definitely worth a read.

## May 05
- Brian McKenna’s teaching [videos](https://www.youtube.com/watch?v=NzIZzvbplSM) in which he introduces Haskell.

## May 04
- [Video recordings](https://www.youtube.com/playlist?list=PLOETEcp3DkCpimylVKTDe968yNmNIajlR) of the talks from ng-conf 2019.
- Smashing Magazine [article](https://www.smashingmagazine.com/2019/04/smashingconf-san-francisco-2019/) with links to the videos from SmashingConf San Francisco 2019.

## April 28
- Just wanted to leave here the link to [Infinityfree](https://infinityfree.net/), a free and unlimited web hosting (although it imposes a limit of 50,000 hits in a single day, but in practical terms, for a personal site, 50,000 hits is plenty).

## April 25
- Videos from the [You Gotta Love Frontend Code Camp 2019](https://www.youtube.com/playlist?list=PLII-CO3Ff0qbr3KApN3656borU1wuEFH_) conference, where, among other things, Rich Harris talked about Svelte v.3.0.

## April 22
- The [Vue-Rx talk](https://www.vuemastery.com/conferences/vueconf-us-2018/vue-rx-john-lindquist) by John Lindquist from VueConf US 2018. This and other talks are hosted on VueMastery web site in the [Conferences](https://www.vuemastery.com/conferences) section.

## April 20
- [Videos](https://www.youtube.com/watch?v=4KfAS3zrvX8&t=3268s) from the React Amsterdam conference. Of those, the most interesting, I thought, was Siddharth Kshetrapal’s [Refactoring React](https://www.youtube.com/watch?v=4KfAS3zrvX8&t=3268s).
- Came across [playlists](https://www.youtube.com/channel/UCB_pokQ27mY3DGlGrSdNKKw/playlists) of lectures of Ted Sherman on the English literature.
- Somewhat interesting: an open-access book ["Essentials of Linguistics"](https://ecampusontario.pressbooks.pub/essentialsoflinguistics/) is accompanied by video lectures.

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
