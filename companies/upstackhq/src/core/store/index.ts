import { configureStore, combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';

import { reducers as home, State as HomeState } from './../../pages/Home/store/reducers';

export default configureStore({
	reducer: combineReducers({ home }),
	middleware: [thunk],
});

export interface IRootState {
	home: HomeState
}