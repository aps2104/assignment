import {
  SET_POSTS,
  SET_CURRENT_POST,
  SET_SORT_BY,
  UPDATE_POST_IN_LIST,
  UPDATE_MODAL_POST,
  RESET_FORM
} from '../actions/types'


// Post reducer
const initialPostState = {
  list: {},
  sortBy: 'score',
  current: null,
  postModalState: {
    post: null
  }
}

export default function post(state = initialPostState, action) {
  switch(action.type){
    case SET_POSTS:
      const { postlist } = action
      return {
        ...state,
        list: postlist.reduce(function(result, current){
          result[current.id] = current
          return result
        }, {})
      }
    case SET_SORT_BY:
      const { sortBy } = action
      return {
        ...state,
        sortBy
      }
    case SET_CURRENT_POST:
      const { post } = action
      return {
        ...state,
        current: post
      }
    case UPDATE_POST_IN_LIST:
      const { updatedPost } = action
      return {
        ...state,
        list: {
          ...state.list,
          [updatedPost.id]: updatedPost
        }
      }
    
    case RESET_FORM:
      return {
        ...state,
        postModalState: { post: null}
      }
    case UPDATE_MODAL_POST:
      const { name, value } = action
      return {
        ...state,
        postModalState: {
          ...state.postModalState,
          post: {
            ...state.postModalState.post,
            [name]: value
          }}
      }
    default:
      return state;
  }
}
