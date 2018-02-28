import React, { Component } from 'react'
import { connect } from 'react-redux'
import VoteScore from './VoteScore'
import { timestampToTime } from '../utils/format'
import './PostForm.css'

class PostListItem extends Component {

  render() {
    // from parent
    const { post } = this.props

    return (
      <tr>
        <td className="vote-score"><VoteScore id={post.id} vote={post.voteScore} size={25}/></td>
        <td>
          <blockquote className="blockquote">
            <cite className='text-muted'>Replied by {post.author} {timestampToTime(post.timestamp)}</cite>
            <p className="mb-0">{post.title}</p>
          </blockquote>
        </td>
      </tr>
    )
  }
}

export default PostListItem;
