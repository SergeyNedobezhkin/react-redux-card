import { connect } from "react-redux";
import { incrementLikes, decrementLikes } from "./redux/actions";

function Likes(props) {
  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLikes}>♥ {props.likes}</button>
      <button onClick={props.onDecrementLikes}>Dislike</button>
    </div>
  );
}
// функция устанавливающая состояние из redux
function mapStateToProps(state) {
  const { likesReducer } = state;
  return {
    likes: likesReducer.likes,
  };
}
// функция изменяющая состояние в redux хранилище
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
// импортируемый из react-redux компонент connect, связывает компонент Likes с Redux
export default connect(mapStateToProps, mapDispatchToProps)(Likes);
