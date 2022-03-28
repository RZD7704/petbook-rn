import {createSelector} from 'reselect';

const userSelector = store => store.user;

export const selectData = createSelector(userSelector, ({data}) => data);
export const selectError = createSelector(userSelector, ({error}) => error);
export const selectMessage = createSelector(
  userSelector,
  ({message}) => message,
);

export const selectPetBreed = createSelector(
  userSelector,
  ({petBreed}) => petBreed,
);
