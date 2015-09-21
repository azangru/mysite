---
title: Creating classes in React
date: 2015-09-02 01:45 UTC
tags:
published: false
---

```javascript
class HelloWorld extends React.Component {
  render() {
    return <p className="helloworld" onClick={this.props.onClick}>Hello, {this.props.addressee}!</p>;
  }
}
```
