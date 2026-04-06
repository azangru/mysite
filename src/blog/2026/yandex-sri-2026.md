---
title: Doing the test assignment for Yandex School of Frontend Development, 2026
date: 2026-04-05
layout: layouts/post.njk
published: true
---

Yandex, bless them, has for many years been running summer schools; and one of the first ones (if not the first) among those schools was Школа разработки интерфейсов (abbreviated as ШРИ). Literally, this translates to the School of Interface Development; although what they meant was user interface development, specifically on the web. In other words, the School of Frontend Development. It is a free educational program, running in Moscow and lasting over the summer months.

I've never been admitted to this program; so I can't say exactly what the experience is; but every such summer school has an admission process, as a part of which candidates have to solve a test assignment.

For the past several years, I've been trying to work through those assignments. Not in a hope of being admitted to the school (I wouldn't be able to go even if I were invited), but to test my skills and to learn new things. These admission tests are qiute difficult, requiring the level of knowledge that I would expect from someone applying for a merium-level frontend position; and this always made me wonder, what is the school's curriculum like if they expect that much from the applicants. (As a side note, the lectures of the school that are published on youtube are quite underwhelming given the complexity of the admission tests.)

The way how the school ran those assignments has changed over time. When I first learned about them (in 2015 or thereabouts), they were openly published on github, and applicants had a month or so to work on solutions, which were then reviewed by instructors. An assignment would typically consist of three problems of different nature. The first one tested html and css skills, and required building a web page based on provided mockups. The second one was of an algorithmic nature, requiring solving some remotely practical problem with javascript (I usually skipped that one, because the problems were too yandex-specific to be exciting; for example I remember one being about building some build tool that used the principles of the Yandex BEM system). The third problem required fixing errors or adding new functionality to someone else's code. On a couple of years, these three individual problems would eventually come together into a single coherent thing, and that was glorious.

Those were the golden years. But, as everything good in this world, they didn't last. The approach was clearly not scalable. Perhaps, eventually the reviewers got overwhelmed with submissions. Perhaps, someone pointed out the unfairness to those who had little free time or who learnt about the admission period close to its end and thus had far less time to finish the assignments. So, to my sorrow, they stopped publishing assignments to github, and moved to an in-house automated testing system. They also limited the time allowed to complete the test to hours or days from the moment the applicant opens the test. And in order to get to the tests, one has to fill in an admission form full of silly irrelevant questions. It was as if they wanted to keep away people who wanted just to solve their tests for the heck of it. People like me.

This brings me to this year.

## This year's assignment

This year's assignment did not have a markup and styling component, but otherwise was quite well rounded. It asked the developer to fix a toy project for displaying log messages. The project consisted of a simple-looking frontend, and a node backend. The frontend had an input textbox that accepts filters for the logs written in a simple query language (think Kibana). The query would then be parsed into a list of filtering criteria that the backend would apply before sending log events over to the client. The backend connected to the client over a web socket.

The parts of the assignment included:
- Writing an eslint plugin
- Writing linter rules for commitlint (totally ininspiring; I skipped that)
- Writing a couple of babel plugin (also uninspiring; skipped)
- Fixing some typescript types
- Fixing the query parser
- Fixing / implementing a virtualized list for the log events displayed on the client
- Some updates to a couple of React components (yuck!)
- Updating the Node backend to apply the filters, and to be able to query logs from a logs service (there was no real logs service; this had to be done via a test endpoint of the same backend)

### The good
I loved how the project was arranged as a monorepo without any additional tools. It did not require pnpm or yarn; and was quite effectively using npm workspaces. Another thing that I loved was the spartan nature of the backend. The Node server just ran on `node:http` without any additional frameworks; something that I have never tried. It had its own simple body parser. It had its own simple web sockets server. It showed how to connect the web sockets server to the http server. It had interesting tests that tested the web sockets server. It was all great!

I also how this year — for the first time, as far as I know — they automatically generated a repo for every participant on their internal gitlab instance, which contained starter code for the project. The integration of the gitlab instance with their testing platform was so seamless it brought tears to my eyes.

### The bad
I think this was the first time that Yandex used react in its admission test. Previously, Yandex tried to be agnostic about front-end frameworks, and tested applicants' knowledge of direct DOM manipulation. This year, it feels that they have finally given up. The front-end part of the assignment included building a list virtualizer, which I did, but it turned out to be such a buggy mess prone to fall into infinite recalculations of virtual list members that I was disgusted.

The project used react 18 — why, for chrissake, when react 19 is already 1.5 years old?! It also contained such code as:

```
    const [visibleEvents, setVisibleEvents] = useState<LogEvent[]>([]);
    const [allEvents, setAllEvents] = useState<LogEvent[]>([]);
```

although `visibleEvents` was derivable from `allEvents`. And no, I don't think they expected applicants to fix this.

Working with react hooks in that codebase got me even more annoyed than usual by the design of react hooks. The effort that they require to both avoid creating stale closures, and keep stable references to functions between rerenders is unreasonably high.

### The worst
This project introduced me to the Russian conventions of writing git commit messages. Apparently, according to those conventions, commit messages in Russian should look like this:

```
feat: добавить новую функцию
fix(backend): исправить обработку ошибок
```

Somehow, I don't mind when in English, the recommendation is to begin commit messages with a bare infinitive, e.g.: "add such-and-such", or "fix so-and-so". The idea, as I heard it, is that this way, the commit message would complete the sentence: "If applied, this commit will [subject line]...". Apparently, the Russian recommendation just mechanically translated English grammar into Russian, requiring that in Russian, commit messages also start with an infinitive. But in Russian, the effect of an infinitive is quite different. A Russian infinitive makes a message "add a certain feature" sound more like "to add a certain feature". The result, at least to my eye, is jarring, and is something that I would never want to write.

The other bad part was carelessness with which the assignment was written. Consider, for example, the following task:

> Интеграция с сервисом логов в Backend (40 баллов)  
> Задача  
> Backend проекта сейчас имитирует поведение сервиса, от которого будут приходить данные.  
> Требования:  
> Необходимо подключиться к этому сервису, который предоставляет логи. Известно, что сервис предоставляет только GET эндпоинт. Необходимо научиться работать с этим эндпоинтом так, чтобы наши клиенты могли подключаться к нам по webscoket и получать актуальные данные.

The wording of the task (`подключиться к этому сервису`) suggests to me that there should be an external service that developers need to connect to. And yet, there were no connection details for such service either in the task itself, on elsewhere in the project code. What does this mean? Well, it means that the text of the assignment was not properly proofread.

For some reason, Yandex don't seem to be believers in clear communication. I wonder about that when I compare the statements of their problems to problem statements in Advent of Code. When Eric Wastl, the guy who runs Advent of Code, releases his challenges, their text is polished. It is usually unambiguous. It contains diagrams demonstrating what the problem expects from you. With Yandex, their problem statements often contain ambiguities. Somehow, they expect developers to figure them out.

And now for the worst part — the tests for submitted code. Yandex are strong believers in keeping tests closed. Which means that, for developer, there is next to zero insight into why his code has failed. They don't give you inputs that failed your code. They don't give any hints about what your code is doing wrong. You are just left staring at the notification that tests have failed, and wondering whether it is your code or their tests that are in the wrong.

This happened to me for one task of this project, where I had to enable the filtering of the logs on the backend. I could have sworn that I have added the code responsible for the filtering. I could see filtered logs on the client. I wrote my own tests to prove to myself that the backend can filter the results. Yet the tests on the Yandex side continued to fail. Lame!

### Summary
All in all though, this was an intellectually stimulating challenge that taught me things about writing Node backends.