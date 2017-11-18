import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>The componnent</h1>
        <div>
          <h2>Hey {this.props.name}</h2>
          <ul>
            { [1,2,3].map(e => <li key={e} >map elements {e * 2}</li>) };
          </ul>
        </div>
      </div>
    );
  }
}
