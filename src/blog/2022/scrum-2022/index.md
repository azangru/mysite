---
title: Scrum in my team, 2022
date: "2022-06-03"
layout: layouts/post.njk
published: true
---

In August 2020, when work had gone remote, members of our team got a chance to take a 2-day professional scrum master level 1 training with a scrum.org trainer Andy Hiles. Since then, we have been trying to integrate the scrum framework into the way we work. Here's an overview of how it's been going.

## Bird’s-eye view of scrum
It all begins with a product. The purpose for a group of people getting and working together is to make sure that the product happens. The product must have some value, or it wouldn’t have needed to be built. There are probably people out there who waiting for this product — we call them stakeholders. There are hopefully people in your organization that keep their eye on the product and understand its value and its purpose. A scrum team needs access to this person; and the scrum framework calls him the product owner.

The product is probably fairly complex and can‘t be hacked together in a day or two — otherwise, there wouldn't have been a need for inventing a process for how to get there. The whole point of scrum is identifying a group of people that can build the product — that’s the cross-functional, self-managing scrum team, — slicing up the path to the product into small pieces — that’s product backlog items, — completing a certain number of items on a regular basis — that’s the sprint; – and then regularly taking a step back to check whether the product is still being built appropriately and in the right order — what’s commonly mentioned as inspecting and adapting.

The scrum framework recognizes three roles — or, as they are called since the 2020 update, accountabilities – within a Scrum team. These are the developers, the product owner, and the scrum master. The product owner carries the vision of the product, has the domain knowledge, and understands the value that the product brings; he is thus the sole authority in deciding which product features have to be delivered in what order. The developers then build the product. The scrum master makes sure that scrum happens. This, judging by the sheer volume of literature about the scrum master’s role, is the most mysterious role.

## The name
As a historical aside, although the authorship of the scrum framework is ascribed to Jeff Sutherland and Ken Schwaber, it was two Japanese authors, Hirotaka Takeuchi and Ikujiro Nonaka, who published an article in Harward Business Review in 1986, which anticipated the whole agile movement in software of the later decades. In that article, they used a sports metaphor to contrast the relay race – which has since become familiar as the waterfall model of development — with a rugby scrum, in which “the ball gets passed within the team as it moves as a unit up the field.”

## The sprint
The purpose of doing work in sprints is to establish a regular cadence of work. It allows for biting off a chunk of work, working on it, and then inspecting the results of the work. The Scrum Guide prescribes that a sprint take no longer than 1 month. Our team holds two-week sprints; although occasionally, when there are holidays, we would have a couple of 3-week sprints and then would continue at our regular 2-week schedule.

The scrum guide insists that a sprint must have a goal. In fact, the latest, 2020 edition of the Scrum Guide, has put more emphasis on the intentionality of work done during scrum. Thus, it suggests that the product has a defined product goal, and each sprint has a defined sprint goal.

Ideally, a sprint goal should communicate why a sprint is valuable. Ideally, there should be only one goal for a sprint, which would help the development team focus on this goal. This was puzzling for us until we found in the scrum literature the permission to take tasks into a sprint that do not relate to the goal, provided that the goal exists and that it takes priority as the most crucial purpose of the sprint.

**Learning:** while a sprint goal is important, not all work taken in a sprint must directly relate to the sprint goal.

## Sprint planning
According to theory, sprint planning is an event during which the developers and the product owner will together decide which items from the product backlog will be taken into work for the next sprint. There are several things about this event that are worth noting. First, the product backlog should be ordered in a way that the items that will bring _the most value_ to the product are at its top. Second, both the product owner and the developers need to clearly understand what has to be done in order to complete these backlog items. And finally, there is some sort of negotiation taking place between the product owner’s desire to get more items done, and developers’ capacity to complete them without lowering the quality of their work.

In our team, we adopted the following practices regarding sprint planning:

- Although our sprints are two weeks long, we run a sprint planning meeting every week. This effectively turns the mid-sprint planning meeting into a backlog refinement meeting that helps us to prepare the tasks for the actual planning meeting.
- We found ourselves going again and again over the same tasks; so to avoid that, we started to mark the tasks that are ready to be taken into a sprint with the label "Ready". We have come up with a set of criteria for a ready task. We usually try only to include into a sprint tasks that are "ready"; although sometimes we will also admit the tasks that will become ready during the course of a sprint, which means that we expect its dependencies to be done before the next sprint is completed
- We agreed to write the criteria of "done" for every task. Usually, they are quite repetitive; for example, the code is approved and merged into the main branch; however, this gives an opportunity to discuss whether any particular task needs a dedicated quality assessment step, or any documentation written, and so on.
- Finally, we try to define a sprint goal, and then to refer to it during the sprint as a reminder of what we are supposed to be focussing on. A sprint goal is supposed to be just one thing, not a list of things, which we initially struggled with, until we discovered the suggestion that the sprint goal does not have to cover every task that is included in the sprint. So it’s perfectly fine to have sprint tasks that are not directly related to the sprint goal; however the sprint goal should be the primary focus of the sprint.
- In all of this, Jira is both our friend and our foe. With Jira, it is too easy to think in terms of tasks and tickets; not in terms of backlog items; and thus lose track of the _value_ of the work that’s being done. Besides, Jira doesn't really allow you to associate multiple people with a sprint backlog item, which is only natural if you do pair programming or mob programming. But we have not discovered a better tool that we could use instead.

## The daily scrum
The daily scrum is a scrum event intended for developers to let them quickly catch up and plan the work for the next 24 hours. The point that you will see many scrum coaches make about the daily scrum is that the purspose of daily scrum is not to be a status report. It’s not developers reporting to their manager what each of them did yesterday and what each of them intends to do today. The purpose of the daily scrum is to allow developers inspect where they are in the sprint, and adapt as necessary.

