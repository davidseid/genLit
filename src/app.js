import React from 'react';
import Source from './Source';
import Write from './Write';
import Suggestions from './Suggestions';

const title = 'Creator\'s Block';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      source: {},
      currentWord: '',
      suggestedWords: []
    }
  }

  setSourceText(text) {
    const source = {};
    const words = text.split(' ');
    let mostFrequentWordCount = 0;
    
    words.forEach((word, index) => {
      word = word.toLowerCase();
      if (word[word.length -1 ] === '.' || 
          word[word.length -1 ] === ';' ||
          word[word.length -1 ] === ',') {
            word = word.slice(0, word.length - 1);
          }
      if (!source[word]) {
        source[word] = {count: 1, next: [words[index + 1]]};
        mostFrequentWordCount = 1;
      } else {
        source[word].count += 1;
        if (source[word].count > mostFrequentWordCount) {
          source['mostFrequentWord'] = word;
        }
        source[word].next.push(words[index + 1]);
      }
    });

    this.setState({
      source: source
    });
  }

  getCurrentWord(text) {
    const words = text.split(' ');

    let currentWord = words[words.length - 1].toLowerCase() || ' ';
    if (currentWord === '') {
      currentWord = words[words.length - 2].toLowerCase() || ' ';
    }

    this.suggestWords(currentWord);
    
    this.setState({
      currentWord: currentWord
    });
  }

  suggestWords(currentWord) {
    let words = [];
    if (this.state.source[currentWord]) {
      words = this.state.source[currentWord].next;
    } else {
      words.push(this.state.source.mostFrequentWord);
    }

    this.setState({
      suggestedWords: words
    })
  }

  render() {
    return (
      <div>
        <h2>{title}</h2>
        <Source setSourceText={this.setSourceText.bind(this)} />
        <Write getCurrentWord={this.getCurrentWord.bind(this)} />
        <Suggestions suggestedWords={this.state.suggestedWords} />
      </div>
    )
  }
} 

export default App;

