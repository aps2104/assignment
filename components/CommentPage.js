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
    <div>
      <h4>Comment Section</h4>
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
