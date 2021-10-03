---
title: "2017"
layout: layouts/post.njk
---
## December 30
Interesting discussion of using Recompose together with graphql Apollo Client:
[Simplify your React components with Apollo and Recompose](https://dev-blog.apollodata.com/simplify-your-react-components-with-apollo-and-recompose-8b9e302dea51)

## December 20
I was listening to The Square and the Tower, by Niall Ferguson, when he started
reading Robert Burns's poem (which Google lists under its first line,
"I Hae a Wife O' My Ain"). I didn’t realize it was Ferguson himself who was narrating
the book, nor that he was Scottish, but when he started reading, and suddenly switched
from a very proper RP to a delightful Scottish accent, with a charmingly rising inflection
in the end of phrases (is it the [high rising terminal](https://en.wikipedia.org/wiki/High_rising_terminal)
that Wikipedia talks about?), I was completely fascinated. So much so that I made a
[clipping](https://youtu.be/iAFiPggIloU):

## December 19
[Repository](https://github.com/shakyShane/egghead-redux-obs) with the code for
Shane Osbourne’s redux-observable course on Egghead.

Also, John Lindquist’s [repository](https://github.com/johnlindquist/react-rxjs-lessons)
with code for a course on React, Recompose, and RxJS.

## December 18
[Course material for Kent C. Dodds’s course "Advanced React Component Patterns"](https://github.com/kentcdodds/advanced-react-patterns)
(course videos are behind a paywall on Egghead.io). There’s some pretty cool stuff here!

## December 17
Memo to self:

One of the companies I worked at used Cucumber.js for writing integration tests
for our frontend. The frontend was a single-page app that talked with the backend
over a json api. That raised a question of how to fill in the database with the data
needed to render the appropriate interface that will be checked during the test,
and how to orchestrate the testing steps between the backend and the frontend.
For that, we used [behat-stepler](https://github.com/fesor/behat-stepler),
which sends strings of Gherkin over to the backend, which in turn parses those strings,
does what is asked of it, and sends back some data when finished. For example, if a test
needs a user with given characteristics to exist in the database, a line of Gherkin
can describe this user, the frontend can send this line to the backend, the backend
will create such user and send back his id to be used in further steps of the test.

I thought that was ingenious. But it looks like `behat-stepler` did not really catch
on, and the project seems to be abandoned at the moment.


## December 16
Andreas Antonopoulos has easily become my most favorite author/speaker of the year. I first
heard him in the [Kevin Rose Show](https://www.kevinrose.com/single-post/andreas-antonopolous)
podcast, purely by chance, and am now listening to his talks on YouTube. Incidentally,
from his talk [Fake News, Fake Money](https://youtu.be/i_wOEL6dprg), I learned that there
has been a recent monetary crisis in India. Andreas is alluding to it in another talk,
[The Stories We Tell about Money](https://youtu.be/ONvg9SbauMg), but since he was giving
that talk in India, the audience didn't need him to spell it out for them, and laughed
at the hint. I was mystified at what the joke was about.

Anyway, I just love this guy! His energy, his intellectual freedom, his openness to the future,
his offhand disregard for authority, his attitude towards the internet that I think is very
characteristic of its early adopters in the 90s strongly resonate with me.

## December 10
[Introduction to Redux Observable](https://www.youtube.com/watch?v=zk2bVBZhmcc) by a developer from Atlassian,
where they apparently use redux-observable in production.

[The Holberg Debate 2017: "Propaganda, Facts and Fake News"
with Julian Assange, John Pilger, and Jonathan Heawood](https://youtu.be/LqEtKyuyngs).
Powerful stuff.

## November 29
[Norvig’s Python programs to practice or demonstrate skills](https://github.com/norvig/pytudes)

## November 26
Came across slides for the course *Software Studio*, about the lowly craft of web development, taught at MIT.

[Course page from 2013](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-170-software-studio-spring-2013/lecture-notes/)
[Course page from 2016](https://stellar.mit.edu/S/course/6/fa16/6.170/materials.html)

What’s curious, the 2013 course taught Ruby on Rails and SQL for backend development, while the 2016 course teaches Node and MongoDB. Also, a notable addition to the 2016 course is React (which just goes on to show how commonplace and inescapably default React has become; it truly is the new jQuery).

I was, however, shocked by this slide (from the lecture notes on React):

[![](https://imgur.com/inOTSKO.png)](https://i.imgur.com/inOTSKO_d.jpg?maxwidth=800)

Never has the phrase "the view in MVC" (which has since generally been retired anyway, because it's not a fitting abstraction for thinking about React) been intended for use in the context of clients and servers; it has always intended to explain React’s place among other client-side MVWhatever frameworks.

## November 22
A mostly disappointing 6-hour workshop on integrating Purescript into a JavaScript app by Hardy Jones
from the last LambdaConf. Disappointing firstly because Hardy mercilessly slaughters the ample time
he is given, moves excruciatingly slow and demonstrates very little, and secondly because the interop
between the Purescript and the JavaScript code looks rather ugly. As does the tooling:

[part 1](https://www.youtube.com/watch?v=XbrBGxcZZYY)

On the bright side, here’s an inspiring (albeit a very high-level) [talk](http://www.oredev.org/2017/sessions/purescript-tomorrows-javascript-today)
about Purescript by a well-spoken Brit from a recent conference in Sweden:

Also, some [free lectures on React Patterns](https://reacttraining.com/patterns/) by React Training.

## November 19
A [nice explanation](https://stackoverflow.com/questions/39439653/events-vs-streams-vs-observables-vs-async-iterators/47214496#47214496)
of the differences between the push and the pull apis for consumption of async data by Google’s Domenic Denicola on Stack Overflow

## November 15
[React meetup recordings from July, August, and September 2017](http://meetupfeed.com/react-talks-meetups-july-august-september-react-talks-digest-q3-2017/)

## November 13
Spent a long time looking wistfully at this job opening at BBC:
[Software Engineer (Web Developer)](https://careershub.bbc.co.uk/members/modules/job/detail.php?record=20625)
to work with BBC Moscow team. What discouraged me is that they are looking for
the sole developer (so it seems like more of a grunt kind of work).

What’s beautiful is that when this job opening announcement reached standard
online job boards (like [Headhunters.ru](https://hh.ru/vacancy/23422897)) it lost most
of the details of its description.

## November 11
Heard announcements of a couple of CS courses that will hopefully be freely available. These are:
- [Web programming with Python and JavaScript](https://cs50.github.io/web/)
- [Introduction to Game Development](https://cs50.github.io/games/)

## November 8
From Berkeley Martinez (the author of [react-redux-epic](https://github.com/BerkeleyTrue/react-redux-epic)),
an example of its use: a demo app called [React Shoppe](https://github.com/realworldreact/react-shoppe). Check
out branches that have rx in their names.

## November 5
An interesting implementation of React app with Flux architecture using RxJS
- [The talk by Gil Mazuz from ReactNext 2016](https://www.youtube.com/watch?v=Wh83qXOb03g)
- [Boilerplate illustrating the ideas in the talk](https://github.com/giltig/rxfrf)
- [Sample app demoed during the talk](https://github.com/omerts/RtC)

## October 29
### PWA-related finds:
- [Can you afford it?](https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/),
  a blog post by Alex Russell
- [Github repo for a workshop on building PWAs by Mike North and Steve Kinney](https://github.com/mike-north/pwa-fundamentals)

## October 27
### ReasonML-related finds:
Workshop on ReasonML at ReactiveConf 2017
- [Slides on Google Docs](https://docs.google.com/presentation/d/17CxVRrdw20Mm--ewv4KwxfxTPPuhB8gkxBp98LRaIsM/edit#slide=id.g292747eae2_0_198)
- [Gist with simple language examples](https://gist.github.com/sgrove/a6474d26b77bbf29d19b66ad71527cc9)
- [Sean Grove's GitHub repo with React examples](https://github.com/sgrove/reactiveconf-2017-reasonml-workshop)

## October 22
### ReasonML-related finds:

- [A workshop on ReasonML from Yow Lambda Jam 2017](https://github.com/bassjacob/ylj-2017-workshop)
- [A React Native app by Formidable for SeattleJS conference, written in Reason](https://github.com/FormidableLabs/seattlejsconf-app)

## September 25
Two very cool videos on the recent developments in CSS (mostly on Flexbox and CSS grid):

1. [Revolutionize Your Page: Real Art Direction on the Web](https://player.vimeo.com/video/209812549) by Jen Simmons

2. [CSS Grid Layout](https://player.vimeo.com/video/212961112) by Rachel Andrew
