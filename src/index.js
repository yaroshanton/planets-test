import React from 'react';
import ReactDOM from 'react-dom';
//components
import Sky from './components/Sky';
//styles
import './base.css';

const App = () => {
  return (
    <div className="wrapper">
      <Sky />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
