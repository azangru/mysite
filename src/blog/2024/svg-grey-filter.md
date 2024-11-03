---
title: A little adventure with SVG and a grey filter
date: "2024-11-03"
layout: layouts/post.njk
published: true
---

I was working on an svg diagram that displays multiple shapes, and should allow selection of an area such that when this area is selected, all the shapes and fragments of shapes that are outside of it change their color to a uniform shade of grey. Very schematically, it should behave like this:

Before selection:

<div>
  <svg viewBox="0 0 900 400"
    style="width: 900px; height: 200px; border-style: dashed; border-width: 1px; border-color: black; width: 550px">
    <text x="410" y="100" font-size="30">Testing</text>
    <circle cx="450" cy="200" r="50" fill="red" />
    <circle cx="250" cy="200" r="30" fill="green" />
    <circle cx="750" cy="200" r="20" fill="blue" />
  </svg>
</div>

After an area in the middle of the diagram is selected:

<div>
  <svg viewBox="0 0 900 400"
    style="width: 900px; height: 200px; border-style: dashed; border-width: 1px; border-color: black; width: 550px">
    <filter id="grayscale">
      <feFlood flood-color="#ccd3d8" flood-opacity="1" x="0" y="0" height="400" width="420" result="A"/>
      <feFlood flood-color="#ccd3d8" flood-opacity="1" x="475" y="0" height="400" width="420" result="D"/> 
      <feComposite operator="in" in2="SourceGraphic" in="D" result="C"/>
      <feComposite operator="in" in2="SourceGraphic" in="A" result="B"/>
      <feMerge>
        <feMergeNode in="B" />
        <feMergeNode in="C" />
      </feMerge>
      <feComposite operator="over" in2="SourceGraphic"/>
    </filter>
    <g filter="url(#grayscale)">
      <text x="410" y="100" font-size="30">Testing</text>
      <circle cx="450" cy="200" r="50" fill="red" />
      <circle cx="250" cy="200" r="30" fill="green" />
      <circle cx="750" cy="200" r="20" fill="blue" />
    </g>
  </svg>
</div>

This might (I haven't tested) be achievable with CSS filters; but I didn't want to use those, because the svg will likely need to be exportable. So, for the first time, I tried to tinker with svg filters. Since those are used by far fewer people than CSS, it was difficult to find documentation with examples that would get me going; so I asked the LLM that is freely available on bing.

It failed miserably. Perhaps because of the way I was phrasing my questions, it kept convincing me that it was possible to create an svg shape, apply a transparent fill and a filter to it, place it over another shape, and see the filter applied to that other shape. Which was my expectation all along, because this is something that CSS can do now with backdrop filters. So the code the LLM would suggest was some variation of:

```xml
<svg width="300" height="300">
  <!-- Define the filter -->
  <defs>
    <filter id="greyscale">
      <feColorMatrix type="matrix" values="0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0 0 0 1 0" />
    </filter>
  </defs>

  <!-- Original elements -->
  <circle cx="150" cy="100" r="80" fill="blue" />
  <rect x="100" y="200" width="100" height="50" fill="red" />

  <!-- Overlay rectangle with greyscale filter -->
  <rect x="0" y="0" width="300" height="300" fill="transparent" filter="url(#greyscale)" />
</svg>
```

This did not work. I am still unsure whether the LLM was hallucinating (aka bullshitting), or there is still something salvageable in its approach.

By some miracle, I eventually came across an example that got me on what might possibly be the right track. Livejournal being the crap that it is, I cannot render my test svg snippet in this post; but the markup that seems to achieve what I am after is this:

```xml
<svg viewBox="0 0 900 400"
  style="width: 900px; height: 400px; border-style: dashed; border-width: 1px; border-color: black; width: 550px">
  <filter id="grayscale">
    <feFlood flood-color="#ccd3d8" flood-opacity="1" x="0" y="0" height="400" width="420" result="A" />
    <feFlood flood-color="#ccd3d8" flood-opacity="1" x="475" y="0" height="400" width="420" result="D" />
    <feComposite operator="in" in2="SourceGraphic" in="D" result="C" />
    <feComposite operator="in" in2="SourceGraphic" in="A" result="B" />
    <feMerge>
      <feMergeNode in="B" />
      <feMergeNode in="C" />
    </feMerge>
    <feComposite operator="over" in2="SourceGraphic" />
  </filter>

  <g filter="url(#grayscale)">
    <text x="410" y="100" font-size="30">Testing</text>
    <circle cx="450" cy="200" r="50" fill="red" />
    <circle cx="250" cy="200" r="30" fill="green" />
    <circle cx="750" cy="200" r="20" fill="blue" />
  </g>
</svg>
```
