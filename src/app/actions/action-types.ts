import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';
import { NasaModel } from 'app/models';

export namespace NasaActions {
  export enum Type {
    GET_IMAGE = 'GET_IMAGE',
    ADD_TO_FAVORITE = 'ADD_TO_FAVORITE',
    ERROR = 'ERROR',
  }

  export const getImage = createAction<NasaModel>(Type.GET_IMAGE);
  export const addToFavorite = createAction<NasaModel>(Type.ADD_TO_FAVORITE);

}

export type NasaActions = Omit<typeof NasaActions, 'Type'>;
export const useNasaActions = (dispatch: Dispatch) => {
  const { Type, ...actions } = NasaActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as NasaActions;
};
  