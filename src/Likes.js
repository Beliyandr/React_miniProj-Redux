import React from "react";

import { connect } from "react-redux";
import { incrementLikes, decrementLikes } from "./redux/actions";

const Likes = (props) => {
  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLikes}>♥ {props.likes}</button>
      <button onClick={props.onDecrementLikes}>Dislike</button>
    </div>
  );
};

function mapStateToProps(state) {
  const { likesReducer } = state;
  return {
    likes: likesReducer.likes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementLikes: () => {
      return dispatch(incrementLikes());
    },

    onDecrementLikes: () => {
      return dispatch(decrementLikes());
    },
  };
}

//! Подсоединение к REDUX - специальной функицей connect (- которая в свою очередь является HOK (функцией высшего порядка)) , внутрь мы передаем специальные функции :
//! - mapStateToProps - чтобы пробросить состояние из нашего хранилища REDUX в нужную компоненту (Likes),
//! - mapDispatchToProps - чтобы пробросить методы для изменения нашего состояния

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
