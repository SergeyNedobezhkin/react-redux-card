import { connect } from "react-redux";
import { incrementLikes, decrementLikes } from "./redux/actions";

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
      return dispatch(incrementLikes());
    },
    onDecrementLikes: () => {
      // функция убавляющая лайки
      return dispatch(decrementLikes());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
