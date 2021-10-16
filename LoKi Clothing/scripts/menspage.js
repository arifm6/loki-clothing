import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>MENS FOOTER BANNER HERE!</h1>;
  }
}

// component goes here:
ReactDOM.render(<MyComponentClass/>, document.getElementById('app'));

//I should add react for my main page for reusable components too