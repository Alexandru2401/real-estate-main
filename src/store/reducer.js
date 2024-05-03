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
        updapedProperties = state.properties.map((property) =>{
          if (foundProperty.id === property.id) {
            return {
              ...property,
              quantity: property.quantity + 1,
            }
          } else {
            return property
          }
        })
      } else {
        const newProperty = {
          ...action.payload,
          quantity : 1
        }
        updapedProperties = [...state.properties, newProperty];
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

