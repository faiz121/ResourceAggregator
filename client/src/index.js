import React from 'react';
import ReactDOM from 'react-dom';
import AppHandler from './components/Hello';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
        <div>
          <h1>Hello World</h1>
          <input type="text" value="url" />
          <AppHandler />
        </div>
    )
  }
}


ReactDOM.render(
    <App /> , document.getElementById('app')
);