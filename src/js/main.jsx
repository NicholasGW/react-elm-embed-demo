import React from 'react';
import Dom from 'react-dom';

import ElmEmbed from './elmEmbed.jsx'
import TagInput from './TagInput.jsx'
const App = React.createClass({
  render () {
    return (
      <div> Test
      <ElmEmbed elmModuleName="TagInput"/>
      <hr />
      <TagInput />
      </div>
    )
  }
});

Dom.render(React.createElement(App, {}), document.getElementById("container"));

export default App;
