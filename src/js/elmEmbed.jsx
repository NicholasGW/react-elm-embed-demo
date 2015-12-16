import React from 'react';

const ElmEmbed = React.createClass({

  componentDidMount: function() {
    Elm.embed(Elm[this.props.elmModuleName], document.getElementById("elmContainer"));
  },

  render () {
    return (
      <div id="elmContainer"></div>
    )
  }
})

export default ElmEmbed;
