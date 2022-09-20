import { Dispatch } from 'redux';
import { IPost } from '../../models/post.interface';
import { resourceActionCreators } from '../actions';


export const searchMany = (data: IPost[]) => async (dispatch: Dispatch, getState: () => void) => {
	try {
		dispatch(resourceActionCreators.searchMany(data));
		dispatch(resourceActionCreators.searchManySuccess([]));
	} catch (error) {
		dispatch(resourceActionCreators.searchManyError(error));
	}
}