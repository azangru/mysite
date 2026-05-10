---
title: I do not like React hooks
date: 2026-05-08
layout: layouts/post.njk
published: true
---

Whenever I write react using its hooks api, I almost inevitably find myself ranting about them. Below is a list of my complaints.

## Awkward conditional logic
React hooks cannot be called conditionally. Which also means that they cannot be called after an early return. This becomes annoying during data fetching. Suppose a component does not immediately receive all parameters required to fetch data. This means that the logic for fetching the data cannot be immediately called. Instead of just checking whether all the required parameters are awailable and running the hook only when they are, one has to invert the logic, and to always call the hook, with an additional parameter that would help the hook skip data fetching. For example, with redux-toolkit query, it would look like this:

```ts
const MyComponent = ({ id }: { id: string | null }) => {
  const { currentData } = useMyData({
    id
  }, {
    skip: !id
  });
};
```

Meh. But even worse, I often find myself having to request several pieces of data sequentially. With RTK-query hooks, this becomes:

```ts
const MyComponent = ({ id }: { id: string | null }) => {
  const { currentData } = useMyData({
    id
  }, {
    skip: !id
  });
  const featureId = currentData?.feature.id;
  const { currentData: finalData } = useSomeOtherData({
    id: featureId
  }, {
    skip: !featureId
  });
};
```

Yuck! And of course, the component re-renders every time a hook updates, even though I might want it to render only when that final piece of data is ready.

Yes, yes, I know, sequential requests aren't great anyway; but that's what I often end up with in my project.

And here's another case that I found in my codebase: choosing which hook to run in order to get the data

```ts
const MyComponent = ({
  id,
  featureType
}: {
  id: string;
  featureType: 'gene' | 'transcript' | 'variant';
}) => {
  const { currentData: geneData } = useGeneData({
    id
  }, {
    skip: featureType !== 'gene'
  });
  const { currentData: transcriptData } = useTranscriptData({
    id
  }, {
    skip: featureType !== 'transcript'
  });
  const { currentData: variantData } = useVariantData({
    id
  }, {
    skip: featureType !== 'variant'
  });
};
```

So ugly!

## Preventing stale closures
React hooks run every time the component re-renders. Yet we may not want the functions passed into these hooks to run at every render. A function passed into a hook will close over the values of the variables that it references, thus creating closures. The next time the component re-renders and the variables are updated, the functions, unless they are re-created, will still reference the old values. But of course, we want those functions to reference up-to-date variables when they do get executed.

Hence the dependency arrays.


```tsx
import { useState, useCallback } from 'react';

const doSomething = () => { /* does something */ }

const MyComponent = () => {
  const [someState, setSomeState] = useState('whatever');

  const foo = useCallback(() => {
    doSomething(someState);
  }, [someState]);

  return (
    <AnotherComponent someProp={foo}>
  );
};
```

These dependency arrays are infectious. If a callback function calls another function created by the component, then that function also has to be wrapped in `useCallback`:

```tsx
import { useState, useCallback } from 'react';

const doSomething = () => { /* does something */ }

const MyComponent = () => {
  const [someState, setSomeState] = useState('whatever');

  const bar = useCallback(() => {
    doSomething(someState);
  }, [someState]);

  const foo = useCallback(() => {
    bar();
    /* and do something else */
  }, [bar]);

  return (
    <AnotherComponent someProp={foo}>
  );
};
```

Combine this with DOM event listeners, and it gets even worse:

```tsx
import { useState } from 'react';

const MyComponent = () => {
  const [someState, setSomeState] = useState('whatever');

  const callbackRef = (element: HTMLDivElement) => {
    const resizeObserver = new ResizeObserver((entries) => {
      // do something with the entries
      // and while doing so, try accessing the state
      // oh shit, you can't
    });

    resizeObserver.observe(element);
  };

  return (
    <div ref={callbackRef}>
      of course I am a div
      do we even write anything other than divs anymore?
    </div>
  );
};
```

So to fix this, we have to reach out for a `useRef`. And a `useEffect` to update the ref, so that it holds the latest value:

```tsx
import { useState, useEffect, useRef } from 'react';

const MyComponent = () => {
  const [someState, setSomeState] = useState('whatever');
  const stateRef = useRef(someState);

  useEffect(() => {
    // because you aren't supposed to write to refs during render
    stateRef.current = someState;
  }, [someState]);


  const callbackRef = (element: HTMLDivElement) => {
    const resizeObserver = new ResizeObserver((entries) => {
      doSomething(stateRef.current);
    });

    resizeObserver.observe(element);
  };

  return (
    <div ref={callbackRef}>
      Hi
    </div>
  );
};
```

Point is, this is all doable, but it sucks. The react team even introduced a `useEffectEvent` hook to relieve the misery somewhat, which is an admission that this sucks. But incredibly, that hook is only supposed to be used with `useEffect` or `useLayoutEffect`, not with callback refs; so for those, the problem remains.


## The whole "you might not need an effect" thing
React hooks were introduced at ReactConf 2018 in October 2018. The new React docs came online in Spring 2023, according to internet memory. And the new docs contained an article titled _You might not need an effect,_ which described a number of patterns for which effects were inadvisable.

One of such patterns, which is quite common in my code, is updating the state when the props change.

