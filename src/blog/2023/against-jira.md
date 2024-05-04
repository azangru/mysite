---
title: Against Jira
date: "2023-07-11"
layout: layouts/post.njk
published: true
---

{% html "styles" %}
<link href="/assets/for-blog/2023/against-jira/styles.css" rel="stylesheet">
{% endhtml %}

It is fashionable, among scrum advocates, to vocally dislike Jira. For a long time, this surprized me. I could not imagine what flaws they saw in it — apart from being slow, of course. Slowness goes without saying.

<img src="/assets/for-blog/2023/against-jira/img.avif">

The first clue came from Nigel Baker. In one of his interviews, he groaned, “has Jira finally learnt how to assign several people to a ticket”? Indeed, if you think about it, there is no reason why a ticket (a task? a sticky? that thing) should be assigned to only one developer, when some tasks by their nature need to be done collectively, and when some teams prefer to work in groups through pair or mob programming.

But my distaste for Jira has grown because of how difficult it makes it to separate product backlog items (features, something that brings value to the product) from the tasks that are created by developers to outline the steps towards building the feature. Product backlog items — the ones that bring value to the product — are something that the product owner can, and must, be engaged with. He creates them (or at least some of them); and rearranges them in the backlog according to their priority. Product owner can only meaningfully do so if the backlog items make sense to him. However, when he brings the product backlog to the development team during spring planning, the development team will create smaller, more technical, tasks to build towards to product backlog items that are taken into the sprint.

<div class="board">
  <div class="product-items">
    <div class="title">
      Product backlog
    </div>
    <div>
      Item 1
    </div>
    <div>
      Item 2
    </div>
  </div>
  
  <div class="sprint-backlog">
    <div class="title">
      Sprint backlog
    </div>
    <div>
      Task 1
    </div>
    <div>
      Task 2
    </div>
    <div>
      Task 3
    </div>
    <div>
      Task 4
    </div>
    <div>
      Task 5
    </div>
  </div>
</div>

To Jira, however, these tasks are the same. Jira does not understand product backlog vs sprint backlog. Jira can only create subtasks of a task. Or an epic. But the product owner may not want to have every product backlog item be an “epic”. Equally, developers may not want to have all tasks related to a feature be subtasks.

It feels that a physical wall with stickies is still an unsurpassed instrument.
