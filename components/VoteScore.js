import React, { Component } from 'react'
import AngleUp from 'react-icons/lib/md/arrow-drop-up'
import AngleDown from 'react-icons/lib/md/arrow-drop-down'
import { connect } from 'react-redux'
import { updatePostVote } from '../actions/post'
import './PostForm.css'
class VoteScore extends Component {

  render() {
    // from parent
    const { vote, id, type, size } = this.props

    // from post & comment reducer
    const { updatePostVote } = this.props

    return (
      <div>
        <div className="clickable-icon arrow-up" size={size}
          onClick={() =>updatePostVote(id, "upVote")}/>
        <div style={{textAlign:'center', width:'23px', margin:'8px 0px'}}>{ vote }</div>
        <div className="clickable-icon arrow-down" size={size}
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
