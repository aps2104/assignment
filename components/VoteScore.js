import React, { Component } from 'react'
import AngleUp from 'react-icons/lib/fa/angle-up'
import AngleDown from 'react-icons/lib/fa/angle-down'
import { connect } from 'react-redux'
import { updatePostVote } from '../actions/post'

class VoteScore extends Component {

  render() {
    // from parent
    const { vote, id, type, size } = this.props

    // from post & comment reducer
    const { updatePostVote } = this.props

    return (
      <div>
        <AngleUp className="clickable-icon" size={size}
          onClick={() =>updatePostVote(id, "upVote")}/>
        <br />{ vote }<br />
        <AngleDown className="clickable-icon" size={size}
          onClick={() => updatePostVote(id, "downVote")}/>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updatePostVote: (...data) => dispatch(updatePostVote(...data))
  }
}

export default connect(null, mapDispatchToProps)(VoteScore)
