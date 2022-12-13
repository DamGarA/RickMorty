export const ADD_CHARACTER = 'ADD_CHARACTER'
export const DELETE_CHARACTER = 'DELETE_CHARACTER'


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

