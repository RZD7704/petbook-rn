import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {setPetBreed} from '../../store/userReducers/userReducer.slice';

import BreedSelectView from './breed-select.view';

export default function BreedSelectContainer({navigation}) {
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [option, setOption] = useState(null);

  const onSubmitEditing = () => {
    console.log('onSubmitEditing >>> search:', search);
  };
  const onDone = () => {
    dispatch(setPetBreed(option));
    navigation.pop();
  };

  return (
    <BreedSelectView
      search={search}
      setSearch={setSearch}
      option={option}
      setOption={setOption}
      onSubmitEditing={onSubmitEditing}
      onDone={onDone}
    />
  );
}
