import { properties } from "../components/Card";

export const initialState = {properties: [],};

export function favouriteReducer(state, action){
  switch(action.type) {
    case "ADD_TO_FAVOURITES": {
      let updapedProperties;
      let newState; 
      const foundProperty = state.properties.find((property) =>{
        return property.id === action.payload.id;
      })
      if(foundProperty){
        return state;
      } else {
        return {
          properties: [...state.properties, action.payload]
        }
      }
      newState = {
        properties: updapedProperties
      }
      return newState;

    }  case "REMOVE_FROM_FAVOURITES" : {
      const filteredProperties = state.properties.filter((property) =>{
        return property.id !== action.payload;
      })
      const newState = {
        properties: filteredProperties
      };
      return newState;
    }
    default: {
      return state;
    }
  }
}

