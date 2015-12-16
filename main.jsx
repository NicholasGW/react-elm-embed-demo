import React from 'react';
import Dom from 'react-dom';

import ElmTagInput from './elmEmbed.jsx'
const App = React.createClass({
  render () {
    return (
      <div> Test
      <ElmTagInput />
      </div>
    )
  }
});

Dom.render(React.createElement(App, {}), document.getElementById("container"));

export default App;
