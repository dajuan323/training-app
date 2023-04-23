import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";
import React from "react";
const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

function ReactionButtons({ post }) {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    const addReaction = () => {
      dispatch(reactionAdded({ postId: post.id, reaction: name }));
    };
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={addReaction}
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
}

export default ReactionButtons;
