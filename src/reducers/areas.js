import {ADD_AREA, DELETE_AREA, EDIT_AREA} from "../actions/types";


const initState = {
  areas: []
};


export default (state = initState, action) => {
  const {type, payload} = action;

  switch (type){

    case ADD_AREA:
      return {
        ...state,
        areas: [...state.areas, payload]
      };

    case EDIT_AREA:
      return {
        ...state,
        areas: state.areas.map(area => area.id === payload.id ? {...payload.data} : area)
      };

    case DELETE_AREA:
      return {
        ...state,
        areas: state.areas.filter(area => area.id !== payload)
      };

    default:
      return state;

  }
}