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

      if (index < words.length - 1) {
        let nextWord = words[index + 1];
        if (nextWord) {
          nextWord = nextWord.toLowerCase();
        }
        if (word[word.length - 1] === '.' || 
            word[word.length - 1] === ';' ||
            word[word.length - 1] === ',') {
              word = word.slice(0, word.length - 1);
            }
        if (nextWord[word.length - 1] === '.' || 
            nextWord[word.length - 1] === ';' ||
            nextWord[word.length - 1] === ',') {
              nextWord = nextWord.slice(0, word.length - 1);
            }
        if (!source[word]) {
          // source[word] = {count: 1, next: [words[index + 1]]};
          let nextWords = {};
          nextWords[nextWord] = 1;
          source[word] = {count: 1, nextWords: nextWords};
          mostFrequentWordCount = 1;
        } else {
          source[word].count += 1;
          if (source[word].count > mostFrequentWordCount) {
            mostFrequentWordCount = source[word].count;
            source['mostFrequentWord'] = word;
          }
          // source[word].nextWords.push(words[index + 1]);
          if (source[word].nextWords[nextWord]) {
            source[word].nextWords[nextWord] += 1;
          } else {
            source[word].nextWords[nextWord] = 1;
          }
        }
      }
    });

    this.setState({
      source: source
    });
  }

  getCurrentWord(text) {
    const words = text.split(' ');

    let currentWord = words[words.length - 1].toLowerCase() || '';
    if (currentWord === '') {
      currentWord = words[words.length - 2].toLowerCase() || '';
    }

    this.suggestWords(currentWord);
    
    this.setState({
      currentWord: currentWord
    });
  }

  suggestWords(currentWord) {
    let words = [];

    if (this.state.source[currentWord]) {
      console.log('word in my source')
      for (var key in this.state.source[currentWord].nextWords) {
        words.push(key);
      }
    }

    if (words.length === 0) {
      words.push(this.state.source.mostFrequentWord);
    }

    if (words.length > 10) {
      let randomizedWords = [];
      for (let i = 0; i < 5; i++) {
        randomizedWords.push(words[Math.floor(Math.random() * words.length - 1)]);
      }
      words = randomizedWords;
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

