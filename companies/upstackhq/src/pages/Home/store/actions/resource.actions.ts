import { IPost } from '../../models/post.interface';

export enum ResourceTypes {
	SEARCH_MANY = '[Posts] Search Many',
	SEARCH_MANY_SUCCESS = '[Posts] Search Many Success',
	SEARCH_MANY_ERROR = '[Posts] Search Many Error',
};

type ISearchMany = { type: typeof ResourceTypes.SEARCH_MANY, payload: { data: IPost[] } };
type ISearchManySuccess = { type: typeof ResourceTypes.SEARCH_MANY_SUCCESS, payload: { data: IPost[] } };
type ISearchManyError = { type: typeof ResourceTypes.SEARCH_MANY_ERROR, payload: { error: any } };
export type EntityActionTypes = ISearchMany | ISearchManySuccess | ISearchManyError;

export const resourceActionCreators = {
	searchMany: (data: IPost[]): ISearchMany => ({ type: ResourceTypes.SEARCH_MANY, payload: { data } }),
	searchManySuccess: (data: IPost[]): ISearchManySuccess => ({ type: ResourceTypes.SEARCH_MANY_SUCCESS, payload: { data } }),
	searchManyError: (error: any): ISearchManyError => ({ type: ResourceTypes.SEARCH_MANY_ERROR, payload: { error } })
}