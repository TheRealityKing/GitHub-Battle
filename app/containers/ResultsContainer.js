var React = require('react');
var githubHelpers = require('../utils/githubHelpers')
var Results = require('../components/Results');

var ResultsContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      scores: []
    }
  },
  componentDidMount: function() {
    githubHelpers.battle(this.props.location.state.playerInfo)
      .then(function(scores) {
        this.setState({
          scores: scores,
          isLoading: false
        })

      }.bind(this))
  },
  render: function() {
    return (
      <Results 
        isLoading={this.state.isLoading}
        playerInfo={this.props.location.state.playerInfo}
        scores={this.state.scores} />
    )
  }
});

module.exports = ResultsContainer;