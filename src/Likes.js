import { connect } from "react-redux";

function Likes(props) {
  console.log(props);
  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLikes}>♥ {props.likes}</button>
      <button onClick={props.onDecrementLikes}>Dislike</button>
    </div>
  );
}
// функция устанавливающая состояние
function mapStateToProps(state) {
  console.log("mapStateToProps > ", state);
  const { likesReducer } = state;
  return {
    likes: likesReducer.likes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // функция прибавляющая лайки
    onIncrementLikes: () => {
      console.log("click");
      const action = { type: "INCREMENT" };
      dispatch(action);
    },
    onDecrementLikes: () => {
      console.log("click");
      // функция убавляющая лайки
      const action = { type: "DECREMENT" };
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
