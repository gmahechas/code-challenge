import { connect, ConnectedProps } from 'react-redux';
import { combineReducers } from 'redux';
import { IRootState } from '../../../../core/store';

import * as fromDucks from './../ducks';
import { reducer as resource, State as ResourceState } from './resource.reducer';

export interface State {
	resource: ResourceState;
}

export const reducers = combineReducers<State>({ resource });
export const connector = connect((state: IRootState) => ({ home: state.home }), fromDucks);
export type PropsFromRedux = ConnectedProps<typeof connector>;