import { IPost } from '../../models/post.interface';
import { ResourceTypes, EntityActionTypes } from '../actions/resource.actions';

export interface State {
	readonly data: IPost[];
}

const initialState: State = {
	data: []
}

export const reducer = (state = initialState, action: EntityActionTypes): State => {
	switch (action.type) {
		case ResourceTypes.SEARCH_MANY_SUCCESS:
			return { ...state, data: action.payload.data }
		case ResourceTypes.SEARCH_MANY_ERROR:
			return { ...state, data: [] }
		default:
			return state;
	}
}