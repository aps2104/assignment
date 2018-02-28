import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostList from './PostList'
import PostForm from './PostForm'
import { fetchPosts } from '../actions/post'

class CommentPage extends Component {

  componentDidMount(){
    // from post & category reducer
    const { fetchPosts } = this.props;
    fetchPosts()
  }

  render() {
    return (
    <div className='comments-section'>
      <h4>What is the most interesting fact that you know ?</h4>
      <h6>What is the most interesting fact that you know ? What is the most interesting fact that you know ?
      What is the most interesting fact that you know ? What is the most interesting fact that you know ?  </h6>
      <PostList />
      <PostForm />
    </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(null, mapDispatchToProps)(CommentPage)
