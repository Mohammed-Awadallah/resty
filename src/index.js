import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
const rootElement = document.getElementById('root');
class Main extends React.Component {
  render() {
    return <App />;
  }
}
ReactDOM.render(<Main />, rootElement);