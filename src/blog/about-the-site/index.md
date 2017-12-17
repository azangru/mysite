---
title: About this site (purpose, tech stack, etc.)
date: "2017-12-02T17:30:38.147Z"
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
social networks, where the presentation options, such as the number of characters in a post,
or allowed tags, or scripts, or embeds, are dictated by the platform, and the
content is stored in a database elsewhere. And where users are treated as a product
whose attention is sold to advertisers.

It has also become quite clear to me that I rather dislike social networks. They
certainly have their uses, and I would from time to time check out a Twitter account
or five to see what’s going on in the world of web development, but I am mostly
a consumer, not a producer of such messages; I do not feel the urge to tell the world
of my achieveemnts or grievances, to take part in flash mobs, to feel a part of
a community and to be rewarded with likes or other kinds of Bernian "stroking".

I do, however, like a relatively quiet place where I would have an opportunity to
organize and examine my thoughts. For this purpose, a standalone site that hearkens
back to the days of Web 1.0 (in the sense that it has no comments section, no interaction
with the visitors) is suited very well.

## Colophon, or the tech stack

This site was initially built with [Middleman](https://middlemanapp.com/) in 2014.
I chose Middleman, because it was based on Ruby (the language I was most familiar with
at the time), was conceptually reminiscent of Ruby on Rails (assets pipeline, erb templates),
and all in all looked pretty powerful — it was marketed as an instrument for building
general-purpose static web sites, not just blogs (as Jekyll pitched itself).
Middleman also supported multilanguage sites, and it was my fancy at the moment to keep
my site bilingual, both in English and in Russian. Turned out, I needn’t have worried
about multilingual support; I never cared to build the Russian version of the site anyway.

Some time later (was it in 2015?) I updated Middleman to version 4, which introduced
external assets pipeline, so that JavaScript and CSS assets could be compiled using
Webpack rather than through some Ruby gems. That gave even more freedom of choice of
frontend technologies.

The next logical step was to ditch the Ruby-based generator altogether, and move solely
to JavaScript. Contributing to this was the mildly annoying fact that Middleman turned
out to have an opinion about the folder structure of the project — the contents of the
source folder should map the output of the folder where the site is eventually built.
I found it cumbersome (and judging by the fact that Thoughtbot devised a
[workaround](https://github.com/thoughtbot/proteus-middleman/blob/50b3e0d6987e4e0f9cce2e057be77b6672059c52/extensions/views.rb)
for this specific behavior, I was not the only one. By the way, the workaround broke things
after the update to Middleman version 4, so there).

So I re-wrote the site in [Gatsby](https://www.gatsbyjs.org/), a fantastic and very tweakable
static-site generator that uses React to generate pages and a graphql
layer to fetch the data required for React components during the build step. For styling,
I moved from SCSS (which I quickly turned into a mess) to styled components
that conveniently co-locate styles to the React components that use them.
