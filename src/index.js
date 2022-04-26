import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.js';
// const rootElement = document.getElementById('root');
// class Main extends React.Component {
//   render() {
//     return <App />;
//   }
// }
// ReactDOM.render(<Main />, rootElement);

const root = ReactDOM
  .createRoot(document.getElementById('root'))
  
  root.render(
    <React.StrictMode>
      <App />

    </React.StrictMode>
  )