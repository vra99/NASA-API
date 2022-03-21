import { NasaModel } from 'app/models';

export interface RootState {
  nasa: RootState.NasaState;
  router?: any;
}

export namespace RootState {
  export type NasaState = NasaModel;
}
  