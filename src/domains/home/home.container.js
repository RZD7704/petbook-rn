import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
  selectError,
  selectMessage,
} from '../../store/userReducers/userReducer.selector';
import {setMessage} from '../../store/userReducers/userReducer.slice';
import {userLogin} from '../../store/userReducers/userReducer.thunk';

import HomeView from './home.view';

// import * as S from './home.styled';

export default function HomeContainer() {
  const error = useSelector(selectError);
  const message = useSelector(selectMessage);
  const dispatch = useDispatch();

  const handlerGoLogin = async () => {
    console.log('click');
    dispatch(userLogin());
  };

  return (
    <HomeView error={error} message={message} handlerGoLogin={handlerGoLogin} />
  );
}
