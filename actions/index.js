
import * as actionType from './ActionType';

export const downVote = (id) => ({
  type: actionType.DOWNVOTE,
  id: id
});

export const upVote = (id) => ({
  type: actionType.UPVOTE,
  id: id
});