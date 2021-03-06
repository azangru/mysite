---
title: About this site (purpose, tech stack, etc.)
date: "2017-07-12"
published: true
---

> I wanna be the leader  
> I wanna be the leader  
> Can I be the leader?  
> Can I? Can I?  
> Promise? Promise?  
> Yippee, I’m the leader  
> I’m the leader.  
> Ok what shall we do now?

> — Roger McGouth; as quoted in Oxford Dictionary of Modern Quotations

## The purpose

I have always wanted a web site that would be truly mine and where I would have complete
control over the content and the presentation. As opposed to blogging platforms or
social networks, where the presentation options, such as the maximum number of characters per post,
or allowed tags, or scripts, or embeds, are dictated by the platform, and the
content is stored in a database elsewhere. And where users are treated as a product
whose attention is sold to advertisers.

It has also become quite clear to me that I rather dislike social networks. They
certainly have their uses, and I would from time to time check out a Twitter account
or five to see what’s going on in the world of web development, but I am mostly
a consumer, not a producer of such messages; I do not feel the urge to tell the world
of my achievements or grievances, to participate in flash mobs, to feel a part of
a community and get dopamine hits from receiving likes or other forms of Bernian "stroking".

I do, however, like a relatively quiet place where I would have an opportunity to
organize and examine my thoughts. For this purpose, a standalone site that hearkens
back to the days of Web 1.0 (in the sense that it has no comments section, no interaction
with the visitors) is suited very well.

## The "blog" and the "diary"

Although I could not confirm it by finding a formal description of a typical blog post,
and although nothing in the word "blog" (derived, of course, from "web log") suggests
anything about the size of a blog entry, it seems the convention is that blogs are
a genre of medium-to-large length. After all, someone felt the need to come up with
the word *microblog* to indicate that its entries are going to be shorter than a typical blog post.

To this effect, I’ve decided to have a separate [blog](/blog/) section for longer
expository or argumentative pieces, and a [diary](/diary/) section for short entries
which it takes no mental effort to add. Judging by what tends to end up in
the diary section, its main purpose is to keep links to sites that caught my attention.

## Colophon, or some words on the tech stack

This site was initially built in 2014 using [Middleman](https://middlemanapp.com/).
I chose Middleman, because it was based on Ruby (the language I was most familiar with
at the time), was conceptually reminiscent of Ruby on Rails (assets pipeline, erb templates),
and overall looked pretty powerful — it was marketed as an instrument for building
general-purpose static web sites, not just blogs (as was Jekyll’s pitch).
Middleman also supported multilanguage sites, and it was my fancy at the moment to keep
my site bilingual, both in English and in Russian. Turned out, I needn’t have worried
about multilingual support; I never cared to build the Russian version of the site anyway.

Some time later (was it in 2015?) I updated Middleman to version 4, which introduced
what it called an external assets pipeline, so that JavaScript and styles no longer had
to be processed by Ruby gems and could be compiled in the more familiar, best-practice
way, using Webpack. That gave more freedom to choose appropriate frontend technologies.

The next logical step was to ditch the Ruby-based static-site generator altogether, and move solely
to JavaScript. Contributing to this decision was the mildly annoying fact that Middleman had
an opinion about the folder structure of the project — the arrangement of files in the
source folder should directly map the output of the folder to which the site is eventually built.
So if you wanted to organize the files corresponding to individual routes into a separate `views`
folder, you were out of luck. Judging by the fact that Thoughtbot devised a
[workaround](https://github.com/thoughtbot/proteus-middleman/blob/50b3e0d6987e4e0f9cce2e057be77b6672059c52/extensions/views.rb)
for this specific behavior, I was not the only one who found this not to my taste.
(By the way, the workaround broke things after the update to Middleman version 4, so there).

So I re-wrote the site in [Gatsby](https://www.gatsbyjs.org/), a fantastic and very tweakable
static-site generator that uses React to generate pages and a graphQL
layer to fetch the data required by individual React components during the build step.
For styling, I moved from SCSS (which I quickly turned into a mess) to styled components
that conveniently co-locate styles with the React components that use them.
