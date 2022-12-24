import { ADD_CHARACTER, DELETE_CHARACTER, DELETE_ALL } from "./actions.js"

const initialState = {
    myFavorites: []
}

 const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHARACTER:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        case DELETE_CHARACTER:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(charac => action.payload !== charac.name)
            }
        case DELETE_ALL:
            return {
                myFavorites: []
            }
        default:
            return {...state}
    }
}

export default reducer