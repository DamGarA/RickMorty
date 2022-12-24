export const ADD_CHARACTER = 'ADD_CHARACTER'
export const DELETE_CHARACTER = 'DELETE_CHARACTER'
export const DELETE_ALL = 'DELETE_ALL'


export function addCharacter (character) {
    return {
        type: ADD_CHARACTER,
        payload: character
    }
}

export function deleteCharacter (name) {
    return {
        type: DELETE_CHARACTER,
        payload: name
    }
}

export function deleteAll () {
   return  {
    type: DELETE_ALL
    }
}
