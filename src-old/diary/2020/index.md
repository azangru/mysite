---
title: "2020"
---

## December 31
Companion sites to Robert Sedgewick's books (e.g. [this one for algorithms](https://algs4.cs.princeton.edu/home/)) are a treasure!

## December 28
A fantastic [article](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs) by Andrey Sitnik about the minimum modern set of files for favicons.

## December 08
Interesting talks from Reactathon-2020.
- Day 1
  - [Lydia Hallie. JavaScript Visualized: Understanding how the V8 engine works](https://youtu.be/KgTW0xfyr9A?t=5507)
  - [Alex Krolick. Testing Async Components Using React Testing Library](https://youtu.be/KgTW0xfyr9A?t=7526)
  - [Jana Beck. Escaping flatland: a romance of data science in the browser](https://youtu.be/KgTW0xfyr9A?t=15730)

## December 07
Redux team is trying to catch up with `react-query`, and maybe with apollo too, by developing [redux-toolkit-query](https://rtk-query-docs.netlify.app/), a redux-based (and redux-blessed) approach to querying json apis.

## December 06
- [Repository](https://github.com/nodejs-design-patterns-book/nodejsdesignpatterns.com) with source code for the book Node.js design patterns.

## November 09
- Ben Lesh [talks](https://youtu.be/F8xOnnnW6qI) about how he refactored the RxJS library for v7 to be smaller.

## October 22
- A developer shared [source of his portfolio web page](https://github.com/riyaz942/web-portfolio) with lovely react-spring transitions.

## September 13
- [Repo with notes for _Thinking Reactively with RxJS_ course at Egghead.io](https://github.com/eggheadio-projects/thinking-reactively-with-rxjs-notes)

## September 10
Couple of potentially interesting online programming courses:
- [Introduction to Computational Thinking](https://mitmath.github.io/18S191/Fall20/) (uses the Julia language).
- [Advanced Database Systems](https://15721.courses.cs.cmu.edu/spring2020/schedule.html)

## August 30
- Kamran Ayub’s [companion repository](https://github.com/kamranayub/pluralsight-testing-progressive-web-apps) for his Testing Progressive Web Apps course.

## August 27
- Paul Henschel’s talk _[Making Games in React](https://www.youtube.com/watch?v=Go3QxQG6RK8)_ with a demo of creating a simple game.

## August 09
- A [fantastic live-coding session](https://youtu.be/ZdS9uOl4OJk?t=2102) by Ben Lesh, in which he TDDs a custom RxJS operator.
- Potentially interesting: [Building a complex application with web components and LitElement](https://youtu.be/x9YDQUJx2uw), by Justin Fagnani.

## July 25
- Ben Lesh does a fantastic job explaining RxJS in three hour-long videos on This dot media Youtube channel:
  - [Learning RxJS in one hour](https://www.youtube.com/watch?v=oFDVf0shWYE)
  - [Flattening operators in RxJS](https://www.youtube.com/watch?v=5098hvh2v0M)
  - [Subjects in RxJS 101](https://www.youtube.com/watch?v=Yvgfk5EAFws)
- Tobias Koppers [describes](https://youtu.be/3c-RFpaiUT8) the features of the upcoming webpack v.5.

## July 8
Kent C. Dodds’ React teaching materials:
- [React fundamentals](https://github.com/kentcdodds/react-fundamentals)
- [React hooks](https://github.com/kentcdodds/react-hooks)
- [Advanced React hooks](https://github.com/kentcdodds/advanced-react-hooks)
- [Advanced React patterns](https://github.com/kentcdodds/advanced-react-patterns)
- [Testing React apps](https://github.com/kentcdodds/testing-react-apps)
- [React performance](https://github.com/kentcdodds/react-performance)
- [React suspense](https://github.com/kentcdodds/react-suspense)
- ["Bookshelf"](https://github.com/kentcdodds/bookshelf)

## June 9
Saw [what I wish I knew when learning purescript](https://github.com/mjepronk/wiwinwl-purescript) — a cheatsheet containing newish purescript practices (npm and spago instead of bower).

## April 17
An interesting resource with CSS exercises — [100 days CSS challenge](https://100dayscss.com/).

## April 7
[Subtitle horse SHIRE](https://subtitle-horse.com/) is a fantastic browser-based subtitles editor. It’s very impressive what modern web technologies can do.

## April 6
Today’s findings:
- A [library](https://github.com/jimmywarting/StreamSaver.js) for saving files as streams from the browser
- A [SO comment](https://stackoverflow.com/a/31192753/3925302) describing syncing browsers via PouchDB
- [What happens when... Kubernetes edition](https://github.com/jamiehannaford/what-happens-when-k8s)

## April 1
Copy a range of commits (X..Y) from branch bar (e.g.: preX→X→Y→Z) to branch foo (ends in commit N):
- checkout branch B
- log history and note the sha of commit **before** the commit you are interested in (preX)
- note the sha of the last commit in the range of commits you are interested in (Z)
- checkout branch A
- `git rebase --onto N preX Z`
- `git rebase HEAD foo`

([link with more details](http://weblog.avp-ptr.de/20120928/git-how-to-copy-a-range-of-commits-from-one-branch-to-another/))

It should also be possible to cherry-pick a range of commits:
- `git cherry-pick X^..Z`

Notice the caret before the double dot — this is to include the first commit in the range. Without the caret, the first commit is not included.

([link](https://www.tollmanz.com/git-cherry-pick-range/))

## March 20
- [actions-gh-pages](https://github.com/peaceiris/actions-gh-pages) looks like it can actually be the github action that has figured out deployment to github pages (reminder: the problem was that it was impossible to deploy to github pages from a public repository). At the very least, it has sweet docs. Notice that for the first deployment using GithubToken some extra steps are required.
- Admired the style of Basecamp job postings — with [this](https://m.signalvnoise.com/basecamp-is-hiring-a-front-end-programmer/) as an example. Very attractive and personal job description.

## March 4
A [blog post](https://love2dev.com/serviceworker/development-best-practices) on service worker development best practices.

## February 17
Good GraphQL talks:
- [GraphQL before GraphQL](https://www.youtube.com/watch?v=gb1R-fWP1Yw) by Dan Schafer
- [Lessons from 4 years of GraphQL](https://www.youtube.com/watch?v=zVNrqo9XGOs), by Lee Byron

## February 14
Ben Lesh [gives a demonstration](https://youtu.be/_2hvpWLyd0o?t=1967) of writing unit tests for components that have RxJS logic in it (as well as of writing unit tests with marble diagrams).

## February 9
Saw a [Medium post](https://medium.com/javascript-in-plain-english/facebook-on-site-technical-interview-1264cacad263) with examples of technical interview questions in javascript given at Facebook interviews. Several days passed, and the post started requiring the reader to log in to read the text (that’s a dick move, Medium). I recovered the questions from that post (and related posts) through some googling, and thought I will copy them here. At least they won't be paywalled here.

### From Microsoft online interview

#### Question 1

Write a function `solution` that, given a string S of N lowercase English letters, returns a string with no instances of three identical consecutive letters, obtained from S by deleting the minimum possible number of letters.

Examples:
- Given S = `eedaaad` , the function should return `eedaad`. One occurrence of letter a is deleted.
- Given S = `xxxtxxx`, the function should return `xxtxx`. Note that letter x can occur more than three times in the returned string, if the occurrences are not consecutive.
- Given S = `uuuuxaaaaxuuu`, the function should return `uuxaaxuu`.
Write an efficient algorithm for the following assumptions:

- N is an integer within the range [1..200,000]
- string S consists only of lowercase letters (a-z)

#### Question 2
Write a function `solution` that, given an array A consisting of N integers, returns the maximum sum of two numbers whose digits add up to an equal sum. If there are no two numbers whose digits have an equal sum, the function should return -1.

Examples:

- Given A = [51, 71, 17, 42], the function should return 93. There are two pairs of numbers whose digits add up to an equal sum: (51, 42) and (17, 71). The first pair sums up to 93.
- Given A = [42, 33, 60], the function should return 102. The digits of all the numbers in A add up to the same sum, and choosing to add 42 and 60 gives the result 102.
- Given A = [51, 32, 43], the function should return -1, since all numbers in A have digits that add up to different, unique sums.

Write an efficient algorithm for the following assumptions:

- N is an integer within the range [1..200,000]
- each element of array A is an integer within the range [1..1,000,000,000]

#### Question 3
You are given a string S consisting of N letters ‘a’ and/or ‘b’. In one move, you can swap one letter for the other (‘a’ for ‘b’ or ‘b’ for ‘a’).

Write a function `solution` that, given such a string S, returns the minimum number of moves required to obtain a string containing no instances of three identical consecutive letters.

Examples:

- Given S = `baaaaa`, the function should return 1. The string without three identical consecutive letters which can be obtained in one move is `baabaa`.
- Give S = `baaabbaabbba`, the function should return 2. There are four valid strings obtainable in two moves: for example, `bbaabbaabbaa`.
- Given S = `baabab`, the function should return 0.

Write an efficient algorithm for the following assumptions:

- N is an integer within the range [0..200,000]
- string S consists only of the characters ‘a’ and/or ‘b’

### From Google’s online assessment for entry-level developers

#### Question 1

In a row of trees, the i-th tree produces fruit with type tree[i].

You start at any tree of your choice, then repeatedly perform the following steps:

1. Add one piece of fruit from this tree to your baskets. If you cannot, stop.
2. Move to the next tree to the right of the current tree. If there is no tree to the right, stop.
3. Note that you do not have any choice after the initial choice of starting tree: you must perform step 1, then step 2, then back to step 1, then step 2, and so on until you stop.

You have two baskets, and each basket can carry any quantity of fruit, but you want each basket to only carry one type of fruit each.

What is the total amount of fruit you can collect with this procedure?

Example 1:

```
Input: [1,2,1]
Output: 3
Explanation: We can collect [1,2,1].
```

Example 2:

```
Input: [0,1,2,2]
Output: 3
Explanation: We can collect [1,2,2].
If we started at the first tree, we would only collect [0, 1].
```

Example 3:

```
Input: [1,2,3,2,2]
Output: 4
Explanation: We can collect [2,3,2,2].
If we started at the first tree, we would only collect [1, 2].
```

Example 4:

```
Input: [3,3,3,1,2,1,1,2,3,3,4]
Output: 5
Explanation: We can collect [1,2,1,1,2].
If we started at the first tree or the eighth tree, we would only collect 4 fruits.
```

Note:

- 1 <= tree.length <= 40000
- 0 <= tree[i] < tree.length

#### Question 2
There is a special keyboard with all keys in a single row.

Given a string keyboard of length 26 indicating the layout of the keyboard (indexed from 0 to 25), initially your finger is at index 0. To type a character, you have to move your finger to the index of the desired character. The time taken to move your finger from index i to index j is |i - j|.

You want to type a string `word`. Write a function to calculate how much time it takes to type it with one finger.

Example 1:

```
Input: keyboard = "abcdefghijklmnopqrstuvwxyz", word = "cba"
Output: 4
Explanation: The index moves from 0 to 2 to write 'c' then to 1 to write 'b' then to 0 again to write 'a'.
Total time = 2 + 1 + 1 = 4.
```

Constraints:

- keyboard.length == 26
- keyboard contains each English lowercase letter exactly once in some order.
- 1 <= word.length <= 10^4
- word[i] is an English lowercase letter.

#### Question 3

You are given a license key represented as a string S which consists only alphanumeric character and dashes. The string is separated into N+1 groups by N dashes.

Given a number K, we would want to reformat the strings such that each group contains exactly K characters, except for the first group which could be shorter than K, but still must contain at least one character. Furthermore, there must be a dash inserted between two groups and all lowercase letters should be converted to uppercase.

Given a non-empty string S and a number K, format the string according to the rules described above.

Example 1:

```
Input: S = "9B2A-2c-9-y", K = 4
Output: "9B2A-2C9Y"
Explanation: The string S has been split into two parts, each part has 4 characters.
Note that the two extra dashes are not needed and can be removed.
```

Example 2:

```
Input: S = "2-7g-6-E", K = 2
Output: "2-7G-6E"
Explanation: The string S has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above.
```

Note:

- The length of string S will not exceed 12,000, and K is a positive integer.
- String S consists only of alphanumerical characters (a-z and/or A-Z and/or 0–9) and dashes(-).
- String S is non-empty.

### From on-site technical interview at Facebook

#### Easy

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

Example:

```
Given n = 5, and version = 4 is the first bad version.
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
```

#### Medium
1. Design a data structure that supports the following two operations:

```
void addWord(word)
bool search(word)
```

`search(word)` can search a literal word or a regular expression string containing only letters `a-z` or `.`. A `.` means it can represent any one letter.

Example:

```
addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
```

Note:
You may assume that all words are consist of lowercase letters a-z.

2. Given a 2d grid map of `1`s (land) and `0`s (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


Example 1:

```
Input:
11110
11010
11000
00000

Output: 1
```

Example 2:

```
Input:
11000
11000
00100
00011

Output: 3
```

#### Hard

Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

Note: The input string may contain letters other than the parentheses `(` and `)`.

Example 1:

```
Input: "()())()"
Output: ["()()()", "(())()"]
```

Example 2:

```
Input: "(a)())()"
Output: ["(a)()()", "(a())()"]
```

Example 3:

```
Input: ")("
Output: [""]
```

## February 8
HTTP 203 podcast praised public speaking style of Zach Holman, Simon Willison, and Mike Taylor. Should listen to their talks...

## February 7
A [gist](https://gist.github.com/nikcub/3833406) with examples of real php code at Facebook from around 2007.

## January 28
A [talk](https://www.youtube.com/watch?v=5EtnG85c-Zc) on RxJS subjects, by Michael Hladky and Jan-Niklas Wortmann, at ngSpain

## January 25
[Having your cake and eating it too](https://youtu.be/r-rWWseD6Vw) — a good intro talk by Sean Grove about GraphQL, ReasonML, and the combination of the two, demoing all the different goodness.

## January 23
[SWR](https://github.com/zeit/swr), Zeit's data fetcher for React, might be interesting. [React-Query](https://github.com/tannerlinsley/react-query), a library with a similar purpose, might be as well.

## January 16
Interesting talks from DotJS 2019:
- James Long: [CRDTs for mortals](https://www.dotconferences.com/2019/12/james-long-crdts-for-mortals)
