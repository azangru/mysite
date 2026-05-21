---
title: Website refresh
date: 2026-03-12
layout: layouts/post.njk
published: false
---

This has been a multi-year exercise in embarrassment and procrastination...

As a web developer, I have long been embarrassed by my personal website. Primarily, this was because for its last iteration (around 2015), I fell for the hype, and used Gatsby to build it. I vaguely remember seeing a discussion of static site generators on Slack, where the participants agreed that Gatsby was "awesome". I remember watching Kyle Mathews' talks about a universal data layer built with graphql. I remember getting hooked...

It took me several years to grow up and recognize that nobody should need graphql or, god forbid, react for a measly personal website. In 2021, I cut a branch in my site's github repo, and called it `migrate-to-eleventy`...

Now, as I am writing these words, it is already 2026. What have I been doing all these years?

Procrastinating, that's what. Incapacitated by analysis paralysis.

Thing is, over the years of posting online on a different platform, I gradually learnt about my writing habits. It's funny — going on a tangent now — to think that during my first attempt to create a personal website, I was specifically looking for a tool that would make it possible to build a multilingual site, which is how I chose Middleman to build the first version. As if I were actually going to write in two languages. Ha! Time showed this was pure fantasy. It also mercilessly showed that I have very little to say. I don't quite see the point (except for marketing, but marketing is yucky) in adopting an instructor's stance and rehashing stuff that is far better presented in documentation or in conference talks. And I am not creative or inquisitive enough to produce genuinely useful and original technical content, such as, say, Roman Komarov does at [kizu.dev](https://kizu.dev/).

And yet, when I looked at my statistics on the other platform, I saw that over the years, I had posted over 8000 entries there.

What were they about?

Mostly, they were short texts, often written in response to something that I saw or heard online. Since the strongest emotions are anger, frustration, or indignation, most of my texts there are written in a negative tone. They are similar to what people tend to write on Twitter, Bluesky, or Mastodon; only I never had an account there. Besides, I don't even know if I would be welcome there — I do not share various ideas that people tend to feel very strongly about.

So I thought, I would have something like this on my website. Something like a microblog; a twitter that I never had. But whenever I thought this, I asked myself, if a static site generator was really the right approach for such a site. If I planned to have multiple small texts, would I want to generate so many individual files every time the site builds? Besides, what about comments? Shouldn't a blog or a microblog have comments? And if comments, then how would I set them up? They would need a backend: a server, with a database; and authentication; and the urls for the pages to which they refer would need to be stable... Also, hosting — does a free hosting plan exist that would support a backend server and a database?

This is what occupied my thoughts; and as a result, I could not commit to anything; and so the migration stalled.