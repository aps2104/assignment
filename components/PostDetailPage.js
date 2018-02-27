import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentList from './CommentList'
import VoteScore from './VoteScore'
import { fetchPost } from '../actions/post'

class PostDetailPage extends Component {
  componentDidMount(){
    // from url
    const { id } = this.props.match.params
    // from post reducer
    const { fetchPost } = this.props

    fetchPost(id)
  }

  render() {
    // from post reducer
    const { currentPost } = this.props

    return (
      <div>
        {currentPost
          ? <div className="page-one-column">
              <div className="vote-score-large">
                <VoteScore type="post" id={currentPost.id} vote={currentPost.voteScore}
                className="post-detail-left" size={30} />
                <EditIcon className="clickable-icon lightgray" size={21} onClick={() => openPostModal({ option: 'edit', post: currentPost })}/><br />
                <DeleteIcon className="clickable-icon lightgray" size={21} onClick={() => openPostModal({ option: 'delete', post: currentPost })}/>
               
              </div>
              <div className="post-detail-right">
                <h3>
                  {currentPost.title}<br />
                  <small>by {currentPost.author} - </small>
                  <small>category: {currentPost.category}</small>
                </h3>
                <p>{currentPost.body}</p>
                <hr />
                <CommentList parentId={currentPost.id} />
              </div>
            </div>
          : <Page404 />
        }
      </div>
    )
  }
}

function mapStateToProps ({post}) {
  return {
    currentPost: post.current
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPost: (data) => dispatch(fetchPost(data)),
    openPostModal: (...data) => dispatch(openPostModal(...data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailPage)
