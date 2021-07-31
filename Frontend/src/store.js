import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import otaSlice from './Reducers/OtaReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import pvaSlice from './Reducers/PvaReducer';
import uwaSlice from './Reducers/UwaReducer';

const reducers = {
    OtaStates: otaSlice.reducer,
    PvaStates: pvaSlice.reducer,
    UwaStates: uwaSlice.reducer
}
const middleware = [thunk]
const store = configureStore({ reducer: reducers }, composeWithDevTools(applyMiddleware(...middleware)));

export default store;