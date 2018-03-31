import React from 'react';
import Source from './Source';
import Write from './Write';
import Suggestions from './Suggestions';

const title = 'Creator\'s Block';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      source: {example: 'ex'}
    }
  }

  render() {
    return (
      <div>
        <h2>{title}</h2>
        <Source />
        <Write />
        <Suggestions />
      </div>
    )
  }
} 

export default App;

