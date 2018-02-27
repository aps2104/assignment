import { defaultData } from '../utils/config'
import uuidv1 from 'uuid/v1'
import _ from 'lodash';

import {
  SET_POSTS,
  SET_CURRENT_POST,
  SET_SORT_BY,
  UPDATE_POST_IN_LIST,
  UPDATE_MODAL_POST,
  RESET_FORM
} from './types'

function setCurrentPost({ post }) {
  return {
    type: SET_CURRENT_POST,
    post
  }
}
export function setSortBy({ sortBy }) {
  return {
    type: SET_SORT_BY,
    sortBy
  }
}
function updatePostInList({ updatedPost }) {
  return {
    type: UPDATE_POST_IN_LIST,
    updatedPost
  }
}
function setPosts({ postlist }) {
  return {
    type: SET_POSTS,
    postlist
  }
}
function resetForm() {
  return {
    type: RESET_FORM
  }
}


export function updatePostVote(id, option) {
  return function (dispatch) {
       let data =  _.filter(defaultData, (data)=> {
           return data.id === id;
        })
        let post = data[0]
        switch(option) {
          case "upVote":
              post.voteScore = post.voteScore + 1
              break
          case "downVote":
              post.voteScore = post.voteScore - 1
              break
          default:
              console.log(`posts.vote received incorrect parameter: ${option}`)
      }
        dispatch(updatePostInList({'updatedPost': post}))
        // update currentPost
        dispatch(setCurrentPost({'post': post}))
  }


}
export function fetchPosts() {
  // Thunk middleware pass dispatch.

  return function (dispatch) {
        dispatch(setPosts({postlist:defaultData}));
    }
}

export function updateModalPost({ name, value }){
  return {
    type: UPDATE_MODAL_POST,
    name,
    value
  }
}

export function addPost(post){
  return function(dispatch){
    let id = uuidv1();
    let data = {
      id: id,
      timestamp: Date.now(),
      title: post.body,
      author: post.author,
      phone: post.phonenumber,
      email: post.email,
      voteScore: 0
    }
 
  defaultData.push(data);
  dispatch(updatePostInList({'updatedPost': data}))
  dispatch(resetForm())
}

}
