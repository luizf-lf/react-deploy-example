import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This app is an example on how to deploy a React App to GitHub Pages.
        </p>
        <p>
          Please refer to the{' '}
          <a
            className="App-link"
            href="https://github.com/luizf-lf/react-deploy-example"
            target="_blank"
            rel="noopener noreferrer"
          >
            repository
          </a>{' '}
          readme if you want to learn how to do it.
        </p>
      </header>
    </div>
  );
}

export default App;
