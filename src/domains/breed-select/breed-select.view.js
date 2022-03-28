import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {selectPetBreed} from '../../store/userReducers/userReducer.selector';
import {setPetBreed} from '../../store/userReducers/userReducer.slice';

import {Search, RadioButton} from '@components';

import * as S from './breed-select.styled';

const arr = [
  'Border terrier',
  'Afghan hound',
  'English setter',
  'Greyhound',
  'Doberman',
  'English mastiff',
  'Dachshund',
  'Schnauzer',
  'Scottish terrier',
  'Gordon setter',
];

const data = [
  {value: 'Border terrier'},
  {value: 'Afghan hound'},
  {value: 'English setter'},
  {value: 'Greyhound'},
  {value: 'Doberman'},
  {value: 'English mastiff'},
  {value: 'Dachshund'},
  {value: 'Schnauzer'},
  {value: 'Scottish terrier'},
  {value: 'Gordon setter'},
];

export default function BreedSelectView({
  search,
  setSearch,
  option,
  setOption,
  onSubmitEditing,
  onDone,
}) {
  return (
    <S.Container>
      <Search
        value={search}
        placeholder={'Search'}
        onChangeText={setSearch}
        onSubmitEditing={onSubmitEditing}
      />
      <RadioButton data={data} onSelect={value => setOption(value)} />
      <S.BtnBox>
        <S.Action
          onPress={onDone}
          disabled={option ? false : true}
          last
          title="Done"
        />
      </S.BtnBox>
    </S.Container>
  );
}
