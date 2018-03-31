import React from 'react';
import Source from './Source';
import Write from './Write';
import Suggestions from './Suggestions';

const title = 'Creator\'s Block';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      source: {}
    }
  }

  setSourceText(text) {
    // output: object with 
      //each word as a prop
      //and an array of next words
      //and a count
      //and a prop of the most common word

    const source = {};
    const words = text.split(' ');
    
    words.forEach((word, index) => {
      word = word.toLowerCase();
      if (word[word.length -1 ] === '.' || 
          word[word.length -1 ] === ';' ||
          word[word.length -1 ] === ',') {
            word = word.slice(0, word.length - 1);
          }
      if (!source[word]) {
        source[word] = {count: 1, next: [words[index + 1]]};
      } else {
        source[word].count += 1;
        source[word].next.push(words[index + 1]);
      }
    });

    this.setState({
      source: source
    });
  }


  render() {
    return (
      <div>
        <h2>{title}</h2>
        <Source setSourceText={this.setSourceText.bind(this)}/>
        <Write />
        <Suggestions />
      </div>
    )
  }
} 

export default App;

