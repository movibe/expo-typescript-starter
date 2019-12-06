import { combineReducers } from 'redux';
import { IAppState } from 'store/types';
import app from 'store/app/reducer';
// Import state here

export default combineReducers<IAppState>({
	app
	// Insert state here
});
