import { properties } from "../components/Card";


export const initialState = {properties: [],};

export function favouriteReducer(state, action){
    const existingFavouriteProperty = state.properties.find((property) => {
        return property.id === action.payload.id;
      });
     
      if (existingFavouriteProperty) {
        return state;

      } else {
        return {
          properties: [...state.properties, action.payload]
        };
      }
}