I could have sworn that in 2018, when the hooks came out, the message about `useEffect` was that it is a better replacement for the `componentDidMount` and `componentDidUpdate` lifecycle methods. And before, if we needed to update the state on props change, we did so in those two lifecycle methods; so I thought it only reasonable that we will continue doing so in `useEffect`. What the docs say now is that if such a need arises, the state should be updated right in the main render function. The example from the docs goes like this:

```tsx
function List({ items }) {
  const [selection, setSelection] = useState(null);

  // Better: Adjust the state while rendering
  const [prevItems, setPrevItems] = useState(items);
  if (items !== prevItems) {
    setPrevItems(items);
    setSelection(null);
  }
  // ...
}
```

Changing component's state during rendering used to be anathema with class components; yet here we are.

## Lack of the "previous value" semantics
In class components, the `componentDidUpdate` method had access to the values of properties and state from the previous render. Now, I agree that always having to check which of the properties or state values changed before running appropriate logic sucked, and that it's much more attractive to just list relevant properties / state values in `useEffect`'s dependency array. But, with hooks, it has gotten harder to track values from the previous render if you really need them for something. There is a [userland implementation](https://github.com/streamich/react-use/blob/3ce080cdf30cffba3f5987545710d21b48bf4a42/src/usePrevious.ts) of a `usePrevious` hook that uses a ref to track the previous value:

```ts
import { useEffect, useRef } from 'react';

export default function usePrevious<T>(state: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = state;
  });

  return ref.current;
}
```

But, this implementation, by returning `ref.current`, violates React guidelines that refs should not be read from during render.

There is [another userland implementation](https://github.com/uidotdev/usehooks/blob/945436df0037bc21133379a5e13f1bd73f1ffc36/index.js#L1017-L1027) of a `usePrevious` hook, which is probably more in line with React guidelines:

```ts
export function usePrevious(value) {
  const [current, setCurrent] = React.useState(value);
  const [previous, setPrevious] = React.useState(null);

  if (value !== current) {
    setPrevious(current);
    setCurrent(value);
  }

  return previous;
}
```

This looks like it should work; but you see how easy it is to make a mistake?

## Lack of the 'on mount' semantics
I swear I heard in 2018 that `useEffect` with an empty dependency array was a one-for-one replacement for the `componentDidMount` lifecycle method. But then `StrictMode` was introduced, which, as it turns out, runs all effects and callback refs to check how well they clean up after themselves. The idea is that this will help developers discover bugs related to incorrect cleanup earlier.

This is all well and good; but it is a legitimate use case to want certain code to run only once per the lifetime of a component. It used to be a common suggestion in react circles to enforce a single execution of an effect via a flag stored in a ref:

```ts
const didRun = useRef(false);

useEffect(() => {
  if (didRun.current) return;
  didRun.current = true;

  doSomething();
}, []);
```

I have such examples in my codebase; but this is now frowned upon.

So, what should we write instead?

The official docs at react.dev have the following example for when you need to run something once when a component mounts: 

```ts
function Form() {
  // Good: This logic runs because the component was displayed
  useEffect(() => {
    post('/analytics/event', { eventName: 'visit_form' });
  }, []);
  // ...
}
```

This example though suffers from the problem that it will run twice when wrapped in `StrictMode`.

Since I couldn't find anything relevant in the docs, I asked ChatGPT's opinion on what the modern solution to this problem should look like. It suggested the following:

```ts
function Component() {
  const resourceRef = useRef<Resource | null>(null);

  if (resourceRef.current === null) {
    resourceRef.current = createResource();
  }

  // ...
}
```

Me: But doesn't this mean writing to a ref during rendering?

ChatGPT, referencing the docs: Yes; but there is an exception for "initialization."

Me: Bloody hell!

Also me: Oh, but what if the initializing is an asynchronous process?

To which ChatGPT's suggestion was:

```ts
function Component() {
  const [resource, setResource] = useState<Resource | null>(null);

  useEffect(() => {
    let ignore = false;

    async function init() {
      const value = await createResourceAsync();
      if (!ignore) {
        setResource(value);
      }
    }

    init();

    return () => {
      ignore = true;
    };
  }, []);

  //...
}
```

Which still raises the question of what to do if you want to avoid running `createResourceAsync` multiple times.

Isn't all this just so much more cumbersome than what we had with the simple `componentDidMount` lifecycle method?


## Prohibition on reading from refs during render

I've already mentioned this rule. I discovered it very late into writing react with hooks; so I've managed to violate it quite a lot. As refs were advertised in 2018, I took them to mean a way to store values that do not need the component to update. They appeared to be a perfect replacement for class fields, where you could store any data you need.

As it turned out, they were not a perfect replacement.

You are free to read a class property during render; but you are not supposed to read from a ref. You are not supposed to return `ref.current` from a hook. You are only supopsed to read from a ref in a callback function, or during that funny "initialization" clause.

## And for what?

So many rules! So many deviations from regular javascript programming! And for what? One hilariously ironic selling point for hooks was that developers (mostly beginners) were getting confused by the `this` keyword in class components; but isn't the mental overhead of the hooks much more confusing? Another, much more practical selling point, was that they helped avoid duplicated logic by moving `componentDidMount` and `componentDidUpdate` into a single `useEffect` hook with explicit dependencies; though, given how developers are now discouraged from `useEffect`, one might wonder what that fuss was all about.

I keep thinking about this every time I write code with `Lit`, which has class-based components that feel like a breath of fresh air compared to react hooks.