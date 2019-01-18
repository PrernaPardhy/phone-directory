import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {/* <div className="header">
          phone directory
        </div>
        <button>Add</button><br />
        <span>Name</span><br />
        <span>Phone</span> */}
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" placeholder="Type Here" defaultValue="Prerna"/>
      </div>
    );
  }
}

export default App;
