import { Dispatch } from 'redux';
import axios from 'axios';
import { NasaActions } from "./action-types";
import { Image } from 'app/models/NasaModel';
import { randomDate } from '../utils'

export const getRandomPicture= () => async (
    dispatch: Dispatch
  ) => {
  try {
    var url= "https://api.nasa.gov/planetary/apod?api_key=nGyb4L9GhjsBPfcA5Z4q5LzxUzs5ryYDMWIQA4kE";
    const date = randomDate();
    const { data } = await axios.get(
      url+="&date="+date
    );

    dispatch({
      type: NasaActions.Type.GET_IMAGE,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NasaActions.Type.ERROR,
      payload: error,
    });
  }
};

export const addToFavorite= (favorite: Image) => async (
    dispatch: Dispatch
  ) => {
  try {
    dispatch({
      type: NasaActions.Type.ADD_TO_FAVORITE,
      payload: favorite,
    });
  } catch (error) {
    dispatch({
      type: NasaActions.Type.ERROR,
      payload: error,
    });
  }
};