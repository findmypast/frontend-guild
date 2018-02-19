Learn about how to make a React JS higher-order component (HOC).

A HOC is a _function_ that takes a _component_ as the first parameter and returns a _function_ wrapping the first parameter.

```javascript
function withExample(Component) {
  return function(props) {
    return <Component />;
  };
}
```

Not sure what it's all about see my post about it: [Understanding higher-order component](http://www.richardkotze.com/coding/understanding-higher-order-components) and [ReactJS docs](https://reactjs.org/docs/higher-order-components.html).

## Your challenge:

Truncate a paragraph of text for elements that contain `props.children` of type `String`

* Create a HOC
* Should read `props.children` and truncate to the specified length
* A `textLength` prop will be passed in to specify where to cut the text to
* Default `textLength` is 10
* If `textLength` is -1 then render `props.children` as is without truncating.
* Should be able to pass additional props through
* HOC should have correctly formatted displayName `WithTruncateParagraph(ComponentName)` _as shown in React docs_

Enjoy :)
