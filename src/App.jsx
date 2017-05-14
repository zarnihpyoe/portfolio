import React, { Component } from 'react';
import Social from './components/Social'
import './App.css';



class App extends Component {
  render() {
    return (
      <div>
        <div className="About">
          <div className="About--content">
            <p>
              I'm Zarni Hpyoe, a software engineer. I love to contribute to OSS projects.<br/>
              I'm originally from Burma, but now I live in US.<br/>
              I'm known for my unconditional love for tea.<br/>
            <span className="email"><a href="mailto:zarnihpyoe@gmail.com">Say hello</a></span>, or check out one of below.<br/>
            </p>
            <Social
              name="zarnihpyoe"
              sites={['github', 'twitter', 'medium', 'linkedin']}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
