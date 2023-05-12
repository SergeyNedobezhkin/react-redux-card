import React from "react";
import { useState, useEffect } from "react";
import { commentCreate, commentLoad } from "./redux/actions";
import uniqid from "uniqid"; // ииспользую для генерации id
import { useDispatch, useSelector } from "react-redux";
import SingleComment from "./SingleComment";

function Comments(props) {
  const [textComment, setTextComment] = useState("");
  const comments = useSelector((state) => {
    console.log("redux state >>> ", state);
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };
  const handleSabmit = (e) => {
    e.preventDefault();
    const id = uniqid(); // использую для генерации id, подключена в package.json
    dispatch(commentCreate(textComment, id));
  };

  useEffect(() => {
    dispatch(commentLoad());
  }, []);

  return (
    <div className="card-comments">
      <form onSubmit={handleSabmit} className="comments-item-create">
        <input type="text" value={textComment} onChange={handleInput} />
        <input type="submit" hidden />
      </form>
      {!!comments.length &&
        comments.map((item) => {
          return <SingleComment key={item.id} data={item} />;
        })}
    </div>
  );
}

export default Comments;
