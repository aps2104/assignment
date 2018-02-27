import React, { Component } from 'react'
import { connect } from 'react-redux'
import VoteScore from './VoteScore'
import { timestampToDate } from '../utils/format'

class PostListItem extends Component {

  render() {
    // from parent
    const { post } = this.props

    return (
      <tr>
        <td className="vote-score"><VoteScore id={post.id} vote={post.voteScore} size={23}/></td>
        <td><br />{post.title}</td>
        <td><br />{post.author}</td>
        <td><br />{timestampToDate(post.timestamp)}</td>
      </tr>
    )
  }
}

export default PostListItem;
