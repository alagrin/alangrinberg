import React, { Component } from "react";

import ReactTypingEffect from "react-typing-effect";

class IntroView extends Component {
  render() {
    return (
      <ReactTypingEffect
        className="typingeffect"
        text={[`Hi and welcome to Alan's Portfolio Site!`]}
        speed={100}
        eraseDelay={700}
      />
    );
  }
}

export default IntroView;
