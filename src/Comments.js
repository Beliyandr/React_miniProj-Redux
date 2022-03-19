import React from "react";
import { useState, useEffect } from "react";
import { commentCreate, commentsLoad } from "./redux/actions";

import uniqid from "uniqid";

import { useDispatch, useSelector } from "react-redux";

import SingleComment from "./SingleComment";

const Comments = (props) => {
  const [textComment, setTextComment] = useState("");

  const dispatch = useDispatch();
  const comments = useSelector((state) => {
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });

  useEffect(() => {
    dispatch(commentsLoad());
  }, []);

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const id = uniqid();
    dispatch(commentCreate(textComment, id));
    setTextComment("");
  };

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input type="text" value={textComment} onChange={handleInput} />
        <input type="submit" hidden />
      </form>
      {!!comments.length &&
        comments.map((res) => {
          return <SingleComment key={res.id} data={res} />;
        })}
    </div>
  );
};

export default Comments;