Our team has experimented with the daily scrum quite a bit. When we started holding daily scrums, we were working remotely, which made it natural for us to screenshare the Jira board during the call, so that we can see the progress of our sprint items. We played with the time of the daily scrum — we initially held it at 10:30; then, briefly, at 13:30 to avoid clashes with various other meetings; until finally we moved it down to 9:30. It seems that having it as early as possible during the day fits with the purpose of the daily scrum the best, because it helps to plan the work for the day while the rest of the day is still in front of you.

Here’s where we are deviating from the scrum guide. According to the scrum guide, the daily scrum should take no longer than 15 minutes. It really should be just a quick catch-up meeting for developers to check how things are going and if anyone is stuck and needs any help from the others. In theory, what you should not do during the daily scrum is what’s called _solutioning,_ meaning that if you have any problems or questions, you should not discuss them in detail, but rather use the daily scrum to identify the the people that you want to discuss your problem with, and then hold the actual discussions and problem solving after the scrum. However, since we are not a cross-functioning team, but rather a team of similarly skilled specialists, we do tend to discuss technical or design details during the daily scrum. Plus, we also use the daily scrum to go through the list of the current pull requests, and at least decide which of them need urgent attention of the whole team in order to get them approved and merged. This makes our daily scrums last for about half an hour rather than the prescribed fifteen minutes.

All in all, I think the daily scrum is the scrum even that we have made the use of the most.

## Sprint review
The end of a sprint is a natural place to take a pause and inspect the outcome of the sprint, which, in scrum terminology, is called a _product increment_. According to theory, this is the event that has the most use for the product owner, who can use it to inspect the current state of the product, and possibly update the priority of the backlog items. Ideally, this event would include stakeholders — the people who presumably need the product and who are in the best position to tell whether the product is doing the right thing, and what their wishes for the product are.

I do not feel we have quite mastered this event yet. We are not _really_ sure whether we have a product owner; and we certainly do not have any stakeholders attend our sprint review meetings. So what we currently do is we have developers show and tell what they worked on over the sprint. This feels like a status report, and almost certainly does not allow sprint reviews to live up to their full potential.

## Sprint retrospective
If the sprint review gives a chance to the product owner and the stakeholders to inspect the state of the product by the end of each sprint, and adapt accordingly, then sprint retrospectives are an opportunity for developers to reflect on how the sprint went, and whether there are any aspects of their collective work process that need improvement. A useful sprint retrospective would bring up some actionable items that can be added to the next sprint as a part of continuous improvement. According to the theory, sprint retrospectives are the most important scrum event because they are the mechanism of making teams better.

What we are discovering is that sprint retrospectives are hard. On the one hannd, it is difficult to keep them engaging and avoid them getting repetitive; whereas on the other hand, there is only so much we can change about our processes. For example, although I am sure we would like to be able to focus on our new website more, there inevitably is work on the current site and on the release.

## Scrumbut
There’s a joke I heard from Nigel Baker that many teams that claim they are doing scrum are actually doing what he calls scrumbut — as in, they would say, “We are doing Scrum, but we are not doing _that_ bit”. In our case, there are several deviations from the spirit of the game of scrum, as it were:

### Value
We do not really fully understand what is valuable to our users; at least this is not the knowledge that will trickle all the way down to the developer level, or would drive our sprint plannings. I know that we are trying to get better at this; and I appreciate that perhaps our user base is so diverse that there is no way of identifying the most valuable parts of our product; but this seems to be somewhat contrary to the spirit of scrum.

### Product owner
This is closely related to the previous point. The purpose of the product owner role is maximizing the value of the product; but that is hard to achieve without a clear vision of what the value is.

### Cross-functional team
Ours is a front-end team; which, as the name suggests, isn’t really cross-functional. Scrum coaches usually scoff at the composition of teams by their specialization.

## Benefits of the process
However, even though there are some aspects of scrum that we haven’t quite mastered yet, trying to follow the scrum framework has brought a number of benefits. Of course, I am only speaking as a developer here.

### Better understanding of what needs to be done
By discussing what we are going to do during the sprint in sprint planning meetings, we get clarity about what exactly has to be done, even though the answer as to _how_ may only come once we start working on the tasks. We also make sure that we only take into a sprint tasks that are truly ready to be worked on.  

### Better transparency
During a sprint, the team knows what is being worked on, and what status each task is in.

### Better coordination
Through daily scrums, we can better establish priorities for work during the sprint, or ask for help from other team members.

### Self management
_“A scrum master is not a project manager. Project managers manage the project by scheduling work, tracking progress, coordinating and taking actions to get the project back on planned schedule. Scrum masters don’t do any of that.” (Bas Vodde, Craig Larman. Large-Scale Scrum)_

According to the theory, scrum is a pull-based system as opposed to the push-based, when a project manager is pushing tasks to developers. With scrum, developers are free to pick the tasks from the sprint, according to their capacity, ability, or interest.

### Knowledge transfer
Team members have a chance to work in different areas of the codebase; plus, there are regular code reviews of pull requests.


## Areas of improvement
- Better understanding of the value of our product? Maybe a product owner?
- Better use of sprint reviews? Currently we are just demoing the work to each other, focusing on what each individual developer has done.
- Better at cross-functional team? Currently the team we work the closest with is the backend team; and we overcome any communication difficulties due to the fact that we work in a single room, and have daiily standups, and other kinds of meetings. Would feature teams work better for us?
- Share experience within the organisation? Have workshops, book club, etc.?
- Focus. Maybe some day, when we retire the current site, which takes away from our work on the new site...
