import React, {useState} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectPetBreed} from '../../store/userReducers/userReducer.selector';

import {Hr, Input, Switch, ScrollSelect, Modal, Tab} from '@components';

import Page, {PageHeader} from '@components/page';

import SmallBtn from './components/small-button/small-button.container';
import Tabs from './components/tabs/tabs.container';
import AddPhotoImage from './images/photo-adding.png';

import {ucFirst} from '@helpers';
import {height1, height2, height3, day, month, year} from './helper';

import * as S from './user-setting.styled';

export default function UserSettingView({handlerPolicy}) {
  const petBreed = useSelector(selectPetBreed);

  const [petName, setPetName] = useState('');
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [characterModalVisible, setCharacterModalVisible] = useState(false);
  const [sex, setSex] = useState('male');
  const [neutered, setNeutered] = useState(true);
  const [microchipped, setMicrochipped] = useState(false);
  const [activeItem1, setActiveItem1] = useState(1);
  const [petView, setPetView] = useState('');
  const [petCharacter, setPetCharacter] = useState('');

  return (
    <Page
      HeaderComponent={
        <PageHeader
          title="Become acquainted ?"
          description="Fill in your pet information"
        />
      }>
      <S.TopLine>
        <Hr />
      </S.TopLine>

      <S.AddPhotoContainer>
        <S.Title style={{marginTop: 30}}>Pet photo</S.Title>
        <View>
          <S.AddPhotoBtn>
            <S.AddPhotoImage source={AddPhotoImage} resizeMode="cover" />
          </S.AddPhotoBtn>
        </View>
      </S.AddPhotoContainer>

      <S.ColumnWgt>
        <S.Title>Pet's name?</S.Title>
        <S.InputBox>
          <Input onChange={setPetName} value={petName} placeholder={'Name'} />
        </S.InputBox>
      </S.ColumnWgt>

      <S.ColumnWgt>
        <S.RowWgt mt0>
          <S.Title>View</S.Title>
          <SmallBtn onClick={() => setViewModalVisible(true)} />
          <Modal
            title={'Select pet view'}
            visible={viewModalVisible}
            disabledBtn={petView === '' ? true : false}
            setVisible={setViewModalVisible}>
            <Tab
              style={{marginBottom: 7}}
              value={petView}
              name={'dog'}
              onSet={setPetView}
              fontFamily={'Montserrat'}
            />
            <Tab
              style={{marginBottom: 7}}
              value={petView}
              name={'cat'}
              onSet={setPetView}
              fontFamily={'Montserrat'}
            />
            <Tab
              value={petView}
              name={'exotic pet'}
              onSet={setPetView}
              fontFamily={'Montserrat'}
            />
          </Modal>
        </S.RowWgt>
        {!!petView && (
          <S.InputBox>
            <Input
              onChange={setPetView}
              value={ucFirst(petView)}
              placeholder={'Name'}
              disable={true}
            />
          </S.InputBox>
        )}
      </S.ColumnWgt>

      <S.ColumnWgt>
        <S.RowWgt mt0>
          <S.Title>Breed</S.Title>
          <SmallBtn onClick={handlerPolicy} />
        </S.RowWgt>
        {!!petBreed && (
          <S.InputBox>
            <Input value={ucFirst(petBreed)} placeholder={''} disable={true} />
          </S.InputBox>
        )}
      </S.ColumnWgt>

      <S.ColumnWgt>
        <S.RowWgt mt0>
          <S.Title>Character</S.Title>
          <SmallBtn onClick={() => setCharacterModalVisible(true)} />
          <Modal
            title={'Select pet view'}
            visible={characterModalVisible}
            disabledBtn={petCharacter === '' ? true : false}
            setVisible={setCharacterModalVisible}>
            <Tab
              style={{marginBottom: 7}}
              value={petCharacter}
              name={'Calm'}
              onSet={setPetCharacter}
              fontFamily={'Montserrat'}
            />
            <Tab
              style={{marginBottom: 7}}
              value={petCharacter}
              name={'Neutral'}
              onSet={setPetCharacter}
              fontFamily={'Montserrat'}
            />
            <Tab
              value={petCharacter}
              name={'Aggressive'}
              onSet={setPetCharacter}
              fontFamily={'Montserrat'}
            />
          </Modal>
        </S.RowWgt>
        {petCharacter !== '' && (
          <S.InputBox>
            <Input
              onChange={setPetCharacter}
              value={ucFirst(petCharacter)}
              placeholder={'Name'}
              disable={true}
            />
          </S.InputBox>
        )}
      </S.ColumnWgt>

      <S.ColumnWgt>
        <S.Title>Sex</S.Title>
        <Tabs sex={sex} setSex={setSex} />
      </S.ColumnWgt>

      <S.RowWgt>
        <S.Title>Neutered</S.Title>
        <View>
          <Switch value={neutered} setValue={setNeutered} />
        </View>
      </S.RowWgt>

      <S.RowWgt>
        <S.Title>Microchipped</S.Title>
        <View>
          <Switch value={microchipped} setValue={setMicrochipped} />
        </View>
      </S.RowWgt>

      <S.ColumnWgt>
        <S.Title>Height / Mass</S.Title>
        <S.ScrollSelectBox>
          <ScrollSelect
            value1={height1}
            setActiveItem1={setActiveItem1}
            value2={height2}
            setActiveItem2={setActiveItem1}
            initialItem2={2}
            value3={height3}
            setActiveItem3={setActiveItem1}
          />
        </S.ScrollSelectBox>
      </S.ColumnWgt>

      <S.ColumnWgt>
        <S.Title>Date of birth</S.Title>
        <S.ScrollSelectBox>
          <ScrollSelect
            value1={day}
            setActiveItem1={setActiveItem1}
            value2={month}
            initialItem2={2}
            setActiveItem2={setActiveItem1}
            value3={year}
            setActiveItem3={setActiveItem1}
          />
        </S.ScrollSelectBox>
      </S.ColumnWgt>

      <S.BottomLine>
        <Hr />
      </S.BottomLine>

      <S.BtnBox>
        <S.Action last title="Add pet" />
      </S.BtnBox>
    </Page>
  );
}
