In this kata you will build a component to time a run and display the stats of the last few runs. 

Goal of this kata: Learn about React Lifecycle methods `componentWillMount`, `componentDidMount`, `componentWillUnmount`:  https://reactjs.org/docs/react-component.html

Tasks
 - in the `componentDidMount` method you initialize a timer. Store the timer's id in the components state
 - the async `componentDidMount` should fetch the latest stats from '/timed-stats.json' and store them in the component's state as `timed-stats` (as this is about lifecycle methods, no need to display the result right now - of course you can if you want to :) )
 - in componentWillUnmount call `clearInterval` with the timer's id to cancel the timer. This is to make sure any resources are cleaned up
 - render the current count of the timer