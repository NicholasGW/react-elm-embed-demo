import React from 'react';
import Dom from 'react-dom';

import ElmEmbed from './elmEmbed.jsx'
import TagInput from './TagInput.jsx'
const App = React.createClass({

  getInitialState: function() {
    return {
      elmTagInput:null
    };
  },

  callback(elmTagInput) {
    this.setState({elmTagInput});
  },

  render () {
    return (
      <div> Test
      <ElmEmbed callback={this.callback} elmModuleName="TagInput"/>
      <hr />
      <TagInput elmTagInput={this.state.elmTagInput}/>
      </div>
    )
  }
});

Dom.render(React.createElement(App, {}), document.getElementById("container"));

export default App;
