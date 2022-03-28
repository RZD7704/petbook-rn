import userSlice from './userReducer.slice';

const {name: userName, reducer: userReducer} = userSlice;

export {userName, userReducer};
