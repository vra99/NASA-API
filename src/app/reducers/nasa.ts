import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { NasaActions } from 'app/actions/action-types';
import { NasaModel } from 'app/models';

const initialState: RootState.NasaState = {
  loading: true,
  image: undefined,
  favorites: [],
};

export const nasaReducer = handleActions<RootState.NasaState, NasaModel>(
  {
    [NasaActions.Type.GET_IMAGE]: (state, action) => {
      return { 
          ...state,
          loading: false,
          image:{
            id: state.favorites.reduce((max, image) => Math.max(image.id || 1, max), 0) + 1,
            title: action.payload.title,
            url: action.payload.url
          }
        };
    },
    [NasaActions.Type.ADD_TO_FAVORITE]: (state, action) => {
        const newFavorite= {
            id: state.favorites.reduce((max, image) => Math.max(image.id || 1, max), 0) + 1,
            title: action.payload.title,
            url: action.payload.url
        };
        return {
          ...state,
          loading: false,
          favorites: [...state.favorites, newFavorite]
        }
      },
  },
  initialState
);