import {ADD_AREA, DELETE_AREA, EDIT_AREA} from "./types";
import uuid from 'uuid';

export const addAreaField = (area) => {
  const id = uuid.v4();
  return{
    type: ADD_AREA,
    payload: {...area, id}
  }
};

export const editAreaField = (data, id) => {
  return {
    type: EDIT_AREA,
    payload: {data, id}
  }
};

export const deleteAreaField = (id) => {
  return {
    type: DELETE_AREA,
    payload: id
  }
};