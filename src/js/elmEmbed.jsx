import React from 'react';

const ElmEmbed = React.createClass({

  componentDidMount: function() {
    let elmTagInput = Elm.embed(Elm[this.props.elmModuleName], document.getElementById("elmContainer"), { tagFromReact: ""});
    this.props.callback(elmTagInput);
  },

  render () {
    return (
      <div id="elmContainer"></div>
    )
  }
})

export default ElmEmbed;
