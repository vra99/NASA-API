import { combineReducers } from 'redux';
import { RootState } from './state';
import { nasaReducer } from './nasa';

export { RootState };

export const rootReducer = combineReducers<RootState>({
  nasa: nasaReducer
});
