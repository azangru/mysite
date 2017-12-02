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

I have always wanted a site that would be truly mine and where I would have complete
control over the content and the presentation. As opposed to blogging platforms or
social networks, where the presentation options, such as the number of characters,
or the allowed tags, or scripts, or embeds, are dictated by the platform, and the
content is stored in a database elsewhere. And where users are treated as a product
whose attention is sold to advertisers.

It has also become quite clear to me that I rather dislike social networks. They
certainly have their uses, and I would from time to time check out some Twitter
accounts of interesting people to see what’s going on in the world of web development,
but I am mostly a consumer of such messages; I do not feel the urge to tell the world
of my achieveemnts or grievances, to be rewarded with likes or other kinds of Bernian
"stroking".

I do, however, like a relatively quiet place where I would have an opportunity to
organize and examine my thoughts. For this purpose, a standalone site that hearkens
back to the Web 1.0 days (in the sense that it has no comments section, no interaction
with the visitors) is suited very well.

## Colophon, or the tech stack

This site was initially built with [Middleman](https://middlemanapp.com/) in 2014.
I chose Middleman, because it was based on Ruby (the language I was most familiar with
at the time), had similar concepts to Ruby on Rails, and overall looked pretty powerful.
It was marketed as an instrument for building general-purpose static sites,
not just blogs (as Jekyll pitched itself). Middleman also supported multilanguage sites,
and it was my fancy at the moment to keep my site bilingual, both in English and in
Russian. Turned out, I needn’t have worried about multilingual support; I never cared
to build the Russian version of the site anyway.

Some time later (was it 2015?) I updated Middleman to version 4, which introduced
external asset pipeline, so that javascript and css assets could be compiled using
Webpack rather than the ruby-based assets pipeline (borrowed from Rails, I believe).
That gave even more freedom of choice of the frontend technologies.

The next logical step was to ditch the Ruby-based generator altogether, and move solely
to JavaScript. Contributing to this was the mildly annoying fact that Middleman turned
out to have an opinion about the folder structure of the project — the contents of the
source folder should map the output of the folder where the site is eventually built.
I found it cumbersome (and judging by the fact that Thoughtbot devised a
[workaround](https://github.com/thoughtbot/proteus-middleman/blob/50b3e0d6987e4e0f9cce2e057be77b6672059c52/extensions/views.rb)
for this specific behavior, I was not the only one. By the way, the workaround broke things
after the update to Middleman version 4, so there).

So this version of the site is made using [Gatsby](https://www.gatsbyjs.org/), a fantastic
and very tweakable static-site generator that uses React to generate pages and a graphql
layer to fetch the data required for React components during the build step. I have
also re-written the SCSS mess that were the styles of the first version of the site
with styled components that conveniently co-locate styles to the components that use them.
