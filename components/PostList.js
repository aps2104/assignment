import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap';
import AddIcon from 'react-icons/lib/md/add'

import PostListItem from './PostListItem'
import { openPostModal, setSortBy, fetchPosts } from '../actions/post'
import { sortByScore, sortByTimestamp } from '../utils/sort'

class PostList extends Component {
  componentDidMount(){
    const { postlist, fetchPosts } = this.props
    // if postlist not initialized in store, do it here
    {postlist.length === 0
      && fetchPosts()
    }
  }
  render() {
    // from category reducer
    const { currentCategory } = this.props

    // from post reducer
    const { postlist, openPostModal, setSortBy, sortBy } = this.props

    return (
      <div className="post-list">
        {postlist.length === 0
          ? <div>no data to display</div>
          : <Table striped condensed hover>
              <tbody>
                {postlist.map((post) => (
                  <PostListItem post={post} key={post.id}/>
                ))}
              </tbody>
            </Table>
        }
      </div>
    )
  }
}

function mapStateToProps ({post}) {

  return {
    postlist: Object.keys(post.list).map((k) => post.list[k])
      .sort(
        post.sortBy === "score"
        ? sortByScore
        : sortByTimestamp
      ).reverse(),
    sortBy: post.sortBy
  }
}

function mapDispatchToProps (dispatch) {
  return {
    openPostModal: (data) => dispatch(openPostModal(data)),
    setSortBy: (data) => dispatch(setSortBy(data)),
    fetchPosts: (data) => dispatch(fetchPosts(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
