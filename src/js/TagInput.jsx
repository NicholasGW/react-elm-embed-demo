import React, { PropTypes } from 'react'

const TagInput = React.createClass({

  getInitialState: function() {
    return {
      text: '',
      tags: []
    };
  },

  componentWillReceiveProps(nextProps) {
    if (!this.props.elmTagInput) {
      if(nextProps.elmTagInput) {
        nextProps.elmTagInput.ports.elmTags.subscribe(this.onElmTag);
      }
    }
  },

  onElmTag(tag) {
    let tags = this.state.tags.concat([tag.text]);
    this.setState({tags})
  },

  onEditText(e) {
    this.setState({text: e.target.value});
  },

  onEnter(e) {
    if (e.key === "Enter") {
      let tags = this.state.tags.concat([e.target.value]);
      this.setState({text: '', tags});
      if (this.props.elmTagInput) {
        this.props.elmTagInput.ports.tagFromReact.send(e.target.value);
      }
    }
  },

  tagsAsHtml(tags) {
    return tags.map( (tag) => <div>{tag}</div>);
  },

  render () {
    return (
      <div>
        <h1> React! </h1>
        <input value={this.state.text} onChange={this.onEditText} onKeyDown={this.onEnter}></input>
        {this.tagsAsHtml(this.state.tags)}
      </div>
    )
  }
})

export default TagInput
