export function addToFavourites(property){
    return {
        type: "ADD_TO_FAVOURITES",
        payload: property      
    };
}

export function removeFromFavourites(propertyId){
    return {
        type: "REMOVE_FROM_FAVOURITES",
        payload: propertyId
    }
}